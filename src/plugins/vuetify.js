import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#62696d',
                secondary: '#444950',
                accent: '#444950',
                error: '#b71c1c',
            },
        },
        options: {
            themeCache: {
                get: key => localStorage.getItem(key),
                set: (key, value) => localStorage.setItem(key, value),
            },
        },
    },
    icons: {
        iconfont: 'fa'
    },
});
