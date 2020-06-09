<template>
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x left>
      <template v-slot:activator="{ on: menu }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn icon v-on="{ ...tooltip, ...menu }">
              <i class="fas fa-cog" alt="settings"></i>
            </v-btn>
          </template>
          <span>Settings</span>
        </v-tooltip>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Story Lines & Other Content</v-list-item-title>
              <v-list-item-subtitle>Hide or show different story lines and other related content.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="$root.story.Crystore" color="blue lighten-1"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Crystore</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="$root.story.DispatchesFromElsewhere" color="blue lighten-1"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Dispatches from Elsewhere</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="$root.story.NewNoologyNetwork" color="blue lighten-1"></v-switch>
            </v-list-item-action>
            <v-list-item-title>New Noology Network</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="$root.story.JejuneInstitute" color="blue lighten-1"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Jejune Institute</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="$root.story.LatitudeSociety" color="blue lighten-1"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Latitude Society</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="$root.story.Spoilers" color="blue lighten-1"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Spoilers</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="$root.live" color="blue lighten-1"></v-switch>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Live Content</v-list-item-title>
              <v-list-item-subtitle>More up to date content from CMS server, but largly reduced load times.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="$root.debug" color="blue lighten-1"></v-switch>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Debug</v-list-item-title>
              <v-list-item-subtitle>Shows more information. Some of the info shown could be useful to you but is mostly there to debug the code.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="menu = false">Cancel</v-btn>
          <v-btn light color="blue lighten-1" text v-on:click="sort()" @click="menu = false">Sort</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
//<SettingsCard v-on:sort="sort($event)" :menu="menu"/>
export default {
  name: "Settings",
  props: ["eventBus"],
  data: () => ({
    menu: false
  }),
  methods: {
    sort() {
      this.$root.saveSettings();
      this.$emit("isLoading", true);
      
      this.eventBus.$emit('sort')
    }
  }
};
</script>