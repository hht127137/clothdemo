<template>
	<view class="content">
		<view class="nav">
			<view class="fun">
				<view class="httr">提现中心</view>
				<view class="zhifu">
					<view>
						<text>￥</text>
						<input type="number" value="" v-model="query.money" placeholder="点击输入金额" />
					</view>
					<button @click="paycard">选择银行卡</button>
					<button @click="payBtn">确定提现</button>
				</view>
			</view>
			<!-- 支付弹窗 -->
			<jpPwd ref="jpPwds" :contents='pwd.msg' @completed="completed" @forget="forget"></jpPwd>
			<!-- 选择银行卡 -->
			<wyb-popup ref="popup" type="bottom" height="500" width="500" radius="6" :showCloseIcon="true">
				<view class="popup-content">
					<view class="cashcard">选择提现银行:</view>
					<radio-group @change="radioChange">
						<label class="radio">
							<view class="funs" v-for="(item, index) in items" :key="item.value">
								<image :src="item.url" mode="" class="zfb"></image>
								<text class="nam">{{item.name}}{{item.number}}</text>
								<radio :value="item.value" :checked="index === current" class="butn" />
							</view>
							<view class="join" @click="getnewcard">+添加新的银行卡</view>
						</label>
					</radio-group>
				</view>
			</wyb-popup>
		</view>
	</view>
</template>

<script>
	import jpPwd from '@/components/jp-pwd/jp-pwd.vue';
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue';
	import request from '@/api/index.js'
	import md5 from '@/js/md5.js'
	
	export default {
		data() {
			return {
				isPayPopup: false, //支付弹窗
				price: '',
				pwd: {
					msg: ''
				},
				items:[
					{
						value:"wx",
						name:"工商银行",
						number:"(8537)",
						url:"../../static/gongshang.png"
					},
					{
						value:"zfb",
						name:"建设银行",
						number:"(9274)",
						url:"../../static/jianshe.png"
					}
				],
				query:{
					userid:4,
					bankcard:'55189115615615611',
					name:'长沙银行',//银行名称
					loginKey:'',
					money:''//提现金额(测试最低提现10)
				},
				current:0
			}
		},
		methods: {
			sort_ascii() {
				var token=uni.getStorageSync('token');
				var s1 = token.split('').sort().join('')
			    var s2=md5(s1).toUpperCase();
				console.log(s2)
				this.query.loginKey=s2
			},
			payBtn() {
				this.$refs.jpPwds.toOpen()
				this.sort_ascii()
				console.log(this.query);
				request('index/store/tx',this.query,'post').then(res=>{
					console.log(res);
				})
			},
			paycard() {
				this.$refs.popup.show()
			},
			completed(e) {
				if (e == '123456') {
					this.$refs.jpPwds.toCancel()
				} else {
					this.pwd.msg = '密码错误'
					this.$refs.jpPwds.backs()
				}
			},
			forget() {
				console.log('忘记密码')
			},
			radioChange: function(evt) {
					console.log(evt)
				    for (let i = 0; i < this.items.length; i++) {
						if (this.items[i].value === evt.target.value) {
							this.current = i;
				            break;
				    }
				}
			},
			getnewcard(){
				uni.navigateTo({
					url:"./newcard"
				})
			}
		},
		components: {
			jpPwd,
			wybPopup
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
	.popup-content{
		padding: 40upx;
	}
	.content {
		height: 100%;
	}

	.nav {
		width: 100%;
		height: 100%;
		background-color: #EA923B;
		box-sizing: border-box;
		padding: 50upx 50upx 320upx 50upx;
	}

	.fun {
		width: 100%;
		height: 540upx;
		background-color: #FFFFFF;
	}

	.httr {
		width: 100%;
		height: 110upx;
		background-color: #F5F5F5;
		box-sizing: border-box;
		padding-left: 40upx;
		line-height: 110upx;
		font-size: 38upx;
		font-weight: bold;
	}

	.zhifu {
		display: flex;
		flex-direction: column;
		align-items: center;

		view {
			width: 90%;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #C0C0C0;
			padding: 16rpx 0;
			font-size: 46rpx;
			margin: 60rpx 60rpx 30rpx;
		}

		button {
			width: 90%;
			color: #fff;
			background: #EA923B;
			margin-top: 30rpx;
			font-size: 34upx;
		}

		input {
			font-size: 38rpx;
		}
	}

	.img {
		width: 100%;
		height: 100%;
	}
	.funs{
		width: 100%;
		height: 60upx;
		display: flex;
		align-items: center;
		padding-left: 40upx;
		position: relative;
		margin-bottom: 20upx;
		.zfb{
			display: inline-block;
			width: 50upx;
			height: 50upx;
			margin-right: 20upx;
		}
	}
	.butn{
		position: absolute;
		top: 10upx;
		right: 40upx;
	}
	.cashcard{
		margin-bottom: 40upx;
		font-size: 32upx;
	}
	.join{
		width: 100%;
		height: 40upx;
		text-align: center;
		padding: 40upx;
		box-sizing: border-box;
		font-size: 32upx;
	}
	.nam{
		font-size: 32upx;
	}
</style>
