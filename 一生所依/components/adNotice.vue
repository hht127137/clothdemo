<template>
 
    <div style="background-color: #4CD964;">
       <div class="nav_hd">
		   <div class="nav_hd_logo">
			   <image class="nav_hd_logo_img" src="/static/logo.png" mode=""></image>
		   </div>
		   <div class="news_box">
		       <div class="inner-container" ref="test">
		           <text class="text" v-for="(text, index) in arr" :key="index"  >{{text}}</text>
		       </div>
		   </div>
	   </div>
    </div>
</template>
 
<script>
	  const animation = weex.requireModule('animation')
    export default {
        data(){
            return{
			translateY:null
            }
        },
		props:{
			arr : {
				type: Array,
				default () {
					return []
				}
			}
		},
		created() {
			
			setInterval(()=>{
				this.translateY += ~41;
				if((this.arr.length * ~41) >= this.translateY){
					this.translateY = 0
				}
				var testEl = this.$refs.test;
				        animation.transition(testEl, {
				          styles: {
				            transform: `translateY(${this.translateY}px)`
				          },
				          duration: 500, //ms
				          timingFunction: 'ease',
				          delay: 0 //ms
				        }, function () {
				        })
			},3000)
		},
		methods:{
			
		}
    }
</script>
 
<style scoped>
	.nav_hd{
		width: 730px;
		height: 80px;
		background-color: #F8F8F8;
		flex-direction: row;
		border-radius: 5px;
		margin: 15px 10px;
	}
	.nav_hd_logo{
		width: 100px;
		height: 40px;
		margin-top: 20px;
		margin-left: 7.5px;
	}
	.nav_hd_logo_img{
		width: 100px;
		height: 40px;
	}
    .inner-container {
		width: 600px;
		height: 40px;	
		flex-wrap: nowrap;
    }
 
    .text{      
		flex-wrap: nowrap;
        overflow: hidden;
		font-size: 28px;
		line-height: 41px;
		color: #262626;
		lines: 1;
    }
 
    .news_box{
        height: 40px;
		flex-wrap: nowrap;
        overflow: hidden;
		margin-top: 20px;
		margin-left: 15px;
    }

</style>
