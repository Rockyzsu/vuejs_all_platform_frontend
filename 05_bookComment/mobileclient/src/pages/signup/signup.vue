<template>
	<view class="content">
        <view>
            <image class="logo" src="/static/logo.png"></image>
            <text class="title">新用户注册：</text>            
            <form class="form" @submit="signup">
                <view class="inputWrapper">
                    <input name="userName" placeholder="请输入用户名" />
                </view>
                <view class="inputWrapper">
                    <input name="password" password="true" placeholder="请输入密码" />
                </view>
                <view class="inputWrapper">
                    <input name="repassword" password="true" placeholder="请重复密码" />
                </view>
                <view class="formBtn">
                    <button class="submit" form-type="submit">注册</button>
                    <button class="reset" form-type="reset">重置</button>
                </view>
            </form>
        </view>
	</view>
</template>

<script>
    import md5 from 'blueimp-md5';

    export default {
		data: function() {
			return {}
		},
		methods: {
            signup: function(event) {
                // 这是表单 submit 事件的处理函数
                const formdata = event.detail.value;
                if (formdata.password !== formdata.repassword) {
                    // 提示用户确认密码
                }
                const userData =  {
                    user: formdata.userName,
                    passwd: md5(formdata.password)
                };
                uni.request({
                    method : 'POST',
                    url : 'http://localhost:3000/users/newuser',
                    header: { // 为正确提交表单数据，这项头信息设置必不可少
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    data : userData,
                    success : function(res) {
                        if (res.data === 'user_added') {
                            // 先提示注册成功，再调用以下方法
                            uni.navigateBack();
                        }
                    },
                    fail :  function(res) {
                        // 返回的错误信息存储在 res.data 对象中
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
