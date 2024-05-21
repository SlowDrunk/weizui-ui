import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import WZUI from 'weizui-ui'
const app = createApp(App)
app.use(WZUI).mount('#app')
