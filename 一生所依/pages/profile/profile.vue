<template>
	<view class="content">
		<view class="head">
			<!-- 背景 -->
			<view class="">
				<image src="../../static/ic0-bj.jpg" class="bejin"></image>
			</view>
			<!-- 用户 -->
			<view class="user">
				<view class="user-t">
					<view class="portrait"></view>
					<p>138****5640</p>
					<span class="iconfont ico">&#xe61d;</span>
				</view>
				<view class="user-b">
					<view class="titles">
						<p>VIP</p>
					</view>
					<view class="titles sucn">
						<view class="login-t">立即登录</view>
						<view class="str">
							等级：
							<span class="iconfont">&#xe630;</span>
							<span class="iconfont">&#xe630;</span>
							<span class="iconfont">&#xe630;</span>
							<span class="iconfont">&#xe630;</span>
							<span class="iconfont">&#xe630;</span>
							<span class="iconfont">&#xe630;</span>
						</view>
					</view>
				</view>
			</view>
			<!-- 我的团队 -->
			<view class="team">
				<view class="team-t">我的团队</view>
				<view class="team-b">
					<view class="team-1">
						<view class="icon"></view>
						<view class="tit">团队会员</view>
					</view>
					<view  class="team-1">
						<view class="icon ico-1"></view>
						<view class="tit">团队业绩</view>
					</view>
					<view  class="team-1">
						<view class="icon ico-2"></view>
						<view class="tit">我的业绩</view>
					</view>
					<view  class="team-1">
						<view class="icon ico-3"></view>
						<view class="tit">推广邀请</view>
					</view>
				</view>
			</view>
			<!-- 我的代理 -->
			<view class="teams">
				<view class="team-t">我的代理</view>
				<view class="team-b">
					<view class="team-1">
						<p class="iconfont ziti">&#xe704;</p>
						<view class="tit">区域门店</view>
					</view>
					<view  class="team-1">
						<p class="iconfont ziti">&#xe829;</p>
						<view class="tit">区域会员</view>
					</view>
					<view  class="team-1">
						<p class="iconfont ziti">&#xe69b;</p>
						<view class="tit">区域业绩</view>
					</view>
					<view  class="team-1">
						<p class="iconfont ziti">&#xe631;</p>
						<view class="tit">我的收入</view>
					</view>
				</view>
			</view>
			<!-- 退出登录 -->
			<view class="logins"></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		components: {

		}
	}
</script>

<style>
	view{
		box-sizing: border-box;
	}
	.bejin{
		width: 100%;
		height: 260upx;
	}
	.head{
		width: 100%;
		height: 100%;
		background: #F3F1F1;
		position: relative;
	}
	.user{
		width: 90%;
		height: 320upx;
		background: #FFFFFF;
		border-radius: 40upx;
		background-image: url(../../static/ico-vip.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: 100upx;
		left: 50%;
		transform: translateX(-50%);
		
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
	.ico{
		position: absolute;
		top: 50%;
		right: 40upx;
		transform: translateY(-50%);
		font-size: 30upx;
		color: #FFFFFF;
	}
	.user-b{
		width: 100%;
		height: 50%;
		display: flex;
	}
	.titles{
		/* text-align: center; */
		width: 50%;
		height: 100%;
		color: #FFFFFF;
		padding: 20upx;
		font-size: 28upx;
	}
	.titles p:nth-of-type(1){
		font-size: 80upx;
		color: ##c0c0c0;
		padding-left: 20upx;
	}
	.piple{
		color: #f40;
		font-size: 38upx;
		margin-right: 10upx;
	}
	.team{
		width: 90%;
		height: 280upx;
		background-color: #FFFFFF;
		margin-top: 186upx;
		margin-left: 40upx;
		border-radius: 20upx;
	}
	.team-t{
		width: 100%;
		height: 30%;
		border-bottom: 1px solid #E9E4E4;
		line-height: 90upx;
		padding-left: 20upx;
		font-size: 28upx;
	}
	.team-b{
		margin-top: 20upx;
		width: 100%;
		height: 60%;
		display: flex;
		
	}
	.team-1{
		width: 25%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		border-right: 1px solid #E9E4E4;
		padding: 10upx 0;
	}
	.icon{
		width: 70upx;
		height: 70upx;
		background: #FC9937 url(../../static/join-b.png) no-repeat 50%;
		background-size: 40upx 40upx;
		border-radius: 50%;
	}
	.ico-1{
		width: 70upx;
		height: 70upx;
		background: #FD543D url(../../static/titles-v.png) no-repeat 50%;
		background-size: 40upx 40upx;
		border-radius: 50%;
	}
	.ico-2{
		width: 70upx;
		height: 70upx;
		background: #5BC0FB url(../../static/money-cde.png) no-repeat 50%;
		background-size: 40upx 40upx;
		border-radius: 50%;
	}
	.ico-3{
		width: 70upx;
		height: 70upx;
		background: #7ED048 url(../../static/1加好友.png) no-repeat 50%;
		background-size: 40upx 40upx;
		border-radius: 50%;
	}
	.tit{
		color: #A8A8A8;
		font-size: 28upx;
	}
	.teams{
		width: 90%;
		height: 280upx;
		background-color: #FFFFFF;
		margin-top: 20upx;
		margin-left: 40upx;
		border-radius: 20upx;
	}
	.ziti{
		font-size: 60upx;
		color: #FB5F0D;
	}
	.logins{
		height: 80upx;

	}
	.login-t{
		width: 200upx;
		height: 60upx;
		background-color: #2C334D\
		;
		color: #FFFFFF;
		text-align: center;
		border-radius: 30upx;
		margin-top: 35upx;
		line-height: 60upx;
		border: 1px solid #FFFFFF;
		position: absolute;
		top: -68upx;
	}
	.sucn{
		position: relative;
	}
	.str{
		position: absolute;
		top: 68upx;
		left: -28upx;
	}
	.str span{
		margin-right: 10upx;
	}
</style>
