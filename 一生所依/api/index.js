//api接口的统一出口
//地址模块接口
function request(path,params,methods,callback){
	console.log(path,params,methods)
	uni.request({
		url: "http://yishengsuoyi.cnyouwei.com/index/index"+path, //仅为示例，并非真实接口地址。
		method: methods,
		data: params,
		header: {
			"Content-Type": "application/x-www-form-urlencoded" //自定义请求头信息
		},
		success: (res) => {
			// this.img = res.data.result.img
			// console.log(this.img)
			callback(res)
			
		}
	});
}

export default request

