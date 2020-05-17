<template>
  <v-container fluid class="pa-0">
    <div id="map"></div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

@Component({})
export default class Home extends Vue {
  mounted() {
    const map = new mapboxgl.Map({
      container: "map",
      attributionControl: false, //need this to show a compact attribution icon (i) instead of the whole text
      style: `${process.env.VUE_APP_LOCATIONIQ_URL_STREETS}?key=${process.env.VUE_APP_LOCATIONIQ_API_KEY}`,
      zoom: 9,
      center: [-122.461627, 37.752945],
    });
    map.addControl(
      new mapboxgl.ScaleControl({
        maxWidth: 80,
        unit: "metric", //imperial for miles
      })
    );
    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            message: "Foo",
            iconSize: [60, 60],
          },
          geometry: {
            type: "Point",
            coordinates: [-122.487377, 37.772487],
          },
        },
        {
          type: "Feature",
          properties: {
            message: "Bar",
            iconSize: [50, 50],
          },
          geometry: {
            type: "Point",
            coordinates: [-122.461627, 37.752945],
          },
        },
        {
          type: "Feature",
          properties: {
            message: "Baz",
            iconSize: [40, 40],
          },
          geometry: {
            type: "Point",
            coordinates: [-122.431415, 37.761766],
          },
        },
      ],
    };

    const markers: any = [];
    //Add markers to map
    //https://www.mapbox.com/mapbox-gl-js/api#marker
    geojson.features.forEach(function (marker) {
      // create a DOM element for the marker
      const el = document.createElement("div");
      el.className = "marker";

      //Instead of this click listener, we can attach a popup / infowindow to this marker (see next section)
      el.addEventListener("click", function () {
        window.alert(marker.properties.message);
      });

      // add marker to map
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
      markers.push(marker.geometry.coordinates);
      map.on("load", function () {
        const mapLayer = map.getLayer("route");

        if (typeof mapLayer !== "undefined") {
          // Remove map layer & source.
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
                coordinates: [
                  [-122.487377, 37.772487],
                  [-122.461627, 37.752945],
                  [-122.431415, 37.761766],
                ],
              },
            },
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#B22222",
            "line-width": 5,
          },
        });
      });
    });
    console.log(markers);
    map.fitBounds(
      [
        [-122.487377, 37.772487],
        [-122.431415, 37.761766],
      ],
      {
        padding: { top: 50, bottom: 50, left: 30, right: 30 },
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
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 500px;
}
</style>
