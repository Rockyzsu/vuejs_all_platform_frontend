// 加载开发环境版本，该版本包含了有帮助的命令行警告
import Vue from '../node_modules/vue/dist/vue.esm.browser.js';
// 或者
// 加载生产环境版本，该版本优化了文件大小和载入速度
// import Vue from '../node_modules/vue/dist/vue.esm.browser.min.js';

const vueMessage = {
    title       : 'Vue.js 框架简介',
    description : 'Vue (读音 /vjuː/) 是一套用于构建用户界面的渐进式框架。',
    documents    : {
        '2.x' : 'https://cn.vuejs.org/v2/guide/',
        '3.x' : `https://v3.vuejs.org/guide/`
    }
};

const app = new Vue({
    el: '#app',
    data: {
        app_title : 'Vue.js 前端应用示例',
        message   : vueMessage,
        imgURL    : './images/logo.png',
        isShow    : false,
        btnText   : '打声招呼！'
    },
    methods: {
        sayHello: function() {
            this.isShow = !this.isShow;
            this.btnText = this.isShow? '隐藏信息':'打声招呼！';
        }
    }
});
