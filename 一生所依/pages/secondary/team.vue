<template>
	<view class="content">
		<view class="nav">
			<!-- 用户 -->
			<view class="nav_hd">
				<view class="userBox">
					<view class="user-t">
					<view class="portrait"></view>
					<p>hello***您好</p>
					  <view class="grade"><span class="iconfont ico">&#xe630;</span>一星会员</view>
					</view>
						<view class="draw" @click="toCash">
							提现佣金
						</view>
				</view>
				<view class="user-b">
					<view class="titles">
						<p>￥19980</p>
						<p>我的佣金</p>
					</view>
					<view class="titles">
						<p>2</p>
						<p>团队人数</p>
					</view>
					<view class="titles">
						<p>2</p>
						<p>直推人数</p>
					</view>
				</view>
			</view>
			<!-- 我的下级 -->
			<view class="mylevel">{{titles}}的下级</view>
			<!-- 列表 -->
			<view class="fun">
				<p class="fun-l">推荐人</p>
				<p class="fun-l">级别</p>
				<p class="fun-l colors">团队收益</p>
			</view>
			<view class="funs" v-for="(item,index) in myConnect" :key='index' @click="recomNext(item.name)" v-if="flag">
				<p class="fun-t">{{item.name}}</p>
				<p class="fun-t">{{item.level}}星会员</p>
				<p class="fun-t colors">{{item.teamPrice}}</p>
			</view>
			<view class="funs" v-for="(item,index) in recomdPeo" :key='index' v-else>
				<p class="fun-t">{{item.name}}</p>
				<p class="fun-t">{{item.level}}星会员</p>
				<p class="fun-t colors">{{item.teamPrice}}</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				myConnect:[{
					name:'晴天',
					level:'二',
					teamPrice:10000
				}],
				recomdPeo:[{
					name:'告白气球',
					level:'三',
					teamPrice:998
				}],
				flag:true,
				titles:'我'
			}
		},
		methods:{
			toCash(){
				uni.navigateTo({
					url:"./cash"
				})
			},
			recomNext(title){
				console.log(title)
				this.flag=false
				this.titles=title
			}
		}
	}
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
	.nav_hd{
		width: 100%;
		height: 350upx;
		background-image: url(../../static/ico-vip.png);
		background-size: 100% 100%;
		border-radius: 20upx;
	}
	.user-t{
		width: 100%;
		height: 50%;
		display: flex;
		padding: 20upx;
		position: relative;
	}
	.portrait{
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		/* border: 1px solid #FFFFFF; */
		background-image: url(../../static/head.jpg);
		background-size: 100%;
	}
	.user-t p{
		text-align: center;
		line-height: 100upx;
		padding-left: 40upx;
		font-size: 34upx;
		color: #FFFFFF;
	}
	.grade{
		width: 160upx;
		height: 40upx;
		border-radius: 20upx;
		background-color: #A57837;
		/* text-align: center; */
		line-height: 40upx;
		font-size: 24upx;
		color: #FFFFFF;
		position: absolute;
		left: 180upx;
		top: 110upx;
		
	}
	.ico{
		color: #FABA40;
		display: inline-block;
		margin: 0 10upx 0 10upx;
	}
	.user-b{
		width: 100%;
		height: 50%;
		display: flex;
		justify-content: space-evenly;
	}
	.titles{
		width: 30%;
		height: 100%;
		text-align: center;
	}
	.titles p:nth-of-type(1){
		margin: 30upx 0;
		color: #FABA40;
		font-size: 34upx;
	}
	.titles p:nth-of-type(2){
		color: #FFFFFF;
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
	.draw{
		width: 200upx;
		height: 60upx;
		background-color: #FABA40;
		margin: 0 auto;
		transform: translateY(-50%);
		text-align: center;
		line-height: 60upx;
		color: #FFFFFF;
		border-radius: 30upx;
		font-size: 28upx;
		margin: 30upx 30upx 0 0;
	}
	
	.userBox{
		display: flex;
		align-items: center;
	}
	
	.mylevel{
		width: 100%;
		text-align: center;
		margin-top: 28upx;
	}
</style>
