<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">
				欢迎回来！
			</view>
			<view>
				<view class="input-content">
					<view class="loginMode">
						<view v-for="(item,index) in loginMode" :key="index" @click="changeLogin(index)" :class="index==current?'active':''">
							{{item}}
						</view>
					</view>
					<!-- 密码登录 -->
					<view v-if="current==0">
						<view class="input-item">
							<text class="tit">手机号码</text>
							<input type="number" :value="mobile" placeholder="请输入手机号码" maxlength="11" data-key="mobile" @input="inputChange" />
						</view>
						<view class="input-item">
							<text class="tit">密码</text>
							<input type="mobile" value="" placeholder="8-18位不含特殊字符的数字、字母组合" placeholder-class="input-empty" maxlength="20"
							 password data-key="password" @input="inputChange" @confirm="toLogin" />
						</view>
					</view>
					<!-- 短信登录 -->
					<view v-else>
						<view class="input-item">
							<text class="tit">手机号码</text>
							<input type="number" :value="mobile" placeholder="请输入手机号码" maxlength="11" data-key="mobile" @input="inputChange" />
						</view>
						<view class="phoneMsg">
							<input class="tit" :value="sms" placeholder="请输入验证码" maxlength="7" data-key="sms" @input="inputChange" />
							<button @click="sendCode">{{codeBtn.text}}</button>
						</view>
					</view>
				</view>
			</view>

			<button class="confirm-btn" @click="toLogin" :disabled="logining">登录</button>
			<view class="forget-section">
				忘记密码?
			</view>
		</view>
		<view class="register-section">
			还没有账号?
			<text @click="toRegist">马上注册</text>
		</view>

	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	import request from "@/api/index.js"

	export default {
		data() {
			return {
				mobile: '',
				password: '',
				sms:'',
				logining: false,
				loginMode: ["密码登录", "短信登录"],
				current: 1,
				msg: "发送验证码",
				seconds: 10,
				codeBtn: {
					text: '获取验证码',
					waitingCode: false,
					count: this.seconds
				}
			}
		},
		onLoad() {

		},
		methods: {
			...mapMutations(['login']),
			inputChange(e) {
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			navBack() {
				uni.navigateBack();
			},
			toRegist() {
				this.$api.msg('去注册');
			},
			changeLogin(index) {
				this.current = index;
			},
			//发送验证码
			sendCode() {
				this.codeBtn.waitingCode = true;
				this.codeBtn.count = this.seconds;
				this.codeBtn.text = this.codeBtn.count + 's';
				
				let countdown = setInterval( () => {
					this.codeBtn.count--;
					this.codeBtn.text = this.codeBtn.count + 's';
					if( this.codeBtn.count < 0 ){
						clearInterval(countdown);
						this.codeBtn.text = '重新发送';
						this.codeBtn.waitingCode = false;
					}
				},1000);
				uni.request({
				    url: 'http://yishengsuoyi.cnyouwei.com/index/index/sendSMS', //仅为示例，并非真实接口地址。
				    method:"POST",
					data: {
				        mobile:this.mobile
				    },
				    header: {
				        "Content-Type":"application/x-www-form-urlencoded" //自定义请求头信息
				    },
				    success: (res) => {
				        console.log(res);
				    }
				});
				
			},
			async toLogin() {
				this.logining = true;
				// this.$http.login('/index/login',{mobile:this.mobile,password:this.password}).then(res=>{
				// 	console.log(res);
				// })
				//密码登录
				if (this.current == 0) {
					request("/login",{
							mobile: this.mobile,
							password: this.password
						},"post",function(res){
							console.log(res);
						})
					// uni.request({
					// 	url: 'http://yishengsuoyi.cnyouwei.com/index/index/login', //仅为示例，并非真实接口地址。
					// 	method: "POST",
					// 	data: {
					// 		mobile: this.mobile,
					// 		password: this.password
					// 	},
					// 	header: {
					// 		"Content-Type": "application/x-www-form-urlencoded" //自定义请求头信息
					// 	},
					// 	success: (res) => {
					// 		console.log(res.data.result);
					// 		this.img = res.data.result.img
					// 		console.log(this.img)
					// 		uni.showToast({
					// 			title: '登录成功',
					// 			duration: 2000
					// 		});
					// 	}
					// });
				}else{
					//验证码登录
					console.log(this.sms,this.mobile)
					uni.request({
					    url: 'http://yishengsuoyi.cnyouwei.com/index/index/smslogin', //仅为示例，并非真实接口地址。
					    method:"POST",
						data: {
					        mobile:this.mobile,
							sms:this.sms
					    },
					    header: {
					        "Content-Type":"application/x-www-form-urlencoded" //自定义请求头信息
					    },
					    success: (res) => {
					        console.log(res);
					        uni.showToast({
					            title: '登录成功',
					            duration: 2000
					        });
					    }
					});
				}
			}
		},

	}
</script>

<style lang='scss'>
	page {
		background: #fff;
	}

	.container {
		padding-top: 115px;
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
	}

	.wrapper {
		position: relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40upx;
	}

	.loginMode {
		display: flex;
		justify-content: space-around;

		view {
			margin-bottom: 36upx;
			color: #C0C0C0;
			font-size: 30upx;
		}
	}

	.active {
		color: #ED913A !important;
	}

	.back-btn {
		position: absolute;
		left: 40upx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40upx;
		font-size: 40upx;
		color: #007AFF;
	}

	.left-top-sign {
		font-size: 120upx;
		color: #F8F8F8;
		position: relative;
		left: -16upx;
	}

	.right-top-sign {
		position: absolute;
		top: 80upx;
		right: -30upx;
		z-index: 95;

		&:before,
		&:after {
			display: block;
			content: "";
			width: 400upx;
			height: 80upx;
			background: #b4f3e2;
		}

		&:before {
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}

		&:after {
			position: absolute;
			right: -198upx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}

	.left-bottom-sign {
		position: absolute;
		left: -270upx;
		bottom: -320upx;
		border: 100upx solid #d0d1fd;
		border-radius: 50%;
		padding: 180upx;
	}

	.welcome {
		position: relative;
		left: 50upx;
		top: -90upx;
		font-size: 46upx;
		color: #ED913A;
		text-shadow: 1px 0px 1px rgba(0, 0, 0, .3);
	}

	.input-content {
		padding: 0 60upx;
	}

	.input-item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		background: #F8F6FC;
		padding: 0 30upx;
		color: #ED913A;
		height: 120upx;
		border-radius: 4px;
		margin-bottom: 50upx;

		&:last-child {
			margin-bottom: 0;
		}

		.tit {
			height: 50upx;
			line-height: 56upx;
			font-size: 28upx;
			color: #ED913A;
		}

		input {
			height: 60upx;
			font-size: 28upx;
			color: #333333;
			width: 100%;
		}
	}

	.phoneMsg {
		display: flex;
		align-content: center;

		input {
			height: 60upx;
			background: #F8F6FC;
			margin-right: 16upx;
		}

		button {
			margin: 0;
		}
	}

	.confirm-btn {
		width: 630upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 60upx;
		background: #ED913A;
		color: #fff;
		font-size: 28upx;

		&:after {
			border-radius: 100px;
		}
	}

	.forget-section {
		font-size: 30upx;
		color: #ED913A;
		text-align: center;
		margin-top: 40upx;
	}

	.register-section {
		position: absolute;
		left: 0;
		bottom: 50upx;
		width: 100%;
		font-size: 22upx;
		color: #ED913A;
		text-align: center;

		text {
			color: #ED913A;
			margin-left: 10upx;
		}
	}
</style>
