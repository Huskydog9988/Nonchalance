<template>
  <div>
    <v-dialog v-model="dialog" scrollable max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <i class="fas fa-info" alt="info"></i>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Info</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 400px;">
          <v-list-item>
            <v-list-item-subtitle class="text-wrap">The timeline was last published on:</v-list-item-subtitle>
            <v-list-item-title>{{$root.lastPublishDate}}</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-subtitle>Contributors:</v-list-item-subtitle>
            <v-list-item-title class="text-wrap">Huskydog9988, pinklemonlies, Argonaute, and Orra.</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-subtitle class="text-wrap">Nonchalance Discord:</v-list-item-subtitle>
            <v-list-item-title>
              <v-list-item-action>
              <v-btn
                icon
                large
                left
                shaped
                target="_blank"
                href="https://discord.gg/MCPZQ39"
              >
                <i class="fab fa-discord" alt="discord"></i>
              </v-btn>
              </v-list-item-action>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-subtitle class="text-wrap">More timeline info:</v-list-item-subtitle>
            <v-list-item-title>
              <v-list-item-action>
              <v-btn
                icon
                large
                left
                target="_blank"
                href="https://docs.google.com/document/d/1-82bl0vQRUbIBDE47f63bjoabKc5gJ7br9hvha6cuWQ/edit?usp=sharing"
              >
                <i class="fas fa-external-link-alt" alt="outside link"></i>
              </v-btn>
              </v-list-item-action>
            </v-list-item-title>
          </v-list-item>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogm1: "",
      dialog: false
    };
  }
};
</script>