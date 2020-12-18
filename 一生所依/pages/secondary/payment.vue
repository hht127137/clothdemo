<template>
	<view class="content">
		<view class="nav">
			<view class="fun">
				<view class="httr">支付中心</view>
				<view class="zhifu">
					<view>
						<text>￥</text>
						<input type="number" value="" v-model="price" placeholder="点击输入金额" />
					</view>

					<button @click="payBtn">确定支付</button>
				</view>
			</view>
			<!-- 支付弹窗 -->
			<jpPwd ref="jpPwds" :contents='pwd.msg' @completed="completed" @forget="forget"></jpPwd>
		</view>
	</view>
</template>

<script>
	import jpPwd from '@/components/jp-pwd/jp-pwd.vue';

	export default {
		data() {
			return {
				isPayPopup: false, //支付弹窗
				price: '',
                pwd:{
					msg:''
				}
			}
		},
		methods: {
			 payBtn() {
			           this.$refs.jpPwds.toOpen()
			        },
			     completed(e) {
			         if (e == '123456') {
			           this.$refs.jpPwds.toCancel()
			        } else {
			          this.pwd.msg = '密码错误'
			          this.$refs.jpPwds.backs()
			        }
			     },
			     forget() {
			          console.log('忘记密码')
			      }
		},
		components: {
			jpPwd 
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	
	.content{
		height: 100%;
	}
	
	.nav {
		width: 100%;
		height: 100%;
		background-color: #EA923B;
		box-sizing: border-box;
		padding: 50upx 50upx 320upx 50upx;
	}

	.fun {
		width: 100%;
		height: 480upx;
		background-color: #FFFFFF;
	}

	.httr {
		width: 100%;
		height: 110upx;
		background-color: #F5F5F5;
		box-sizing: border-box;
		padding-left: 40upx;
		line-height: 110upx;
		font-size: 38upx;
		font-weight: bold;
	}

	.zhifu {
		display: flex;
		flex-direction: column;
		align-items: center;

		view {
			width: 90%;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #C0C0C0;
			padding: 16rpx 0;
			font-size: 46rpx;
			margin: 60rpx 60rpx 30rpx;
		}

		button {
			width: 90%;
			color: #fff;
			background: #EA923B;
			margin-top: 30rpx;
		}
		
		input{
			font-size: 38rpx;
		}
	}

	.img {
		width: 100%;
		height: 100%;
	}
</style>
