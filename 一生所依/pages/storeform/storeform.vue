<template>
	<view class="content">
		<view class="bg">
			<image src="//gw.alicdn.com/simba/img/TB1tyWrSFXXXXaGXVXXSutbFXXX.jpg_790x10000Q75.jpg_.webp" mode=""></image>
			<view class="form">

			</view>
		</view>
		<view class="card">
			<view>
				<text>姓名:</text>
				<input type="text">
			</view>
			<view>
				<text>电话:</text>
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
	}

	.bg image {
		width: 100%;
	}

	.form {
		width: 90%;
		height: 360rpx;
		background: #f60;
		position: absolute;
		top: 6%;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 20rpx;
		box-shadow: 0 3px 4px 4px #C8C7CC;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.card {
		input {
			width: 450rpx;
			height: 70rpx;
			background: #C0C0C0;
			border-radius: 15rpx;
			padding-left: 20rpx;
			font-size: 30rpx;
			color: #000;
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
		.chooseVIP{
			display: flex;
			justify-content: space-evenly;
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
	}
	
	.active{
		background: #FEF9F3;
		border: 2px solid #54BA64;
		box-sizing: border-box;
	}
</style>
