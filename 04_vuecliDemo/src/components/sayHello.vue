<template>
    <div class="box">
        <img alt="Vue logo"
             src="../assets/img/logo.png">
        <h1>你好， {{ you }}！</h1>
        <input type="text" v-model="you" />
    </div>
</template>

<script>
    const sayHello = {
        name: 'sayHello',
        props : ['who'],
        data : function() {
            return {
                you: this.who
            }
        }
    };
    export default sayHello;
</script>

<style scoped>
    .box {
        width: 300px;
        height: 300px;
        border-radius: 14px;
        padding: 14px;
        color: black;
        background: floralwhite;
        text-align: center;
    }

    .box img {
        height: 180px;
    }
</style>
