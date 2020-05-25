import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'mihospital',
  databaseURL: 'https://mihospital.firebaseio.com'
})
export const db = firebase.firestore()
import router from './router'
import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './css/mycss.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
