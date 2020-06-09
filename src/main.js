import Vue from 'vue'
import Notifications from 'vue-notification'

import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.use(Notifications)
Vue.config.productionTip = false

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
    debug: false,
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
        const parsed = JSON.parse(localStorage.getItem('story'));
      
        this.live = parsed.live;
        this.debug = parsed.debug;
      } catch(e) {
        localStorage.removeItem('asorted');
      }
    }
  },
  methods: {
    saveSettings() {

      const live = this.live;
      const debug = this.debug;
      
      // Save story
      const parsedStory = JSON.stringify(this.story);
      localStorage.setItem('story', parsedStory);

      // Save asorted
      const parsedAsorted = JSON.stringify({
        live,
        debug
      });
      localStorage.setItem('asorted', parsedAsorted);
    },
  },
  render: h => h(App)
}).$mount('#app')
