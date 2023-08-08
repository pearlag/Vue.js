// vue 컴포넌트의 관문. 라이브러리를 받아오고, Vue createApp 생성하고 , 뷰의 루트 페이지와 라우터를 받아온다.

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import globalDirectives from '@/plugins/global-directives';
import dayjs from '@/plugins/dayjs';
// import focus from '@/directives/focus';
// import globalComponents from '@/plugins/global-components';

const app = createApp(App);
// app.use(globalComponents);
// app.directive('focus', focus);
app.use(router);
app.use(globalDirectives);
app.use(dayjs);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

// console.log('MODE: ', import.meta.env.MODE);
// console.log('MODE: ', import.meta.env.BASE_URL);
// console.log('MODE: ', import.meta.env.PROD);
// console.log('MODE: ', import.meta.env.DEV);

// console.log('VITE_APP_API_URL: ', import.meta.env.VITE_APP_API_URL);
