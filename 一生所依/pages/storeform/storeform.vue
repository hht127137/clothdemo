<template>
	<view class="content">
		<view class="bg">
			<image src="" mode=""></image>
			<view class="form">
				<view class="forms">
					<p>开通会员服务，尊享各种福利</p>
					<image src="../../static/vip-cc.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="card">
			<p style="font-weight: bold;">个人信息:</p>
			<view>
				<text style="margin-right: 30upx;">姓名:</text>
				<input type="text">
			</view>
			<view>
				<text style="margin-right: 30upx;">电话:</text>
				<input type="text">
			</view>
		</view>
		<view class="VIP">
			<view>选择会员套餐</view>
			<view class="chooseVIP">
				<view @click="chooseVIP(index)" v-for="(item,index) in meal" :key="index" :class="current==index?'active':''">
					<text class="member">{{item.member}}</text>
					<text class="price">{{item.price}}</text>
				</view>
			</view>
		</view>

		<view class="subOrder">立即购买</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                meal:[
				{member:"年卡会员",price:"￥2999"},
				{member:"季卡会员",price:"￥799"},
				{member:"月卡会员",price:"￥299"},
				],
				current:0
			}
		},
		methods:{
			chooseVIP(index){
				this.current=index
			}
		}
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}

	.bg {
		width: 100%;
		position: relative;
		background-image: url(../../static/vip-cc.jpg);
		background-size: 100% 100%;
	}

	.bg image {
		width: 100%;
	}

	.form {
		width: 90%;
		height: 360rpx;
		background-color: #FFFFFF;
		opacity: 0.8;
		position: absolute;
		top: 6%;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 20rpx;
		// box-shadow: 0 3px 4px 4px #C8C7CC;
		display: flex;
		flex-direction: column;
		justify-content: center;
		p{
			color: #FABA40;
			font-size: 40upx;
			margin-top: 40upx;
			margin-left: 40upx;
		}
		image{
			width: 200upx;
			height: 200upx;
			position: absolute;
			bottom: 20upx;
			right: 20upx;
		}
	}

	.card {
		// border: 1px solid #54BA64;
		box-shadow: 0upx 8upx 20upx 2upx #54ba64;
		margin: 40upx;
		padding: 20upx;
		input {
			width: 450rpx;
			height: 70rpx;
			// background: #C0C0C0;
			border-radius: 15rpx;
			padding-left: 20rpx;
			font-size: 30rpx;
			color: #C0C0C0;
			border-bottom: 1px solid #C8C7CC;
		}

		view {
			display: flex;
			margin: 20rpx 0;
			justify-content: center;
			color: #000;
			align-items: center;line-height: 30rpx;
		}
	}

	.VIP {
		margin-left: 40upx;
		.chooseVIP{
			display: flex;
			justify-content: space-evenly;
			margin-top: 40upx;
			view{
				width: 200rpx;
				height: 200rpx;
				display: flex;
				flex-direction: column;
				background: #F0F2F7;
				align-items: center;
				justify-content: center;
				border-radius: 14rpx;
				line-height: 50rpx;
				.member{
					color: #333;
					font-family: 'Times New Roman', Times, serif;
				}
				.price{
					font-weight: bold;
					color: #54BA64;
					font-size: 32rpx;
				}
			}
		}
	}
	
	.VIP>view{
		font-weight: bold;
	}
	
	.subOrder{
		width: 90%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background: #54BA64;
		border-radius: 15rpx;
		margin: 20rpx auto;
		color: #fff;
		margin-top: 40upx;
	}
	
	.active{
		background: #FEF9F3;
		border: 2px solid #54BA64;
		box-sizing: border-box;
	}
	.forms{
		position: relative;
		width: 100%;
		height: 100%;
		opacity: 1;
	}
</style>
