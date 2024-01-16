<template>
    <view class="content">
         <view class="book-list">
            <view class="book" v-for="book in books" :key="book.bid">
                <view class="image-view">
                    <image class="book-image" :src="book.bookFace"></image>
                </view>
                <view class="book-title">
                    <navigator :url="'/pages/bookmessage/bookmessage?bookid='+book.bid">
                        《{{book.bookName}}》
                    </navigator>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
    export default {
        data: function() {
            return {
                books: []
            };
        },
        onLoad: function() {
            // 将获取书籍列表的操作封装
            // 以备将来重复调用
            this.getBooks();
        },
        methods: {
            getBooks: function() {
                const that = this;
                uni.request({
                    method : 'GET',
                    url : 'http://localhost:3000/books/list/',
                    success : function(res) {
                        if(res.statusCode === 200) {
                            that.books = res.data;
                        }
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

</style>