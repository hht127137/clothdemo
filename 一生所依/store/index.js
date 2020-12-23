import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
	state:{
		usermsg:{}
	},
	getters:{
		
	},
	mutations:{
		getUserMsg(state,payload){
			console.log(payload)
			//保存用户信息
			uni.setStorageSync("token",payload.token)
			uni.setStorageSync("username",payload.usernmae)
			uni.setStorageSync('userid',payload.id)
		}
	},
	actions:{
		
	},
	modules:{
		
	}
})

export default store