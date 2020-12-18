<template>
	<view>
		<view class="nav">
			<view class="fun">
				<view class="ipt">
					<text>原昵称:</text>
					<input type="text" value="" class="put"/>
				</view>
				<view class="ipt">
					<text>新昵称:</text>
					<input type="text" value="" class="put"/>
				</view>
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
		/* background-color: #DBDBDB; */
		box-sizing: border-box;
		padding: 50upx 50upx 320upx 50upx;
	}
	.fun{
		width: 100%;
		height: 920upx;
		background-color: #FFFFFF;
		border: 1px solid #C0C0C0
		;
	}
	.ipt{
		width: 100%;
		height: 120upx;
		display: flex;
		align-items: center;
		justify-items: center;
		padding-left: 20upx;
	}
	.put{
		width: 60%;
		height: 60upx;
		border: 1px solid #C0C0C0;
		border-radius: 20upx;
		padding-left: 20upx;
		margin-left: 20upx;
	}
</style>
