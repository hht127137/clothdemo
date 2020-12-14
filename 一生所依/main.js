import Vue from 'vue'
import App from './App'
import api from './api'//导入接口
import {API} from '@/api/profile.js'

Vue.prototype.$http=API
Vue.prototype.$api=api
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
