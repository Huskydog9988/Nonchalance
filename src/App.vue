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

      <Settings :eventBus="eventBus" v-on:isLoading="isLoading = $event" />
      <Info />
    </v-app-bar>

    <v-content class="px-6">
      <v-overlay :value="isLoading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
 
      <notifications group="copy" position="bottom right" />
      <Timeline v-on:isLoading="isLoading = $event" :eventBus="eventBus" />
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
import Vue from "vue";

import Timeline from "./components/Timeline";
import Settings from "./components/Settings";
import Info from "./components/Info";
const Footer = () => import("./components/Footer");
// import Loading from "./components/Loading";

export default {
  name: "App",
  components: {
    Timeline,
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
  }),
  methods: {
    // runSort() {
    //   this.eventBus.$emit('sort')
    // }
  }
};
</script>