import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// app.component('AppCard', AppCard);

app.provide('app-message', 'app message 입니다.');

// globalProperties :: 모든 컴포넌트에서 접근하고싶은 라이브러리와 같은 객체 추가.
app.config.globalProperties.msg = 'hello';
app.provide('msg', 'hello msg');
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
