// 加载开发环境版本，该版本包含了有帮助的命令行警告
import Vue from '../node_modules/vue/dist/vue.esm.browser.js';
// 或者
// 加载生产环境版本，该版本优化了文件大小和载入速度
// import Vue from '../node_modules/vue/dist/vue.esm.browser.min.js';

import sayHello from './sayHello.js';

const app = new Vue({
    el: '#app',
    components: {
        'say-hello': sayHello
    },
    data: {
        who:'vue'
    }
});
