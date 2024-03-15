import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import font awesome icon component */
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCalculator,
  faPlus,
  faMinus,
  faXmark,
  faDivide,
  faSquareRootVariable,
  faFont
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCalculator, faPlus, faMinus, faXmark, faDivide, faSquareRootVariable, faFont)

import '@mdi/font/css/materialdesignicons.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
