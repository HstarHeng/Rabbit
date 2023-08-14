//引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

//引入懒加载指令插件并注册
import {lasyPlugin} from '@/directives'
// 引入全局组件插件
import {componentPlugin} from '@/components'

const app = createApp(App)

const pinia = createPinia()
//注册持久化插件
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(lasyPlugin)
app.use(componentPlugin)
app.use(pinia)
app.mount('#app')

// app.use(pinia).mount('#app')