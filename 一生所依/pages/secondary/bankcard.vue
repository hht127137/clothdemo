<template>
	<view class="nav">
		<view class="card">
			<view class="user-t">
				<view class="portrait"></view>
				<p>工商银行</p>
			</view>
			<view class="user-b">
				<span style="display: inline-block; font-size: 100upx; margin-right: 30upx;">.... .... ....</span>
				<span style="display: inline-block;">4294</span>
			</view>
		</view>
		<view class="card" style="background-color: #13227a">
			<view class="user-t">
				<view class="portraits"></view>
				<p>建设银行</p>
			</view>
			<view class="user-b">
				<span style="display: inline-block; font-size: 100upx; margin-right: 30upx;">.... .... ....</span>
				<span style="display: inline-block;">4294</span>
			</view>
		</view>
		<view class="jia" @click="getcard">+ 添加银行卡</view>
	</view>
</template>

<script>
	import request from '@/api/index.js'
	 import md5 from '@/js/md5.js'
	
	export default{
		data(){
			return{
				query:{
					userid:'4',
					loginKey:''
				}
			}
		},
		onLoad(){
			this.getData()
		},
		methods:{
			getcard(){
				uni.navigateTo({
					url:"./newcard"
				})
			},
			sort_ascii() {
				var token=uni.getStorageSync('token');
				var s1 = token.split('').sort().join('')
			    var s2=md5(s1).toUpperCase();
				console.log(s2)
				this.query.loginKey=s2
			},
			getData(){
				this.sort_ascii();
				request('index/store/bankcards',this.query,'post').then(res=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style>
	.nav{
		width: 100%;
		height: 100%;
		padding: 40upx;
		box-sizing: border-box;
	}
	.card{
		width: 100%;
		height: 280upx;
		background-color: #d81e06;
		margin-bottom: 20upx;
	}
	.user-t{
		width: 100%;
		height: 140upx;
		display: flex;
		padding: 20upx;
		position: relative;
		box-sizing: border-box;
	}
	.portrait{
			width: 80upx;
			height: 80upx;
			background: #FFFFFF url(../../static/gongshang.png) no-repeat 50%;
			background-size: 60upx 60upx;
			border-radius: 50%;
	}
	.portraits{
			width: 80upx;
			height: 80upx;
			background: #FFFFFF url(../../static/jianshe.png) no-repeat 50%;
			background-size: 60upx 60upx;
			border-radius: 50%;
	}
	.user-t p{
		text-align: center;
		line-height: 80upx;
		padding-left: 40upx;
		font-size: 34upx;
		color: #FFFFFF;
	}
	.user-b{
		width: 100%;
		height: 140upx;
		box-sizing: border-box;
		text-align: center;
		line-height: 54upx;
		color: #FFFFFF;
		font-size: 50upx;
	}
	.jia{
		width: 100%;
		height: 100upx;
		background-color: #0077AA;
		line-height: 100upx;
		color: #FFFFFF;
		box-sizing: border-box;
		font-size: 32upx;
		padding-left: 40upx;
		margin-top: 40upx;
	}
</style>
