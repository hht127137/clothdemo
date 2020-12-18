<template>
	<view>
		<view class="fun">
			<p class="fun-l">提现用户</p>
			<p class="fun-l">提现时间</p>
			<p class="fun-l colors">提现金额</p>
		</view>
		<view class="funs">
			<p class="fun-t">xxxx</p>
			<p class="fun-t">2020.12.18</p>
			<p class="fun-t colors">1800</p>
		</view>
		<view class="funs">
			<p class="fun-t">xxxx</p>
			<p class="fun-t">2020.12.24</p>
			<p class="fun-t colors">2400</p>
		</view>
		<view class="funs">
			<p class="fun-t">xxxx</p>
			<p class="fun-t">2020.12.18</p>
			<p class="fun-t colors">1800</p>
		</view>
		<view class="funs">
			<p class="fun-t">xxxxx</p>
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
