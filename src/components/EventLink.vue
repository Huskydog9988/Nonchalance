<template>
  <v-tooltip v-model="copied" top>
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        small
        class="link"
        :data-clipboard-text="eventLink"
        v-on="on"
        @click="copied = !copied"
      >
        <i class="fas fa-link" alt="link"></i>
      </v-btn>
    </template>
    <span>Copy link to event</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "EventLink",
  props: ["eventLink"],
  data: () => {
    return {
      copied: false,
    };
  }
};
</script>