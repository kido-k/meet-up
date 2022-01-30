import { loadFonts } from './plugins/webfontloader.js'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import store from './store'
import router from './router'

loadFonts()

const app = createApp(App)
app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')
