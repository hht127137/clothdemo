<template>
	<view>
		<!-- 头部 -->
		<view class="content">
			<view class="head">
				<p>开通会员服务，尊享各种福利待遇</p>
			</view>
			<!-- 个人信息栏 -->
			<view class="information">
				<view class="box">
					<h4>个人信息:</h4>
					<view class="ipt">
						<text>真实姓名:</text>
						<input type="text" v-model="this.query.realname" value="" placeholder="请输入姓名" />
					</view>
					<view class="ipt">
						<text>联系手机:</text>
						<input type="text" v-model="this.query.mobile" value="" placeholder="请输入电话号码" />
					</view>
				</view>
			</view>
			<!-- 会员充值 -->
			<h3 style="padding-left: 30upx;">选择会员套餐</h3>
			<view class="run">
				<view style="margin-right: 20upx;" :class="current==index?'run-s active':'run-s'" v-for="(item,index) in vipGroup"
				 :key='index' @click="chooseItem(item.id,item.price,index)">
					<p class="titel">
						<span :class="current==index?'icoo':'icoo icc'"></span>
						<text>{{item.name}}</text>
					</p>
					<p class="titels">￥{{item.price}}</p>
				</view>
			</view>
			<!-- 按钮 -->
			<view class="btn">
				<view class="btns" @click="getbtn">立即购买</view>
			</view>
			<!-- 弹出框 -->
			<wyb-popup ref="popup" type="bottom" height="700" width="500" radius="6" :showCloseIcon="true">
				<view class="popup-content">
					<h2 class="her">支付</h2>
					<p class="tit-1">门店会员套餐</p>
					<p class="tit-2">支付总额<span class="ttis">￥{{this.query.money}}</span></p>
					<p class="tit-3">支付方式</p>
					<!-- 单选框 -->
					<radio-group @change="radioChange">
						<label class="radio">
							<view class="zhifu" v-for="(item, index) in items" :key="item.value">
								<image :src="item.url" mode="" class="zfb"></image>
								<text>{{item.name}}</text>
								<radio :value="item.value" :checked="index === current" class="butn" />
							</view>
						</label>
					</radio-group>
					<view class="btn" @click="pay">
						<view class="btns">立即支付</view>
					</view>
				</view>
			</wyb-popup>
		</view>
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue';
	import request from "@/api/index.js"
    import md5 from '@/js/md5.js'

	export default {
		data() {
			return {
				items: [{
					value: "zfb",
					name: "支付宝支付",
					url: "../../static/zfb.png"
				}],
				current: 0,
				vipGroup: [],
				query: {
					mobile: '15576120327',
					realname: '黄海涛',
					money: '990.00',
					storeid: 3,
					loginKey: "",
					userid: 4,
					levelid: 1
				},
				order: []
			}
		},
		components: {
			wybPopup
		},
		onLoad() {
			this.chooseItem()
			this.sort_ascii();
			uni.getProvider({
				service: 'payment',
				success: function(res) {
					console.log(res.provider)
				}
			});
		},
		methods: {
			sort_ascii() {
				var token=uni.getStorageSync('token');
				var s1 = token.split('').sort().join('')
			    var s2=md5(s1).toUpperCase();
				this.query.loginKey=s2
			},
			getbtn() {
				this.$refs.popup.show();
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
			chooseItem(id ,price, index) {
				this.current = index
				request('index/store/memlevel', '', 'post').then(res => {
					this.vipGroup = res.data.result;
					console.log(this.vipGroup)
				})
				this.query.money=price
				this.query.levelid = id
				console.log(this.query.levelid)
			},
			pay() {
				this.getOrderInfo();
			},
			getOrderInfo() {
				request('index/store/pay', this.query, 'post').then(res => {
					console.log(res);
					uni.requestPayment({
						provider: 'alipay',
						orderInfo: res.data.result.alipaydata, //支付宝订单数据
						success: function(res) {
							console.log('success:' + JSON.stringify(res));
						},
						fail: function(err) {
							console.log('fail:' + JSON.stringify(err));
						}
					});
				})
			}				
			
		}
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}

	view,
	ul,
	ol,
	input,
	p {
		box-sizing: border-box;
	}

	;

	.active {
		border: 1rpx solid #EA923B !important;
	}

	.content {
		width: 100%;
		height: 100%;
	}

	.head {
		width: 100%;
		height: 270upx;
		background-image: url(../../static/head-tops.png);
		background-size: 100% 100%;
		padding: 120upx 0upx 0upx 52upx;
		box-sizing: border-box;

		p {
			font-size: 36upx;
			color: #FFFFFF;
			font-family: "宋体";
		}
	}

	.information {
		width: 100%;
		height: 100%;
		padding: 40upx;
		box-sizing: border-box;

		.box {
			width: 100%;
			height: 350upx;
			box-shadow: 0upx 2upx 8upx 2upx #FCEEE1;
			padding: 40upx;

			text {
				color: #333333;
				font-size: 30upx;
			}

			.ipt {
				display: flex;
				align-items: center;
				margin-top: 30upx;

				input {
					width: 420upx;
					height: 80upx;
					border-radius: 40upx;
					background-color: #FAF9F9;
					display: inline-block;
					margin-left: 20upx;
					padding-left: 40upx;
					line-height: 80upx;
					color: #333333;
				}
			}
		}
	}

	.run {
		width: 100%;
		height: 100%;
		padding: 40upx;
		display: flex;

		.run-s {
			width: 50%;
			height: 240upx;
			border: 1px solid #E0E0E0;
			border-radius: 20upx;

			p {
				text-align: center;
				margin: 42upx 0;
			}

			.titel {
				color: #333333;
				font-size: 32upx;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.titels {
				color: #EA923B;
				font-weight: bold;
				font-size: 40upx;
			}
		}
	}

	.icoo {
		display: inline-block;
		width: 60upx;
		height: 60upx;
		background-image: url(../../static/vip-nian.png);
		background-size: 60upx 60upx;
		margin-right: 20upx;
	}

	.icc {
		background-image: url(../../static/vip-yue.png);
		background-size: 60upx 60upx;
	}

	.btn {
		width: 100%;
		height: 100%;
		padding: 40upx;

		.btns {
			width: 100%;
			height: 80upx;
			text-align: center;
			line-height: 80upx;
			color: #FFFFFF;
			background-color: #EA923B;
		}
	}

	.her {
		text-align: center;
		margin: 20upx;
		width: 100%;
		height: 80upx;
		border-bottom: 1px solid #DDDDDD;
		font-weight: normal;
	}

	.tit-1 {
		margin: 40upx;
		font-weight: bold;
		font-size: 34upx;
	}

	.tit-2 {
		margin: 40upx;
		font-size: 34upx;

		.ttis {
			display: inline-block;
			margin-left: 40upx;
			font-size: 34upx;
			color: #EA923B;
		}
	}

	.tit-3 {
		margin: 40upx;
		font-size: 34upx;
	}

	.zhifu {
		width: 100%;
		height: 60upx;
		display: flex;
		align-items: center;
		padding-left: 40upx;
		position: relative;
		margin-bottom: 20upx;

		.zfb {
			display: inline-block;
			width: 50upx;
			height: 50upx;
			margin-right: 20upx;
		}
	}

	.butn {
		position: absolute;
		top: 10upx;
		right: 40upx;
	}
</style>
