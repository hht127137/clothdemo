<template>
	<view>
		<view class="sun">
			<view class="money">
				<view class="ico iconfont">&#xe602;</view>
				<p>我的余额</p>
				<p class="jine">￥299.80</p>
			</view>
		</view>
		<view class="fun">
			<p class="fun-l">消费店铺</p>
			<p class="fun-l">消费时间</p>
			<p class="fun-l colors">消费金额</p>
		</view>
		<view class="funs">
			<p class="fun-t">万家丽广场店</p>
			<p class="fun-t">2020.12.18</p>
			<p class="fun-t colors">1800</p>
		</view>
		<view class="funs">
			<p class="fun-t">五一广场店</p>
			<p class="fun-t">2020.12.24</p>
			<p class="fun-t colors">2400</p>
		</view>
		<view class="funs">
			<p class="fun-t">万家丽广场店</p>
			<p class="fun-t">2020.12.18</p>
			<p class="fun-t colors">1800</p>
		</view>
		<view class="funs">
			<p class="fun-t">五一广场店</p>
			<p class="fun-t">2020.12.24</p>
			<p class="fun-t colors">2400</p>
		</view>
	</view>
</template>

<script>
</script>

<style>
	view{
		box-sizing: border-box;
	}
	.sun{
		width: 100%;
		height: 360upx;
		padding-top: 60upx;
	}
	.money{
		margin: 0 auto;
		width: 50%;
		height: 260upx;
		/* background-color: #08ACEE; */
		text-align: center;
	}
	.ico{
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		color: #FABA40;
		font-size: 100upx;
		margin: 0 auto;
	}
	.jine{
		color: #FABA40;
		font-size: 60upx;
		margin-top: 40upx;
		font-weight: bold;
	}
	.nav{
		width: 100%;
		height: 100%;
		padding: 40upx;
	}
	.fun{
		width: 100%;
		height: 80upx;
		/* border: 1px solid #C0C0C0; */
		margin-top: 40upx;
		border-radius: 20upx;
		box-shadow: 0upx 12upx 12upx 8upx #F1F1F1;
		display: flex;
		justify-content: space-evenly;
	}
	.fun-l{
		width: 30%;
		height: 100%;
		text-align: center;
		line-height: 70upx;
	}
	.funs{
		width: 100%;
		height: 80upx;
		border-radius: 20upx;
		margin-top: 20upx;
		box-shadow: 0upx 0upx 0upx 0upx #F1F1F1;
		display: flex;
		justify-content: space-evenly;
		border-bottom: 1px solid #DBDBDB;
	}
	.fun-t{
		width: 30%;
		height: 100%;
		text-align: center;
		line-height: 70upx;
		font-size: 24upx;
	}
	.colors{
		color: #FABA40;
	}
</style>
