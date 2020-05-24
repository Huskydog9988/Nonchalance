<template>
  <v-tooltip v-model="copied" top>
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        small
        class="link"
        :data-clipboard-text="eventLink"
        v-on="on"
        @click="notify({
          group: 'copy',
          title: 'Copied Link',
          text: 'You have copied a link to an event!'
        });"
      >
        <i class="fas fa-link" alt="link"></i>
      </v-btn>
    </template>
    <span>Copy link to event</span>
  </v-tooltip>
</template>

<script>
//<span>Copied link to event</span>
const vue = () => import("vue");

export default {
  name: "EventLink",
  props: ["eventLink"],
  data: () => {
    return {
      copied: false,
      notify: vue.notify
    };
  },
  methods: {
    setCopied: copied => {
      console.log(copied);
      copied = true;

      setTimeout(function() {
        copied = false;
      }, 1000);
    }
  }
};
</script>