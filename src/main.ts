import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router'
import slideIn from './directive/slide'
import 'animate.css';


const app = createApp(App)
// 注册平滑上滑指令
app.directive('slide-in', slideIn)

app.use(createPinia())
app.use(router)

app.mount('#app')
