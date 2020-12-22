<template>
	<!-- 网页版注册 -->
	<view class="bigbox">
		<view class="status_bar">
		    <!-- 这里是状态栏 -->
		</view>
		<view class="nav">
			<view class="box">
				<view class="logo"></view>
				<view class="uni-form-item">
					<input type="tel" class="uni-input" name="" placeholder="请输入手机号" />
				</view>
				<view class="uni-form-item">
					<input type="tel" class="uni-input" name="" placeholder="请输入验证码" />
				</view>
				<view class="uni-form-item">
					<input type="tel" class="uni-input" name="" placeholder="请输入邀请码" />
				</view>
				<view class="uni-form-item">
					<input type="tel" class="uni-input" name="" placeholder="请设置支付密码" />
				</view>
				<view class="uni-form-item">
					<input type="tel" class="uni-input" name="" placeholder="请输入密码" />
				</view>
				<button type="primary" class="btn">注册</button>
				<view class="links">已有账号？<text class="link-highlight">点此登陆</text></view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	 .status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
	  }
	  page{
		  height: 100%;
	  }
	  .bigbox{
		  height: 100%;
	  }
	  .nav{
		  width: 100%;
		  height: 100%;
		  background-image: url(../../static/nav-bg.png);
		  background-size: 100% 100%;
		  padding: 100upx 75upx 0upx 75upx;
		  box-sizing: border-box;
	  }
	  .box{
		  width: 100%;
		  height: 1100upx;
		  background-color: #FFFFFF;
		  overflow: hidden;
		  padding: 74upx;
		  box-sizing: border-box;
		  border-radius: 20upx;
	  }
	  .logo{
		  width: 130upx;
		  height: 130upx;
		  border-radius: 50%;
		  margin: 0 auto;
		  background: #F6F6F6 url(../../static/vip-nian.png) no-repeat 50%;
		  background-size: 80upx 80upx;
		  margin-bottom: 40upx;
	  }
	  .uni-form-item{
		width: 100%;
		height: 70upx;
	  	margin-bottom: 30upx;
		border-radius: 15upx;
		border: 1px solid #D8D8D8;
	  }
	  .uni-input{
	  	font-size: 26upx;
		width: 100%;
	  	height: 70upx;
		padding-left: 20upx;
		box-sizing: border-box;
	  }
	  .links{
	  	text-align: center;
	  	margin-top: 40upx;
	  	font-size: 26upx;
	  	color: #999;
		font-size: 20upx;
	  }
	  .link-highlight{
	  	color: #EA923B;
		font-size: 20upx;
	  }
	  .btn{
		  background-color: #EA923B;
		  height: 80upx;
		  text-align: center;
		  line-height: 80upx;
		  margin-top: 60upx;
		  font-size: 32upx;
	  }
</style>
