<template>
  <v-container fluid full-height class="pa-0 d-flex align-center bg-dis">
    <v-row class="screen">
      <v-col class="hidden-sm-and-down"></v-col>
      <v-col cols="12" sm="8" class="mx-auto px-8 screen">
        <v-card class="screen my-3">
          <v-row>
            <v-col class="title text-center font-weight-regular mt-3">
              {{
              discountTitle
              }}
            </v-col>
          </v-row>
          <v-divider class="mb-3"></v-divider>
          <v-row
            v-for="(discount, i) in discounts"
            :key="i"
            class="px-5 d-flex align-center justify-center text-center"
          >
            <v-col cols="2" class="hidden-sm-and-down"></v-col>
            <v-col>
              <v-row class="mx-3 py-0">
                <v-col cols="1">
                  <v-icon color="teal" class="pa-0" medium>mdi-sale</v-icon>
                </v-col>
                <v-col>{{ discount.di_name }}</v-col>
                <v-col cols="3">{{ discount.di_percentage * 100 }}%</v-col>
              </v-row>
              <v-divider color="teal"></v-divider>
            </v-col>
            <v-col cols="2" class="hidden-sm-and-down"></v-col>
          </v-row>
          <v-row v-if="discounts.length == 0">
            <v-col>
              <p class="text-center">{{ noDiscountsText }}</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="hidden-sm-and-down"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState("discount", ["discounts"]),
  },
})
export default class Discounts extends Vue {
  $store: any;
  discountTitle = "My discounts";
  noDiscountsText = "You don't have discounts available";

  created() {
    this.$store.dispatch("discount/getDiscounts", localStorage.getItem("ID"));
  }

  mounted() {
    this.translate();
  }

  get translator() {
    return this.$store.state.translate.languageTexts;
  }
  @Watch("translator")
  translate() {
    this.translator
      .filter(
        (term: { context: string; name: string; translation: string }) => {
          return term.context == "discount";
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "discountTitle") {
            this.discountTitle = term.translation;
          } else if (term.name == "noDiscountsText") {
            this.noDiscountsText = term.translation;
          }
        }
      );
  }
}
</script>

<style lang="scss" scoped>
.screen {
  height: 70vh;
}
.discount-card {
  border: 5px solid teal;
}
.bg-dis {
  background-color: #f7f7f7;
}
</style>
