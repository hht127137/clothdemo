<template>
	<view>
		<view class="nav">
			<view class="fun">
				<view class="httr">支付中心</view>
				<view class="zhifu">
					<view>
						<text>￥</text>
						<input @focus="showPay" type="text" v-model="price" value="" placeholder="点击输入金额" />
					</view>

					<button @click="pay">确定支付</button>
				</view>
			</view>
			<!-- 支付弹窗 -->
			<payDialog @inputDel="del" @inputPrice="getNum" @close="closePopup" v-if="isPayPopup"></payDialog>
		</view>
	</view>
</template>

<script>
	import payDialog from '@/components/payPopup.vue'

	export default {
		data() {
			return {
				isPayPopup: false, //支付弹窗
				price: ''
			}
		},
		methods: {
			//关闭支付弹窗
			closePopup() {
				this.isPayPopup = false
			},
			//显示支付弹窗
			showPay() {
				this.isPayPopup = true
			},
			pay() {

			},
			getNum(e) {
				console.log(e)
				if(this.price.length>0){
					if(e=='.'){
						if(this.price.indexOf(".")>-1) return;
					}
				}else{
					if(e=='.'){
						this.price +="0" + e
						return;
					}
				}
				this.price += e
			},
			del(){
				this.price=this.price.substring(0,this.price.length-1)
			}
		},
		components: {
			payDialog
		}
	}
</script>

<style lang="scss">
	.nav {
		width: 100%;
		height: 100%;
		background-color: #EA923B;
		box-sizing: border-box;
		padding: 50upx 50upx 320upx 50upx;
	}

	.fun {
		width: 100%;
		height: 920upx;
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
			font-size: 38rpx;
			margin: 60rpx 60rpx 30rpx;
		}

		button {
			width: 90%;
			color: #fff;
			background: #EA923B;
		}
	}

	.img {
		width: 100%;
		height: 100%;
	}
</style>
