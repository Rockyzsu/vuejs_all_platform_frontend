// 加载开发环境版本，该版本包含了有帮助的命令行警告
import { createApp } from '../node_modules/vue/dist/vue.esm-browser.js';
// 或者
// 加载生产环境版本，该版本优化了文件大小和载入速度
// import { createApp } from '../node_modules/vue/dist/vue.esm-browser.prod.js';

import sayHello from './sayHello.js';

const app =  {
    data: function() {
        return {
            app_title: 'Vue.js 前端应用示例',
            message: ''
        };
    },
    methods: {
        sayHello: function() {
            this.message = 'Hello，Vue.js app.';
        }
    },
    components : {
        'say-hello' : sayHello
    }
};

createApp(app).mount('#app');