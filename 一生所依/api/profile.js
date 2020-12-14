import axios from '@/axios/request';//导入request中创建的axios实例
// import qs from 'qs';

// const profile={
// 	//登录
// 	login(params){
// 		console.log(params);
// 		return axios.post('/index/login',params)
// 	}
// }

// export default profile

const profile = [
    '/index/login',  // 登录
]

let apiName, API = {}
profile.forEach(path => {
    // 使用正则取到接口路径的最后一个子串，比如: getPublicKey
    apiName = /(?<=\/)[^/]+$/.exec(path)[0]   
    API[apiName] = (path,data) => {
		console.log(path,data);
        return axios.post(path,data)
    }
})

export { API }