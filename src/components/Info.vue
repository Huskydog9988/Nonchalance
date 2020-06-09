<template>
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x left>
      <template v-slot:activator="{ on: menu }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn icon v-on="{ ...tooltip, ...menu }">
              <i class="fas fa-info" alt="info"></i>
            </v-btn>
          </template>
          <span>Info</span>
        </v-tooltip>
      </template>

      <v-card tile>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>19/5/2020</v-list-item-title>
              <v-list-item-subtitle>This timeline was last updated on this day.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>More Info</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                icon
                href="https://docs.google.com/document/d/1-82bl0vQRUbIBDE47f63bjoabKc5gJ7br9hvha6cuWQ/edit?usp=sharing"
                target="_blank"
              >
                <i class="fas fa-external-link-alt" alt="link"></i>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
// Last updated on 19/5/2020
export default {
  name: "Info",
  props: [],
  data: () => ({
    menu: false
  })
};
</script>