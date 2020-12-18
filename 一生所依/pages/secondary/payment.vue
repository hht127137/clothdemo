<template>
	<view>
		<view class="nav">
			<view class="fun">
				<view class="httr">付款码</view>
				<view class="zhifu">
					<image class="img" src="../../static/zhifuma.png" mode=""></image>
				</view>
				<view class="tties">点击可查看付款码字数</view>
				<view class="zhifu-b">
					<image class="imgs" src="../../static/zhifu.png" mode=""></image>
				</view>
				<view class="lie"></view>
				<view class="yue">账号余额500元</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.nav{
		width: 100%;
		height: 100%;
		background-color: #EA923B;
		box-sizing: border-box;
		padding: 50upx 50upx 320upx 50upx;
	}
	.fun{
		width: 100%;
		height: 920upx;
		background-color: #FFFFFF;
	}
	.httr{
		width: 100%;
		height: 110upx;
		background-color: #F5F5F5;
		box-sizing: border-box;
		padding-left: 40upx;
		line-height: 110upx;
		font-size: 38upx;
		font-weight: bold;
	}
	.zhifu{
		box-sizing: border-box;
		width: 100%;
		height: 280upx;
		padding: 40upx 40upx 0upx 40upx;
	}
	.img{
		width: 100%;
		height: 100%;
	}
	.tties{
		width: 100%;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
		font-size: 36upx;
	}
	.zhifu-b{
		box-sizing: border-box;
		width: 100%;
		height: 340upx;
		padding: 0upx 165upx 80upx 165upx;
	}
	.imgs{
		width: 320upx;
		height: 320upx;
	}
	.lie{
		width: 100%;
		height: 4upx;
		border-top: 1px dashed #333333;
		border-bottom: 1px dashed #333333;
	}
	.yue{
		text-align: center;
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		font-size: 36upx;
	}
</style>
