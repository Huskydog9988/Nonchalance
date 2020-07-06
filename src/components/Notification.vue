<template>
  <v-snackbar
    v-model="snackbar"
  >
    {{ message }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="pink"
        text
        v-bind="attrs"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "notification",
  props: ["message"],
  data: () => {
    return {
      snackbar: false
    };
  }
};
</script>