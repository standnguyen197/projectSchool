// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

//----- FACEBOOK LOGIN ------//
import FBSignInButton from 'vue-facebook-signin-button'
import FBSdk from './FBSdk'

//----- VUE-SESSION ------//
import VueSession from 'vue-session'

//----- VUE-TITLE ------//
import vueHeadful from 'vue-headful';

//----- VUE-ICON ------//
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'

//----- VUE-TIME -----//
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
require('moment/locale/vi')

//--- VUE-SOCKET-IO ----//
import VueSocketIO from 'vue-socket.io';

//--- VUE-STORAGE ----//
import VueLocalStorage from 'vue-localstorage'

import '@/assets/css/font-awesome.css'

import Snotify from 'vue-snotify';
// You also need to import the styles. If you're using webpack's css-loader, you can do so here:
import 'vue-snotify/styles/simple.css'; // or dark.css or simple.css

Vue.use(Snotify);


Vue.use(VueLocalStorage)
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

Vue.component('icon', Icon)
Vue.component('vue-headful', vueHeadful);
Vue.use(VueSession)
Vue.use(FBSdk)
Vue.use(FBSignInButton)
Vue.config.productionTip = false
Vue.use(BootstrapVue)


// export const SocketInstance = socketio('http://localhost:8080');

Vue.use(VueSocketIO, 'http://localhost:8080');

Vue.use(VueMoment, {
    moment,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
