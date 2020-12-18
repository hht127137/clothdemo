<template>
	<view>
		<view class="lists">
				<ul class="natres">
					<li @click="getidcad">
						<span class="icon"></span>
						<span class="ccc">昵称设置</span>
						<span class="iconfont jiantou">&#xe61d;</span>
					</li>
					<li @click="getpass">
						<span class="icon"></span>
						<span class="ccc">密码设置</span>
						<span class="iconfont jiantou">&#xe61d;</span>
					</li>
					<li>
						<span class="icon"></span>
						<span class="ccc">支付密码</span>
						<span class="iconfont jiantou">&#xe61d;</span>
					</li>
					<li @click="getbank">
						<span class="icon"></span>
						<span class="ccc">银行卡</span>
						<span class="iconfont jiantou">&#xe61d;</span>
					</li>
				</ul>
		</view>
		<!-- 昵称修改 -->
		<wyb-popup ref="popup" type="center" height="400" width="500" radius="6" :showCloseIcon="true">
		    <view class="popup-content">
		      <view class="tex">昵称修改</view>
			  <input type="text" value="" placeholder="请输入旧昵称" class="old"/>
			  <input type="text" value="" placeholder="请输入新昵称" class="old"/>
			  <view class="but">
				  <button type="default" class="btn" style="background-color: #DBDBDB;" @click="getnone">取消</button>
				  <button type="default" class="btn" @click="getnone">确定</button>
			  </view>
		    </view>
		</wyb-popup>
		
		<!-- 密码修改 -->
		<wyb-popup ref="popups" type="center" height="400" width="500" radius="6" :showCloseIcon="true">
		    <view class="popup-content">
		      <view class="tex">密码修改</view>
			  <input type="text" value="" placeholder="请输入旧密码" class="old"/>
			  <input type="text" value="" placeholder="请输入新密码" class="old"/>
			  <view class="but">
				  <button type="default" class="btn" style="background-color: #DBDBDB;" @click="getnom">取消</button>
				  <button type="default" class="btn" @click="getnom">确定</button>
			  </view>
		    </view>
		</wyb-popup>
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	export default{
		data(){
			return{
				
			}
		},
		 components: {
		        wybPopup
		    },
		methods:{
			getidcad(){
				this.$refs.popup.show();
			},
			getnone(){
				this.$refs.popup.hide();
			},
			getpass(){
				this.$refs.popups.show();
			},
			getnom(){
				this.$refs.popups.hide();
			},
			getbank(){
				uni.navigateTo({
					url:"./bankcard"
				})
			}
		}
	}
</script>

<style>
	view{
		box-sizing: border-box;
	}
	.lists{
		width: 100%;
		padding: 0upx 40upx 20upx 40upx;
	}
	.natres{
		width: 100%;
		background-color: #FFFFFF;
		box-sizing: border-box;
	}
	.natres li{
		box-sizing: border-box;
		width: 100%;
		height: 100upx;
		border-bottom: 1px solid #DBDBDB;
		position: relative;
	}
	.ccc{
		line-height: 100upx;
		display: inline-block;
		font-size: 26upx;
		margin-left: 86upx;
	}
	.jiantou{
		display: inline-block;
		font-size: 26upx;
		color: #DBDBDB;
		position: absolute;
		top: 40upx;
		right: 12upx;
	}
	.icon{
		display: inline-block;
		margin-right: 20upx;
		width: 60upx;
		height: 60upx;
		background: #EA923B url(../../static/join-b.png) no-repeat 50%;
		background-size: 30upx 30upx;
		border-radius: 50%;
		position: absolute;
		top: 19upx;
		left: 10upx;
	}
	.tex{
		width: 100%;
		text-align: center;
		padding: 20upx 20upx 20upx 0upx;
		font-size: 32upx;
	}
	.popup-content{

	}
	.old{
		width: 80%;
		height: 60upx;
		border-radius: 20upx;
		border: 1px solid #C8C7CC;
		padding-left: 20upx;
		margin:0upx 0upx 40upx 10%;
		font-size: 24upx;
		box-sizing: border-box;
	}
	.but{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.btn{
		width: 36%;
		height: 70upx;
		display: inline-block;
		font-size: 28upx;
		border-radius: 30upx;
		background-color: #EA923B;
		text-align: center;
		line-height: 70upx;
		color: #FFFFFF;
	}
</style>
