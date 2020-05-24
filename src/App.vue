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

      <Settings v-on:sort="sort($event)" v-on:isLoading="isLoading = $event" :story="story" />
    </v-app-bar>

    <v-content class="px-6">
      <notifications group="copy" position="bottom right" />
      <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="isFullPage" />
      <Timeline v-on:isLoading="isLoading = $event" :story="story" :shouldSort="shouldSort" />
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
const Loading = () => import("vue-loading-overlay");
//import "vue-loading-overlay/dist/vue-loading.css"; //Loading component CSS

import Timeline from "./components/TimelineIF";
const Settings = () => import("./components/Settings");
const Footer = () => import("./components/Footer");
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
      Crystore: true,
      DispatchesFromElsewhere: true,
      NewNoologyNetwork: true,
      JejuneInstitute: true,
      LatitudeSociety: true,
      Spoilers: true
    },
    shouldSort: false,
    isLoading: true,
    isFullPage: true,
    logoPath:
      process.env.NODE_ENV === "production"
        ? "/Nonchalance/nonchalance.svg"
        : "/nonchalance.svg"
  }),
  methods: {
    sort: function(story) {
      this.shouldSort = true;
      this.story = story;
    }
  }
};
</script>