<template>
	<view class="content">
        <view v-if="user.isLogin">
            <image class="logo" src="/static/logo.png"></image>
            <view class="text-area">
                <text class="title">{{title}}</text>            
            </view>
            <view class="formBtn">
                <button @click="logout">退出登录</button>
            </view>
  		</view>
        <view v-if="!user.isLogin">
            <image class="logo" src="/static/logo.png"></image>
            <text class="title">请先登录你的账户：</text>            
            <form class="form" @submit="login">
                <view class="inputWrapper">
                    <input name="userName" placeholder="请输入用户名" />
                </view>
                <view class="inputWrapper">
                    <input name="password" password="true" placeholder="请输入密码" />
                </view>
                <view class="formBtn">
                    <button class="submit" form-type="submit">登录</button>
                    <button class="reset" form-type="reset">重置</button>
                </view>
            </form>
            <navigator url="/pages/signup/signup"> >>> 新用户注册</navigator>
        </view>
	</view>
</template>

<script>
    import md5 from 'blueimp-md5';

    export default {
		data: function() {
			return {
				title: '',
                user: {
                    uid: "",
                    isLogin: false
                }
			}
		},
		onLoad: function() {
            // 这是页面 load 事件的处理函数
            // 事件在页面载入时被触发
            const that = this;
            uni.getStorage({
                key: 'user',
                success: function (res) {
                    // 获取到的数据存储在 res.data 对象中。
                    // console.log(res.data);
                    that.user = JSON.parse(res.data);
                    if(that.user.isLogin) {
                        that.getUserMessage(that.user.uid);                                            
                    }
                }
            });
		},
		methods: {
            login: function(event) {
                // 这是表单 submit 事件的处理函数
                const formdata = event.detail.value;
                const userData =  {
                    user: formdata.userName,
                    passwd: md5(formdata.password)
                };
                const that = this;
                uni.request({
                    method : 'POST',
                    url : 'http://localhost:3000/users/session',
                    header: { // 为正确提交表单数据，这项头信息设置必不可少
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    data : userData,
                    success : function(res) {
                        // 返回的响应数据存储在r es.data 对象中
                        // console.log(res.data);
                        if(res.statusCode === 200) {
                            that.user.uid = res.data[0].uid;
                            that.user.isLogin = true;
                            uni.setStorage({
                                key: 'user',
                                data: JSON.stringify(that.user),
                                success: function () {
                                    console.log('setStorage success');
                                    that.getUserMessage(that.user.uid);
                                }
                            });
                        }
                    },
                    fail :  function(res) {
                        // 返回的错误存储在 res.data 对象中
                        // console.log(res.data);
                        // 此处省略错误处理代码
                    }
                });
            },
            logout: function() {
                this.user.isLogin = false;
                this.user.uid = "";
                uni.removeStorage({
                    key: 'user',
                    success: function () {
                        console.log('removeStorage success');
                    }
                });
            },
            getUserMessage: function(uid) {
                const that = this;
                uni.request({
                    url : 'http://localhost:3000/users/'+uid,
                    header: { // 请务必记得手动设置 cookie，以传递登录状态
                        'cookie': 'uid='+that.user.uid
                    },
                    success : function(res) {
                        // 返回的响应数据存储在 res.data 对象中
                        // console.log(res.data[0]);
                        that.title = `欢迎回来，${res.data[0].userName}！`;
                    },
                    fail :  function(res) {
                        // 返回的错误存储在 res.data 对象中
                        // console.log(res.data);
                        // 此处省略错误处理代码
                    }
                });
            }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
    .logo {
		display: flex;
		height: 300rpx;
		width: 300rpx;
		margin-top: 120rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 80rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 40rpx;
		color: gray;
	}

    .form{
		padding: 0 200rpx;
		margin-top: 40rpx;
	}
	.inputWrapper{
		width: 100%;
		height: 80rpx;
		border-radius: 20rpx;
        border-style: groove;
		box-sizing: border-box;
		padding: 0 20rpx;
		margin-top: 25rpx;
	}
	.inputWrapper .input{
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 15rpx;
	}
	.formBtn{
		width: 100%;
		height: 80rpx;
		margin-top: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
    .submit {
        width: 45%;
		border-radius: 25rpx;
        color:white;
        background-color: black;
    }

    .reset {
        width: 45%;
		border-radius: 25rpx;
        background-color: lightgray;
    }

</style>
