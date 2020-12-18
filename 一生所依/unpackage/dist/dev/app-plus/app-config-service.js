
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/store/store","pages/profile/profile","pages/public/login","pages/register/register","pages/secondary/datails","pages/secondary/team","pages/secondary/share","pages/storeform/storeform","pages/secondary/payment"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#000000"},"tabBar":{"color":"#A1A1A1","selectedColor":"#EA923B","borderStyle":"white","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/home.png","selectedIconPath":"static/home-fill.png","text":"首页"},{"pagePath":"pages/store/store","iconPath":"static/vip.png","selectedIconPath":"static/vip-fill.png","text":"门店"},{"pagePath":"pages/profile/profile","iconPath":"static/account.png","selectedIconPath":"static/account-fill.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"一生所依","compilerVersion":"2.9.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"一生所衣","navigationBarBackgroundColor":"#010101","navigationBarTextStyle":"white"}},{"path":"/pages/store/store","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"金牌门店","navigationBarBackgroundColor":"#010101","navigationBarTextStyle":"white"}},{"path":"/pages/profile/profile","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationBarBackgroundColor":"#010101","navigationBarTextStyle":"white"}},{"path":"/pages/public/login","meta":{},"window":{"navigationBarTitleText":"登录","navigationBarBackgroundColor":"#010101","navigationBarTextStyle":"white"}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"注册","navigationBarBackgroundColor":"#010101","navigationBarTextStyle":"white"}},{"path":"/pages/secondary/datails","meta":{},"window":{"navigationBarTitleText":"店铺详情","navigationBarBackgroundColor":"#010101","navigationBarTextStyle":"white"}},{"path":"/pages/secondary/team","meta":{},"window":{"navigationBarTitleText":"团队会员","navigationBarBackgroundColor":"#010101","navigationBarTextStyle":"white"}},{"path":"/pages/secondary/share","meta":{},"window":{"navigationBarTitleText":"分享"}},{"path":"/pages/storeform/storeform","meta":{},"window":{"navigationBarTitleText":"门店表单","navigationBarBackgroundColor":"#010101","navigationBarTextStyle":"white"}},{"path":"/pages/secondary/payment","meta":{},"window":{"navigationBarTitleText":"购物支付","navigationBarBackgroundColor":"#EA923B","navigationBarTextStyle":"white"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
