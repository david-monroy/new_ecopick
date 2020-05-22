<template>
  <div id="map"></div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import { Watch } from "vue-property-decorator";
import moment from "moment";

@Component({
  computed: {
    ...mapState("shipment", { route: "mapRoute" }),
  },
})
export default class Map extends Vue {
  route!: [
    {
      primaryline: string;
      date: string;
      latlon: { lon: number; lat: number };
      status: string;
    }
  ];
  status = "Status";
  direction = "Direction";
  stop = "Stop";
  date = "Date";

  @Watch("route")
  setRoute() {
    const markers: {
      type: string;
      properties: {
        stop: number;
        direction: string;
        date: string;
        status: string;
      };
      geometry: { type: string; coordinates: number[] };
    }[] = [];
    const routeLine: number[][] = [];
    for (let i = 0; i < this.route.length; i++) {
      markers.push({
        type: "Feature",
        properties: {
          stop: i + 1,
          direction: this.route[i].primaryline,
          date: moment(this.route[i].date).format("YYYY-MM-DD HH:mm:ss"),
          status: this.route[i].status,
        },
        geometry: {
          type: "Point",
          coordinates: [this.route[i].latlon.lon, this.route[i].latlon.lat],
        },
      });
      routeLine.push([this.route[i].latlon.lon, this.route[i].latlon.lat]);
    }

    /* MAP CREATION */
    const map = new mapboxgl.Map({
      container: "map",
      attributionControl: false,
      style: `${process.env.VUE_APP_LOCATIONIQ_URL_STREETS}?key=${process.env.VUE_APP_LOCATIONIQ_API_KEY}`,
    });
    map.addControl(
      new mapboxgl.ScaleControl({
        maxWidth: 80,
        unit: "metric",
      })
    );
    const geojson = {
      type: "FeatureCollection",
      features: markers,
    };

    /* MAP MARKERS */
    geojson.features.forEach((marker) => {
      const el = document.createElement("div");
      el.className = "marker";
      el.style.padding = "0 0 90px 0";

      const popup = new mapboxgl.Popup().setHTML(
        `<b>${this.stop}:</b> ${marker.properties.stop}<br>
        <b>${this.direction}:</b> ${marker.properties.direction}<br>
        <b>${this.date}:</b> ${marker.properties.date}<br>
        <b>${this.status}:</b> ${marker.properties.status}`
      );

      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
      map.on("load", function () {
        const mapLayer = map.getLayer("route");
        if (typeof mapLayer !== "undefined") {
          map.removeLayer("route").removeSource("route");
        }
        map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: routeLine,
              },
            },
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "teal",
            "line-width": 3,
          },
        });
      });
    });
    const bounds = new mapboxgl.LngLatBounds();

    geojson.features.forEach(function (feature) {
      bounds.extend(feature.geometry.coordinates);
    });

    map.fitBounds(bounds, {
      padding: { top: 50, bottom: 10, left: 30, right: 30 },
    });
  }
  get translator() {
    return this.$store.state.translate.languageTexts;
  }
  @Watch("translator")
  translate() {
    this.translator
      .filter(
        (term: { context: string; name: string; translation: string }) => {
          return term.context == "route";
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "routeStatus") {
            this.status = term.translation;
          } else if (term.name == "routeDirection") {
            this.direction = term.translation;
          } else if (term.name == "routeDate") {
            this.date = term.translation;
          } else if (term.name == "routeStop") {
            this.stop = term.translation;
          }
        }
      );
  }
}
</script>

<style lang="scss">
.marker {
  display: block;
  border: none;
  cursor: pointer;
  padding: 0;
  background-image: url("../assets/marker.png");
  background-size: contain;
  width: 30px;
  height: 50px;
  padding-bottom: 20px;
}
#map {
  width: 100%;
  height: 100%;
}
</style>
