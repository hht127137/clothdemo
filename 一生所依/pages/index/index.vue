<template>
	<view class="content">
		<view class="topCon">
			<search></search>
			<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" :dotsStyles="dotsStyles">
				<swiper class="swiper-box" @change="change">
					<swiper-item v-for="(item,index) in info" :key="index">
						<view class="swiper-item">
							<image :src="item.content"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
			<view class="notice">
				<view>公告</view>
				<view>|</view>
				<view class="uni-padding-wrap">
					<swiper class="limitp-hg" vertical="true" autoplay="true" circular="true" interval="3000">
						<swiper-item v-for="(item, index) in msg" :key="index">
							<navigator class="scrool-list-item">{{item.title}}</navigator>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="article">
				<view class="tabar">
					<view>
						<view class="icon"></view>
						<view>开通VIP</view>
					</view>
					<view>
						<view class="icon"></view>
						<view>推广分享</view>
					</view>
					<view>
						<view class="icon"></view>
						<view>金牌分享</view>
					</view>
					<view @click="getpayment">
						<view class="icon"></view>
						<view>购物支付</view>
					</view>
				</view>
				<view class="brandArea">
					<view class="title">
						<view>线下门店品牌专区</view>
						<view>更多</view>
					</view>
					<uni-grid :column="2" :showBorder="false">
						<uni-grid-item>
							<image @click="datails" src="https://img.alicdn.com/imgextra/i4/356060330/O1CN01VvAmxI1EJBKaLTLQB_!!0-item_pic.jpg_430x430q90.jpg"></image>
							<text class="text">文本</text>
						</uni-grid-item>
						<uni-grid-item>
							<image @click="datails" src="https://img.alicdn.com/imgextra/i4/356060330/O1CN01VvAmxI1EJBKaLTLQB_!!0-item_pic.jpg_430x430q90.jpg"></image>
							<text class="text">文本</text>
						</uni-grid-item>
						<uni-grid-item>
							<image @click="datails" src="https://img.alicdn.com/imgextra/i4/356060330/O1CN01VvAmxI1EJBKaLTLQB_!!0-item_pic.jpg_430x430q90.jpg"></image>
							<text class="text">文本</text>
						</uni-grid-item>
						<uni-grid-item>
							<image @click="datails" src="https://img.alicdn.com/imgextra/i4/356060330/O1CN01VvAmxI1EJBKaLTLQB_!!0-item_pic.jpg_430x430q90.jpg"></image>
							<text class="text">文本</text>
						</uni-grid-item>
						<uni-grid-item>
							<image @click="datails" src="https://img.alicdn.com/imgextra/i4/356060330/O1CN01VvAmxI1EJBKaLTLQB_!!0-item_pic.jpg_430x430q90.jpg"></image>
							<text class="text">文本</text>
						</uni-grid-item>
					</uni-grid>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import search from "@/components/jm-search/jm-search.vue"
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
    import request from '@/api/index.js'

	export default {
		data() {
			return {
				info: [{
					content: 'https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg'
				}, {
					content: 'https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg'
				}, {
					content: 'https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg'
				}],
				current: 0,
				mode: 'default',
				dotsStyles: {
					width: 8,
					backgroundColor: "#fff",
					selectedBackgroundColor: "#E0AD89"
				},
				msg: [],
				cur: 0
			}
		},
		components: {
			search,
			uniSwiperDot,
			uniGrid,
			uniGridItem
		},
		created() {
   
		},
		onLoad() {
			this.animation = uni.createAnimation()
			this.getList()
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			getList(){
				request("index/index/index","","post").then(res=>{
					console.log(res);
				    this.info[0].content=res.data.result[1].img1;	
					this.info[1].content=res.data.result[1].img2;
					this.info[2].content=res.data.result[1].img3;
					console.log(this.bannerImg);
				})
				//公告
				request("index/index/male","","post").then(res=>{
				    console.log(res);
					this.msg=res.data.result;
				})
			},
			datails(){
				uni.navigateTo({
					url:"../secondary/datails"
				})
			},
			getpayment(){
				uni.navigateTo({
					url:"../secondary/payment"
				})
			}
		}
	}
</script>

<style lang="scss">
	.topCon {
		width: 100%;
		position: relative;
	}

	image {
		width: 100%;
	}

	.article {
		position: relative;
	}

	.tabar {
		width: 90%;
		height: 160upx;
		display: flex;
		justify-content: space-around;
		background: #fff;
		position: absolute;
		top: -88upx;
		left: 50%;
		transform: translateX(-50%);
		padding: 16upx;
		font-size: 26upx;
		border-radius: 20upx;
		box-shadow: 0 4px 5px 1px #ccc;
	}

	.tabar image {
		width: 50upx;
		height: 50upx;
	}

	.tabar view {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.brandArea {
		width: 94%;
		padding-top: 140upx;
		margin: 0 auto;
	}

	.uni-grid-item:nth-child(odd) {
		padding-right: 10upx;
		box-sizing: border-box;
	}

	.uni-grid-item:nth-child(even) {
		padding-left: 10upx;
		box-sizing: border-box;
	}

	.uni-grid-item text {
		padding: 16upx 0;
	}

	.brandArea image {
		border-radius: 25upx;
	}

	.brandArea .title {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20upx;
	}

	.notice {
		display: flex;
		background: #000000;
		height: 150upx;
		color: #7D7D7D;
		font-size: 28upx;
		padding: 24upx 0 0 24upx;
	}

	.notice>view:nth-child(1) {
		color: #B99053;
		font-weight: 800;
	}

	.notice>view:nth-child(2) {
		font-weight: 800;
		margin: 0 5px;
		color: #181818;
	}

	.icon {
		width: 66upx;
		height: 66upx;
		background: #FCECD6 url(../../static/an-crowns.png) no-repeat 50%;
		background-size: 44upx 44upx;
		border-radius: 50%;
		margin: 14upx 0;
	}

	.img-iocn {
		width: 50rpx;
		height: 50rpx;
	}

	.scrool-list-item {
		color: #7D7D7D;
	}

	.uni-swiper-msg-myflex {
		display: flex;
	}

	.left-Iocn {
		width: 40rpx;
		height: 60rpx;
		line-height: 60rpx;
	}

	.limitp-hg {
		width: calc(100% - 50rpx);
		height: 40rpx;
		line-height: 40rpx;
	}

	.scrool-list-item {
		font-size: 30rpx;
	}
	
	.uni-padding-wrap{
		width: 260upx;
	}
</style>
