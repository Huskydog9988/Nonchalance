<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Nonchalance Logo"
          class="shrink mr-2"
          contain
          src="/Nonchalance/nonchalance.svg"
          transition="scale-transition"
          width="40"
        />
        <span class="mr-2">Nonchalance Timeline</span>
      </div>

      <v-spacer></v-spacer>

      <Settings v-bind:story="story" />
      
    </v-app-bar>

    <v-content class="px-6">
      <notifications group="copy" position="bottom right"/>
      <Timeline v-bind:story="story"/>
    </v-content>
  </v-app>
</template>

<script>
// <v-btn
//   href="https://discord.gg/MCPZQ39"
//   target="_blank"
//   text
// >
//   <span class="mr-2">Discord</span>
//   <v-icon>mdi-open-in-new</v-icon>
// </v-btn>
import Timeline from "./components/Timeline";
import Settings from "./components/Settings";

export default {
  name: 'App',

  components: {
    Timeline,
    Settings
  },

  data: () => ({
    story: {
      DispatchesFromElsewhere: true,
      NewNoologyNetwork: true,
      JejuneInstitute: true,
      LatitudeSociety: true,
      Spoilers: true
    }
  }),
};
</script>