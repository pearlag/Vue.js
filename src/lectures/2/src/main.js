import { createApp } from 'vue'
import App from './App.vue'
import AppHeader from './components/AppHeader.vue'
import AppNav from './components/AppNav.vue'
import AppView from './components/AppView.vue'
import BookComponent from './components/BookComponent.vue'

const app = createApp(App); //루트 컴포넌트 생성 옵션
app.component('AppHeader', AppHeader);
app.component('AppNav', AppNav);
app.component('AppView', AppView);
app.component('BookComponent', BookComponent);

app.mount('#app');