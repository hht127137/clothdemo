<template>
	<view>
		<!-- 搜索条 -->
		<view class="searchTopBox">
			<view class="searchBoxRadius">
				<view class="grace-search-icon searchBoxIcon"></view>
				<input class="searchBoxIpt" type="search" v-model="ipt" @confirm="searchNow($event)" placeholder="请输入门店名称搜索" placeholder-class="cl"></input>
			</view>
		</view>
		<!-- 搜索历史 -->
		<!-- <view class="searchBotBox">
			<view class="ov">
				<view class="fl"></view>
				<view @tap="clearKey" class="fr grace-more-r grace-search-remove"></view>
			</view>
			<view class="searchHistoryBox">
				<view class="searchHistoryBoxItem" v-for="(item,index) in searchKey" :key='index'>
					{{item}}
				</view>
			</view>
		</view> -->
	</view>
</template>
<script>
	export default {
		data() {
			return {
				searchKey: [],
				ipt: '',
				searchClose: true,

			}
		},
		onShow() {
			var vv = uni.getStorageSync('searchLocal');
			var arr = vv.split("-");
			this.searchKey = arr;
		},
		methods: {

			clearKey: function() {
				var that = this;
				uni.showModal({
					title: '提示',
					content: '点击确定将删除所有历史信息，确定删除吗？',
					success: function(res) {
						if (res.confirm) {
							that.searchKey = [];
							uni.setStorage({
								key: 'searchLocal',
								data: that.searchKey
							});
							
						} else if (res.cancel) {

						}
					}
				});

			},
			searchNow: function(e) {
				if (this.ipt == '') {
					uni.showToast({
						title: '未输入搜索关键字',
						icon: 'none',
						duration: 1000
					});
					return false;
				}
				var that = this;
				var newArr = that.searchKey;
				newArr.push(this.ipt);
				this.searchKey = newArr;
				var newStr = newArr.join('-');
				uni.setStorage({
					key: 'searchLocal',
					data: newStr
				});
			}
		}
	}
</script>
<style>
	page {
		background: #FFF;
	}

	.ov {
		overflow: hidden;
	}

	.fl {
		float: left;
	}

	.fr {
		float: right;
	}

	.searchTopBox {
		width: 100%;
		box-sizing: border-box;
		padding-top: 15upx;
		position: absolute;
		z-index: 2;
	}

    .searchBoxRadius{
		display: flex;
		justify-content: center;
	}
 
	.searchBoxIcon {
		font-size: 40upx;
		margin-top: 20upx;
	}

	.searchBoxIpt {
		width: 90%;
		height: 60upx;
		line-height: 70upx;
		background: #F1F1F1;
		color: #C0C0C0;
		border-radius: 40upx;
		padding-left: 30upx;
		box-sizing: border-box;
	}

    .cl{
		color: #BBBBBB;
		font-size: 28upx;
	}

	.searchHistoryBox {
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		margin-top: 40upx;
	}

	.searchHistoryBoxItem {
		float: left;
		font-size: 26upx;
		color: #666;
		line-height: 46upx;
		height: 46upx;
		padding: 0 20upx;
		border-radius: 23upx;
		margin-left: 15upx;
		margin-bottom: 20upx;
		border: 1px solid #ccc;
	}
</style>
