<template>
  <div>
    <v-dialog v-model="dialog" scrollable max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <i class="fas fa-filter" alt="filter"></i>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Filter Options</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 400px;">
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

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="$root.Commentary" color="blue lighten-1"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Commentary</v-list-item-title>
          </v-list-item>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn text @click="dialog = false">Close</v-btn>
          <v-btn text @click="dialog = false" v-on:click="sort()" color="blue lighten-1">Sort</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Sort",
  props: ["eventBus"],
  components: {
    // Menu: () => import('./SettingsMenu.vue')
  },
  data: () => ({
    menu: false,
    dialogm1: "",
    dialog: false
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