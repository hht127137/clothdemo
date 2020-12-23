<template>
	<view class="nav">
		<view class="box">
			<p class="tit">*请绑定持卡人本人的银行卡</p>
			<view class="ipt">
				<text class="texts">开户行</text>
				<input v-model="query.name" type="text" value="" class="put" />
			</view>
			<view class="ipt">
				<text class="texts">持卡人</text>
				<input v-model="query.usernmae" type="text" value="" class="put" />
			</view>
			<view class="ipt">
				<text class="texts">卡号</text>
				<input v-model="query.bankcard" type="text" value="" class="put"/>
			</view>
			<view class="btn" @click="confirm">确定</view>
		</view>
	</view>
</template>

<script>
	import request from '@/api/index.js'
	import md5 from '@/js/md5.js'
	
	export default{
		data(){
			return{
				query:{
					usernmae:'',
					userid:'',
					loginKey:'',
					bankcard:'',
					name:''
				}
			}
		},
		methods:{
			confirm(){
				this.sort_ascii()
				this.query.userid=uni.getStorageSync('userid')
				request('index/store/addbank',this.query,'post').then(res=>{
					console.log(res);
				})
			},
			sort_ascii() {
				var token=uni.getStorageSync('token');
				var s1 = token.split('').sort().join('')
			    var s2=md5(s1).toUpperCase();
				console.log(s2)
				this.query.loginKey=s2
			}
		}
	}
</script>

<style>
	page{
		height: 100%;
	}
	.nav{
		width: 100%;
		height: 100%;
		background-color: #F3F1F1;
		padding: 40upx;
		box-sizing: border-box;
	}
	.box{
		box-sizing: border-box;
		width: 100%;
		height: 800upx;
		background-color: #FFFFFF;
		padding: 20upx;
	}
	.ipt{
		width: 100%;
		height: 60upx;
		display: flex;
		align-items: center;
		border: 1px solid #E7E4E4;
		padding-left: 20upx;
		box-sizing: border-box;
		margin-bottom: 20upx;
	}
	.tit{
		font-size: 28upx;
		margin-bottom: 40upx;
	}
	.put{
		display: inline-block;
		box-sizing: border-box;
		padding-left: 20upx;
		font-size: 28upx;
	}
	.btn{
		width: 100%;
		height: 80upx;
		background-color: #4CD964;
		color: #FFFFFF;
		text-align: center;
		line-height: 80upx;
		margin-top: 40upx;
	}
	.texts{
		font-size: 28upx;
	}
</style>
