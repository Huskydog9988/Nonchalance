<template>
  <v-tooltip color="grey darken-4" v-model="hover" right>
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        small
        v-clipboard:copy="eventLink"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        v-on="on"
        @click="hover = !hover"
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
      hover: false,
      snackbar: false
    };
  },
  methods: {
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
      console.error(e)
    }
  }
};
</script>