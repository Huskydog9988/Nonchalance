<template>
  <v-tooltip color="grey darken-4" v-model="hover" right>
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        small
        v-on="on"
        @click="hover = !hover"
      >
        <i class="fas fa-comment text-success" alt="torii-gate"></i>
      </v-btn>
    </template>
    <span>This a comment</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "Commentary",
  props: [],
  data: () => {
    return {
      hover: false,
    };
  }
};
</script>