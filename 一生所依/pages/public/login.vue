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
							<input type="number" placeholder="请输入手机号码" maxlength="11" v-model="mobile" />
						</view>
						<view class="phoneMsg">
							<input class="tit" placeholder="请输入验证码" maxlength="7" v-model="sms" />
							<button @click="sendCode">{{codeBtn.text}}</button>
						</view>
					</view>
				</view>
			</view>

			<button class="confirm-btn" @click="toLogin">登录</button>
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
	import qs from 'qs'

	export default {
		data() {
			return {
				mobile: '',
				password: '',
				sms:'',
				loginMode: ["密码登录", "短信登录"],
				current: 0,
				msg: "发送验证码",
				seconds: 10,
				codeBtn: {
					text: '获取验证码',
					waitingCode: false,
					count: this.seconds
				},
				//验证规则
				rules: {
					mobile: {
						rule: /\S/,
						msg: "账号不能为空"
					},
					password: {
						rule: /^[0-9a-zA-Z]{6,16}$/,
						msg: "密码应该为6-16位"
					},
					sms:{
						rule: /\d/,
						msg:"验证不能为空"
					}
				},
				userMsg:{}
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
				uni.redirectTo({
					url: "../register/register"
				})
			},
			changeLogin(index) {
				this.current = index;
			},
			//发送验证码
			sendCode() {
				this.codeBtn.waitingCode = true;
				this.codeBtn.count = this.seconds;
				this.codeBtn.text = this.codeBtn.count + 's';

				let countdown = setInterval(() => {
					this.codeBtn.count--;
					this.codeBtn.text = this.codeBtn.count + 's';
					if (this.codeBtn.count < 0) {
						clearInterval(countdown);
						this.codeBtn.text = '重新发送';
						this.codeBtn.waitingCode = false;
						this.logining = false
					}
				}, 1000);
				//请求验证码接口
				request("index/index/sendSMS", {
					mobile: this.mobile
				}, "post").then(res=>{
					console.log(res);
				})
			},
			async toLogin() {
				//密码登录
				if (this.current == 0) {
					if(!this.validate('mobile')) return;
					if(!this.validate("password")) return;
					request("index/index/login", {
						mobile: this.mobile,
						password: this.password
					}, "post").then(res=>{
						console.log(res);
							if (res.data.code != 0) {
								this.userMsg=res.data.result
								console.log(this.userMsg)
								this.$store.commit("getUserMsg",this.userMsg)
								uni.showToast({
									title: '登录成功',
									duration: 2000
								});
								uni.switchTab({
									url:"../profile/profile"
								})
							}
							
						}
					)
				} else {
					if(!this.validate('mobile')) return;
					if(!this.validate("sms")) return;
					//验证码登录
					console.log(this.query)
					request("index/index/smslogin",{mobile:this.mobile,sms:this.sms}, "post").then(res=>{
						console.log(res);
						this.userMsg=res.data.result
						console.log(this.userMsg)
						this.$store.commit("getUserMsg",this.userMsg)
						uni.showToast({
							title: '登录成功',
							duration: 2000
						});
						uni.switchTab({
							url:"../profile/profile"
						})
					})
				}
			},
			validate(key) {
				let bool = true;
				if (!this.rules[key].rule.test(this[key])) {
					//提示信息
					uni.showToast({
						title: this.rules[key].msg,
						icon:"none"
					})
					//取反
					bool = false;
					return false;
				}
				return bool;
			},
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
		height: 80vh;
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
			height: 64upx;
			background: #F8F6FC;
			margin-right: 16upx;
			padding-left: 24upx;
			font-size: 28upx;
			box-sizing: border-box;
		}

		button {
			margin: 0;
			height: 64upx;
			font-size: 26upx;
			background: #F8F6FC;
			overflow: inherit;
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
