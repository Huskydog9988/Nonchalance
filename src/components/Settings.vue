<template>
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x left>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <i class="fas fa-cog" alt="settings"></i>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Hide/Show Story Lines & Other Content</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="story.DispatchesFromElsewhere" color="blue lighten-1"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Dispatches from Elsewhere</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="story.NewNoologyNetwork" color="blue lighten-1"></v-switch>
            </v-list-item-action>
            <v-list-item-title>New Noology Network</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="story.JejuneInstitute" color="blue lighten-1"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Jejune Institute</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="story.LatitudeSociety" color="blue lighten-1"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Latitude Society</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="story.Spoilers" color="blue lighten-1"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Spoilers</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn bottom x-small text absolute left>Updated: 19/5/2020</v-btn>
          <v-btn text @click="menu = false">Cancel</v-btn>
          <v-btn
            light
            color="blue lighten-1"
            text
            v-on:click="$emit('sort')"
            @click="menu = false"
          >Sort</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "Settings",
  props: ["story"],
  data: () => ({
    menu: false
  })
};
</script>