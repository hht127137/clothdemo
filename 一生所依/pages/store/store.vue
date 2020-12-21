<template>
	<view class="content">
		<view class="list">
			<view class="list-t" @click="toForm" v-for="(item,index) in storeform" :key="index">
				<view>
					<image :src="item.img" mode="" class="img"></image>
				</view>
				<view class="sun">
					<p>{{item.name}}</p>
					<p>{{item.address}}</p>
				</view>
				<view class="icon-t icon-asd">
					立即申请
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '@/api/index.js'
	
	export default{
		data(){
			return{
				storeform:[]
			}
		},
		onLoad(){
			this.getData()
		},
		methods:{
			toForm(){
				uni.navigateTo({
					url:"../storeform/storeform"
				})
			},
			getData(){
				request('index/store/index','','post').then(res=>{
					console.log(res);
					this.storeform=res.data.result
				})
			}
		}
	}
</script>

<style>
	.list{
		background: #F8F8F8;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.list-t{
		width: 100%;
		height: 150upx;
		background: #FFFFFF;
		margin: 20upx 0;
		padding: 20upx;
		display: flex;
		position: relative;
	}
	.img{
		width: 180upx;
		height: 100%;
	}
	.sun{
		padding-left: 40upx;
		padding-top: 20upx;
	}
	.sun p:nth-of-type(1){
		margin-bottom: 20upx;
		font-size: 34upx;
		font-weight: 540;
	}
	.sun p:nth-of-type(2){
		font-size: 24upx;
		color: #BEBEBE;
	}
	.ico{
		font-size: 50upx;
		color: #DBDBDB;
	}
	.icon-t{
		position: absolute;
		right: 60upx;
		top: 50%;
		transform: translateY(-50%);
	}
	.icon-asd{
		width: 140upx;
		height: 60upx;
		background-color: #EA923B;
		text-align: center;
		line-height: 60upx;
		color: #FFFFFF;
		border-radius: 30upx;
		font-size: 20upx;
	}
</style>
