import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueClipboard);

new Vue({
  vuetify,
  data: () => ({
    story: {
      Crystore: true,
      DispatchesFromElsewhere: true,
      NewNoologyNetwork: true,
      JejuneInstitute: true,
      LatitudeSociety: true,
      Spoilers: true
    },
    live: false,
    Commentary: true,
    debug: false,
    showDates: true,
    lastPublishDate: "July 6, 2020"
  }),
  beforeMount() {
    if (localStorage.getItem('story')) {
      try {
        this.story = JSON.parse(localStorage.getItem('story'));
      } catch(e) {
        localStorage.removeItem('story');
      }
    }

    if (localStorage.getItem('asorted')) {
      try {
        const parsed = JSON.parse(localStorage.getItem('asorted'));
      
        this.live = parsed.live;
        this.debug = parsed.debug;
        this.showDates = parsed.showDates;
      } catch(e) {
        localStorage.removeItem('asorted');
      }
    }
  },
  methods: {
    saveSettings() {

      const live = this.live;
      const debug = this.debug;
      const showDates = this.showDates;
      
      // Save story
      const parsedStory = JSON.stringify(this.story);
      localStorage.setItem('story', parsedStory);

      // Save asorted
      const parsedAsorted = JSON.stringify({
        live,
        debug,
        showDates
      });
      localStorage.setItem('asorted', parsedAsorted);
    },
  },
  render: h => h(App)
}).$mount('#app')
