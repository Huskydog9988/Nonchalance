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

      <Settings v-on:sort="sort()" v-on:isLoading="isLoading = $event" :story="story" />
    </v-app-bar>

    <v-content class="px-6">
      <notifications group="copy" position="bottom right" />
      <!-- <Loading v-if="loading" class="center"/> -->
      <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="isFullPage" />
      <Timeline v-on:isLoading="isLoading = $event" :story="story" />
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css"; //Loading component CSS

import Timeline from "./components/Timeline";
import Settings from "./components/Settings";
import Footer from "./components/Footer";
// import Loading from "./components/Loading";

export default {
  name: "App",
  components: {
    Timeline,
    Settings,
    Footer,
    Loading
  },
  data: () => ({
    story: {
      DispatchesFromElsewhere: true,
      NewNoologyNetwork: true,
      JejuneInstitute: true,
      LatitudeSociety: true,
      Spoilers: true
    },
    isLoading: true,
    isFullPage: true,
    logoPath:
      process.env.NODE_ENV === "production"
        ? "/Nonchalance/nonchalance.svg"
        : "/nonchalance.svg"
  }),
  methods: {
    sort: function() {}
  }
};
</script>

<style>
.center {
  margin: auto;
  position: absolute;
  width: 50%;
  /* height: 50%; */
}
</style>