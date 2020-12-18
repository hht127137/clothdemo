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
						<input type="text" value="" placeholder="请输入姓名"/>
					</view>
					<view class="ipt">
						<text>联系手机:</text>
						<input type="text" value="" placeholder="请输入电话号码"/>
					</view>
				</view>
			</view>
			<!-- 会员充值 -->
			<h3 style="padding-left: 30upx;">选择会员套餐</h3>
			<view class="run">
				<view class="run-s" style="margin-right: 20upx;">
					<p class="titel">
						<span class="icoo"></span>
						<text>年卡会员</text>
					</p>
					<p class="titels">￥2990</p>
				</view>
				<view class="run-s">
					<p class="titel">
						<span class="icoo icc"></span>
						<text>月卡会员</text>
					</p>
					<p class="titels">￥990</p>
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
				   <p class="tit-2">支付总额<span class="ttis">￥2990</span></p>
				   <p class="tit-3">支付方式</p>
				   <!-- 单选框 -->
				   <radio-group @change="radioChange">
						<label class="radio">
							<view class="zhifu" v-for="(item, index) in items" :key="item.value">
								<image :src="item.url" mode="" class="zfb"></image>
								<text>{{item.name}}</text>
								<radio :value="item.value" :checked="index === current" class="butn"/>
							</view>
						</label>
					</radio-group>
					<view class="btn">
						<view class="btns">立即支付</view>
					</view>
			    </view>
			</wyb-popup>
		</view>
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue';
	export default {
		data() {
			return {
				items:[
					{
						value:"wx",
						name:"微信支付",
						url:"../../static/wx.png"
					},
					{
						value:"zfb",
						name:"支付宝支付",
						url:"../../static/zfb.png"
					}
				],
				current:0
			}
		},
		 components: {
		        wybPopup
		    },
		methods:{
			getbtn(){
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
		}
	}
}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	view,ul,ol,input,p{
		box-sizing: border-box;
	};
	.content{
		width: 100%;
		height: 100%;
	}
	.head{
		width: 100%;
		height: 270upx;
		background-image: url(../../static/head-tops.png);
		background-size: 100% 100%;
		padding: 120upx 0upx 0upx 52upx;
		box-sizing: border-box;
		p{
			font-size: 36upx;
			color: #FFFFFF;
			font-family: "宋体";
		}
	}
	.information{
		width: 100%;
		height: 100%;
		padding: 40upx;
		box-sizing: border-box;
		.box{
			width: 100%;
			height: 350upx;
			box-shadow: 0upx 2upx 8upx 2upx #FCEEE1;
			padding: 40upx;
			text{
				color: #333333;
				font-size: 30upx;
			}
			.ipt{
				display: flex;
				align-items: center;
				margin-top: 30upx;
				input{
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
	.run{
		width: 100%;
		height: 100%;
		padding: 40upx;
		display: flex;
		.run-s{
			width: 50%;
			height: 240upx;
			border: 1px solid #E0E0E0;
			border-radius: 20upx;
			p{
				text-align: center;
				margin: 52upx 0;
			}
			.titel{
				color: #333333;
				font-size: 32upx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.titels{
				color: #EA923B;
				font-weight: bold;
				font-size: 40upx;
			}
		}
	}
	.icoo{
		display: inline-block;
		width: 60upx;
		height: 60upx;
		background-image: url(../../static/vip-nian.png);
		background-size: 60upx 60upx;
		margin-right: 20upx;
	}
	.icc{
		background-image: url(../../static/vip-yue.png);
		background-size: 60upx 60upx;
	}
	.btn{
		width: 100%;
		height: 100%;
		padding: 40upx;
		.btns{
			width: 100%;
			height: 80upx;
			text-align: center;
			line-height: 80upx;
			color: #FFFFFF;
			background-color: #EA923B;
		}
	}
	.her{
		text-align: center;
		margin: 20upx;
		width: 100%;
		height: 80upx;
		border-bottom: 1px solid #DDDDDD;
		font-weight: normal;
	}
	.tit-1{
		margin: 40upx;
		font-weight: bold;
		font-size: 34upx;
	}
	.tit-2{
		margin: 40upx;
		font-size: 34upx;
		.ttis{
			display: inline-block;
			margin-left: 40upx;
			font-size: 34upx;
			color: #EA923B;
		}
	}
	.tit-3{
		margin: 40upx;
		font-size: 34upx;
	}
	.zhifu{
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
</style>
