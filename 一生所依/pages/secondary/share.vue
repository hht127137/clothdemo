<template>
	<view class="xb-share">
		<image src="../../static/xb-share/top_img.png" class="xb-share-img" mode="widthFix"></image>
		<view class="xb-share-content">
			<text class="xb-share-title">邀请码</text>
			<text class="xb-share-code">23423</text>
			<text class="xb-share-desc">你的好友注册时可填写邀请码</text>
			<uni-qrcode class="xb-share-margin-top" cid="qrcode1446" text="uQRCode" foregroundColor="#ECA26A" logo="../../static/logoss.png" makeOnLoad />
			<button class="xb-share-button xb-share-margin-top">立即分享</button>
		</view>
		<!-- <view class="xb-share-content xb-share-margin-top">
			<input type="text" class="xb-share-bottom-border" value="" placeholder="手机号" />
			<input type="text" class="xb-share-bottom-border" value="" placeholder="密码" />
			<input type="text" class="xb-share-bottom-border" value="" placeholder="邀请码" />
			<button class="xb-share-button xb-share-margin-top">立即注册</button>
		</view> -->
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
page {
	background-color: #d63e3d;
}
.xb-share-margin-top {
	margin-top: 40upx;
}
.xb-share-img {
	width: 750rpx;
}
.xb-share-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50rpx;
	margin: 10rpx 50rpx 50rpx 50rpx;
	background-color: #ffffff;
	border-radius: 15rpx;
}
.xb-share-title {
	font-size: 30rpx;
}
.xb-share-code {
	font-size: 40rpx;
	color: red;
}
.xb-share-desc {
	font-size: 24rpx;
	color: #808080;
}
.xb-share-button {
	width: 370rpx;
	background-color: #d63e3d;
	border-radius: 40rpx;
	color: #ffffff;
	font-size: 20rpx;
	padding-left: 40upx;
	padding-right: 40upx;
}
/* .xb-share-bottom-border {
	border-bottom: #c8c7cc solid 2upx;
	padding: 20upx 20upx 20upx 0upx;
} */
</style>
