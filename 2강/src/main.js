import {createApp} from 'vue';
import App from './App.vue';
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
import AppView from './components/AppView.vue';
import BookComponent from './components/BookComponent.vue';


const app = createApp(App); // 처음에 랜더링하는 루트 컴포넌트
app.component('BookComponent', BookComponent); // 하나씩 하나씩 렌더링한다
app.component('AppHeader', AppHeader);
app.component('AppNav', AppNav);
app.component('AppView', AppView);
app.mount("#app");