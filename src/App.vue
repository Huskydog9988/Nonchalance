<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Nonchalance Logo"
          class="shrink mr-2"
          contain
          :src="logoPath"
          transition="scale-transition"
          width="40"
        />
        <span class="mr-2">Nonchalance Timeline</span>
      </div>

      <v-spacer></v-spacer>

      <Sort :eventBus="eventBus" v-on:isLoading="isLoading = $event" />
      <Settings :eventBus="eventBus" v-on:isLoading="isLoading = $event" />
      <Info />
    </v-app-bar>

    <v-main class="px-6">
      <v-overlay :value="isLoading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>

      <Timeline v-on:isLoading="isLoading = $event" :eventBus="eventBus" />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Vue from "vue";

import Timeline from "./components/Timeline";
import Sort from "./components/Sort";
import Settings from "./components/Settings";
import Info from "./components/Info";
const Footer = () => import("./components/Footer");

export default {
  name: "App",
  components: {
    Timeline,
    Sort,
    Settings,
    Info,
    Footer
  },
  data: () => ({
    isLoading: true,
    logoPath:
      process.env.NODE_ENV === "production"
        ? "/Nonchalance/nonchalance.svg"
        : "/nonchalance.svg",
    eventBus: new Vue(),
    scrolledTo: false
  }),
  methods: {
    // runSort() {
    //   this.eventBus.$emit('sort')
    // }
  },
  watch: {
    isLoading: function (val) {
      if (!this.scrolledTo && !val) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        if (!urlParams.has("event")) return;

        const event = urlParams.get('event');
        setTimeout(function(){
          const element = document.getElementById(event);
          element.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }, 2000);

        // console.log(event)
      }
    }
  }
};
</script>