// 加载开发环境版本，该版本包含了有帮助的命令行警告
import Vue from '../node_modules/vue/dist/vue.esm.browser.js';
// 或者
// 加载生产环境版本，该版本优化了文件大小和载入速度
// import Vue from '../node_modules/vue/dist/vue.esm.browser.min.js';

const app = new Vue({
    el: '#app',
    data:{
        newTask: '',
        taskList: [],
        doneList: []
    },
    methods:{
        addNew: function() {
                  if(this.newTask !== '') {
                      this.taskList.push(this.newTask);
                      this.newTask = '';
                  }
                },
        remove: function(index) {
                  if(index >=  0) {
                      this.taskList.splice(index,1);
                  }
                }
    },
    created : function() {
        if(sessionStorage.getItem('names') !== null) {
            const taskData = sessionStorage.getItem('names');
            this.taskList = JSON.parse(taskData);
            if(sessionStorage.getItem('done') !== null) {
                const doneData = sessionStorage.getItem('done');
                this.doneList = JSON.parse(doneData);
            }
        }
    },
    updated : function() {
        if(this.taskList !== []) {
            const taskData = JSON.stringify(this.taskList);
            sessionStorage.setItem('names', taskData);
            if(this.doneList !== []) {
                const doneData = JSON.stringify(this.doneList);
                sessionStorage.setItem('done', doneData);
            }
        }
    }   
});
