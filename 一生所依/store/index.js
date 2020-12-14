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
			state.usermsg=payload
			uni.setStorageSync("token",state.usermsg.token)
		}
	},
	actions:{
		
	},
	modules:{
		
	}
})

export default store