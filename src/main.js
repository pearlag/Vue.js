import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// app.component('AppCard', AppCard);

app.provide('app-message', 'app message 입니다');
// 모든 컴포넌트에서 접근하고싶은
app.config.globalProperties.msg = 'hello';
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
