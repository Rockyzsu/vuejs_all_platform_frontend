<template>
    <view class="content">
        <view class="image-view">
            <image class="book-image" :src="bookFace"></image>
        </view>
        <view class="book-title">
            <text>《{{bookName}}》</text>
            <text>{{authors}}</text>
            <text>{{publishingHouse}}</text>
        </view>
    </view>
</template>

<script>
    export default {
        data: function() {
            return {
                bookName: '',
                bookFace: '',
                authors: '',
                publishingHouse: '',
                publishDate: new Date()
            };
        },
        onLoad: function(option) {
            // 外部传递的参数存储在 option 对象中
            // 可通过 option.[参数名] 的方式来访问
            console.log(option.bookid)
            const that = this;
            uni.request({
                method : 'GET',
                url : 'http://localhost:3000/books/'+option.bookid,
                success : function(res) {
                    if(res.statusCode === 200 &&
                            res.data.length == 1) {
                        that.bookFace = res.data[0].bookFace;
                        that.bookName = res.data[0].bookName;
                        that.authors = res.data[0].authors;
                        that.publishingHouse = res.data[0].publishingHouse;
                        that.publishDate 
                            = res.data[0].publishDate.toLocaleDateString();
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
</script>

<style>

</style>