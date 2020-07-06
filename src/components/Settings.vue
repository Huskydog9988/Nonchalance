<template>
  <div class="text-center">
    <v-btn icon @click="menu = true">
      <i class="fas fa-cog" alt="settings"></i>
    </v-btn>
    <v-row justify="center">
      <v-dialog max-width="500px" v-model="menu" scrollable>
        <v-card>
          <v-card-title>Settings</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;">
            <v-list-item three-line>
              <v-list-item-action>
                <v-switch v-model="$root.live" color="blue lighten-1"></v-switch>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Live Content</v-list-item-title>
                <v-list-item-subtitle>More up to date content from CMS server, but largly reduced load times.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item three-line>
              <v-list-item-action>
                <v-switch v-model="$root.debug" color="blue lighten-1"></v-switch>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Debug</v-list-item-title>
                <v-list-item-subtitle>Shows more information. Some of the info shown could be useful to you but is mostly there to debug the code.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item three-line>
              <v-list-item-action>
                <v-switch v-model="$root.showDates" color="blue lighten-1"></v-switch>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Show Dates</v-list-item-title>
                <v-list-item-subtitle>Shows the exact date of the event for easy referance.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text @click="menu = false">Cancel</v-btn>
            <v-btn text @click="menu = false" color="blue lighten-1" v-on:click="sort()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
//<SettingsCard v-on:sort="sort($event)" :menu="menu"/>
export default {
  name: "Settings",
  props: ["eventBus"],
  components: {
    // Menu: () => import('./SettingsMenu.vue')
  },
  data: () => ({
    menu: false
  }),
  methods: {
    sort() {
      this.$root.saveSettings();
      this.$emit("isLoading", true);

      this.eventBus.$emit("sort");
    }
  }
};
</script>