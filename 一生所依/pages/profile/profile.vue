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
					<p>{{text}}</p>
					<span class="iconfont ico">&#xe61d;</span>
				</view>
				<view class="user-b">
					<view class="titles">
						<p>VIP</p>
					</view>
					<view class="titles sucn">
						<view class="login-t" @click="toLogin" v-show="isBool">立即登录</view>
						<view class="grade"  v-show="loginBool"><span class="iconfont icos">&#xe630;</span>一星会员</view>
					</view>
				</view>
			</view>
			<!-- 设置分区 -->
			<view class="lists">
					<ul class="natres">
						<li>
							<span class="icon"></span>
							<span class="ccc">我的余额</span>
							<span class="iconfont jiantou">&#xe61d;</span>
						</li>
						<li @click="getteam">
							<span class="icon"></span>
							<span class="ccc">我的业绩</span>
							<span class="iconfont jiantou">&#xe61d;</span>
						</li>
						<li>
							<span class="icon"></span>
							<span class="ccc">余额充值</span>
							<span class="iconfont jiantou">&#xe61d;</span>
						</li>
						<li>
							<span class="icon"></span>
							<span class="ccc">昵称设置</span>
							<span class="iconfont jiantou">&#xe61d;</span>
						</li>
						<li>
							<span class="icon"></span>
							<span class="ccc">支付密码</span>
							<span class="iconfont jiantou">&#xe61d;</span>
						</li>
						<li>
							<span class="icon"></span>
							<span class="ccc">提现记录</span>
							<span class="iconfont jiantou">&#xe61d;</span>
						</li>
						<li>
							<span class="icon"></span>
							<span class="ccc">消费记录</span>
							<span class="iconfont jiantou">&#xe61d;</span>
						</li>
						<li>
							<span class="icon"></span>
							<span class="ccc">密码修改</span>
							<span class="iconfont jiantou">&#xe61d;</span>
						</li>
						<li @click="gitshare">
							<span class="icon"></span>
							<span class="ccc">分享邀请</span>
							<span class="iconfont jiantou">&#xe61d;</span>
						</li>
					</ul>
				<!-- 退出登录 -->
				<view class="logins" v-show="loginBool" @click="loginOut">退出登录</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				text:"请登录",
				loginBool:false,
				isBool:true
			}
		},
		components: {

		},
		onShow(){
			this.isLogin()
		},
		methods:{
			toLogin(){
				uni.navigateTo({
					url:"../public/login"
				})
			},
			getteam(){
				uni.navigateTo({
					url:"../secondary/team"
				})
			},
			gitshare(){
				uni.navigateTo({
					url:"../secondary/share"
				})
			},
			loginOut(){
				uni.clearStorageSync();
				this.loginBool=false
				this.text="请登录"
				this.isBool=true
			},
			isLogin(){
				if(uni.getStorageSync("token")){
					this.text=uni.getStorageSync("username")
					this.loginBool=true;
					this.isBool=false
				}
			}
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
	
	page{
		height: 100%;
	}
	
	.content{
		height: 100%;
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
		position: relative;
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
	.icon{
		display: inline-block;
		margin-right: 20upx;
		width: 60upx;
		height: 60upx;
		background: #7ED048 url(../../static/join-b.png) no-repeat 50%;
		background-size: 30upx 30upx;
		border-radius: 50%;
		position: absolute;
		top: 19upx;
		left: 10upx;
	}
	.ico-1{
		width: 60upx;
		height: 60upx;
		background: #FD543D url(../../static/titles-v.png) no-repeat 50%;
		background-size: 30upx 30upx;
		border-radius: 50%;
	}
	.ico-2{
		width: 60upx;
		height: 60upx;
		background: #5BC0FB url(../../static/money-cde.png) no-repeat 50%;
		background-size: 30upx 30upx;
		border-radius: 50%;
	}
	.ico-3{
		width: 60upx;
		height: 60upx;
		background: #7ED048 url(../../static/1加好友.png) no-repeat 50%;
		background-size: 30upx 30upx;
		border-radius: 50%;
	}
	.logins{
		width: 300upx;
		height: 80upx;
        border: 1px solid #2C334D;
		background: #2C334D;
		color: #FFFFFF;
		text-align: center;
		line-height: 80upx;
		margin: 22upx auto 84upx;
		border-radius: 26upx;
	}
	.login-t{
		width: 200upx;
		height: 60upx;
		background-color: #2C334D;
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
		left: 138upx;
		top: -12upx;
		
	}
	.icos{
		color: #FABA40;
		display: inline-block;
		margin: 0 10upx 0 10upx;
	}
	.lists{
		width: 100%;
		/* height: 100%; */
		padding: 180upx 40upx 20upx 40upx;
	}
	.natres{
		width: 100%;
		/* height: 600upx; */
		background-color: #FFFFFF;
		box-sizing: border-box;
		padding: 0 40upx 40upx 40upx;
	}
	.natres li{
		box-sizing: border-box;
		width: 100%;
		height: 100upx;
		border-bottom: 1px solid #DBDBDB;
		position: relative;
		padding-left: 100upx;
	}
	.ccc{
		line-height: 100upx;
		display: inline-block;
		font-size: 26upx;
	}
	.jiantou{
		display: inline-block;
		margin-left: 352upx;
		font-size: 26upx;
		color: #4CD964;
	}
</style>
