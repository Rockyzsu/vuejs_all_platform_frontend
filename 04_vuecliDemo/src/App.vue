<template>
    <div id="app">
        <h1>使用 vue-cli 构建项目</h1>
        <say-hello :who="who"/>
    </div>
</template>
<script>
    import sayHello from './components/sayHello'

    export default {
        name: 'App',
        components: {
            'say-hello': sayHello
        },
        data: function() {
            return {
                who:'Vue'
            }
        }
    }
</script>
<style>
    #app {
        padding: 10px;
        background: black;
        color: floralwhite;
    }
</style>
