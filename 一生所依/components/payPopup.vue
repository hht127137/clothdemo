<template>
	<view>
		<view class="payPopup">
			<!-- 遮罩 -->
			<view class="bg" @click="closePopup"></view>
			<view class="payBox">
				<view class="payNum">
					<button v-for="(item,index) in num" :key="index" @click="inputNum(item,index)">{{item}}</button>
					<button class="zero" @click="inputZero">0</button>
					<button @click="inputSpot">.</button>
				</view>
				<view class="control">
					<button class="close iconfont" @click="del">&#xe62b;</button>
					<button class="pay">支付</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				num:[1,2,3,4,5,6,7,8,9],
				current:0
			}
		},
		methods:{
			closePopup(){
				this.$emit("close")
			},
			inputNum(num,index){
				this.current=index
				this.$emit('inputPrice',num)
			},
			inputZero(){
				this.$emit('inputPrice',0)
			},
			inputSpot(){
				this.$emit('inputPrice',".")
			},
			del(){
				this.$emit('inputDel')
			}
		}
	}
</script>

<style lang="scss">
	.payPopup{
	   width: 100%;
	}
	
	.bg{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
	
	.payBox{
		position: fixed;
		left: 0;
		width: 100%;
		background: #F1F1F1;
		height: 420rpx;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 18rpx 0 0;
		box-sizing: border-box;
		.payNum{
			flex: 9;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;
			button{
				width: 150rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				margin: 16rpx 0 0 0;
				font-weight: bold;
				border: none;
			}
			button:after{
				border: none;
			}
		}
	    .control{
			flex:3
		}
	}
	
	.control{
		// margin: 16rpx 0 0 0;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		button{
			width: 150rpx;
			margin-top: 16rpx;
			border-radius: 15rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		button:after{
			border: none;
		}
	}
	
	.zero{
		width: 320rpx !important;
	}
	
	.close{
		height: 80rpx;
	}
	
	.pay{
		height: 270rpx;
	}
</style>
