import { ref, defineComponent } from '../node_modules/vue/dist/vue.esm-browser.js';

const tpl = `
    <div>
        <h1> 你好， {{ myName }}！</h1>
        <h2> 你的婚姻状态是：{{ myStatus }} </h2>
        姓名：<input type="text" v-model="myName" />
        <select v-model="myStatus">
			<option value="single">单身</option>
			<option value="married">已婚</option>
			<option value="not-married">不婚</option>
		</select>
        <button @click="doSomeThing">事件触发</button>
    </div>`;

const sayHello = {
    name  : 'sayHello',
    template : tpl,
    props : {
        who : String, // 仅限定类型
        status: {
            // 自定义校验函数
            validator: (value) => (
                ['single', 'married', 'not-married'].indexOf(value) !== -1
            ),
        },
    },
    setup : function(props) {
        let myName = ref(props.who);
        let myStatus = ref(props.status);
        const doSomeThing = function() {
            console.log('say-hello');
        };

        return { myName, myStatus, doSomeThing };
    } 
};

export default defineComponent(sayHello);
