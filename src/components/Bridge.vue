<template>
  <v-tooltip color="grey darken-4" v-model="hover" right>
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        small
        v-on="on"
        @click="hover = !hover"
      >
        <i v-bind:class="[bridge]" class="fas fa-torii-gate" alt="torii-gate"></i>
      </v-btn>
    </template>
    <span>The event's bridge is: {{bridge}}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "Bridge",
  props: ["bridge"],
  data: () => {
    return {
      hover: false,
    };
  }
};
</script>

<style scoped>
.Red {
  color: #ee5f5b
}
.Yellow {
  color: #e0c736
}
.Green {
  color: #62c462
}
.Blue {
  color: #3677cc
}
</style>