<sub>실전편도 매일 꾸준히 공부해서 실무에 적용할 수 있도록 해보자! </sub>

# 목차
1. [VueRouter](#VueRouter) 

# VueRouter
Vue.js를 이용하여 SPA을 구현할 때 사용하는 Vue.js의 공식 라우터.

### Router
url에 따라 어떤 페이지를 보여줄지 mapping해주는 라이브러리

```bash
npm i vue-router
```

src/views  페이지
src/components  재사용할 컴포넌트

### 사용법
1. \src\router\index.js
router 정보 설정
```js
'vue-router';
import Homeview from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Homeview,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
```

2. \src\main.js
app.use(router) 호출
```js
import router from '@/router';

createApp(App).use(router).mount('#app');
```

3. 모든 자식 컴포넌트에 router, route 객체 사용가능.


### RouterLink a태그 대신 사용
> 페이지를 리로딩하지않고, url매핑된 페이지 렌더링   
> active-class : 활성화된 상태에서 추가하는 class 설정 가능.   
> v-slot 속성 사용 가능.   
```html
<router-link class="nav-link" active-class="active" to="/">Home</router-link>
```

### $route 내장객체
> useRouter 임포트하고,    
> $route로 현재 페이지에 대한 정보를 접근할 수 있다.
```vue
<template>
	<div>
		<h2>About View</h2>
		<p>{{ $route.path }}</p><!-- /about -->
		<p>{{ $route.name }}</p><!-- About -->
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const route = useRouter();
console.log('route.path', route.path);
</script>
```


### router 링크 이동하는 방법

1. $router에 push
```html
<button class="btn btn-primary" @click="$router.push('/')">Home Go</button>
```

2. 변수에 함수로 담기
```html
<button class="btn btn-primary" @click="goAboutPage()">About Go</button>
...

import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};
```
3. 라우트 name으로 이동 ( 권장 )
```html
<button	@click="goDetailPage">취소</button>
..

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const goDetailPage = () => {
	router.push({
		name: 'PostDetail',
		params: { id },
	});
};
</script>

```


### 현재 라우트 이름 name 설정
index.js
```
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Homeview,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
];
```


# 동적 라우트 매칭
```path: '/posts/:id'```
> 동적 url   
> 유저마다 다른 여러개의 url을 하나의 페이지에 매핑.    
```{{ $route.params }}```
> params의 값은 route에서 설정한 path에서 ':id' 이부분!   
> 만약 ':abc'로 했으면 abc로 나옴.   


### query
```
#route.query 
/users?searchText=love
query: { searchText: love }
```

### hash
```
$route.hash
/users/#profile
hash: { profile }
```

ex)
/posts/ddd?searchText=Vue3bible#profile

```html
<p>params: {{ $route.params }}</p>
<p>query: {{ $route.query }}</p>
<p>searchText: {{ $route.query.searchText }}</p>
<p>hash: {{ $route.hash }}</p>
..

//출력
params: { "id": "ddd" }
query: { "searchText": "Vue3bible" }
searchText: Vue3bible
hash: profile
```

### ui 컴포넌트 파악 tip
1. grid시스템 살펴보기
2. 사전에 정의해놓은 class들(help-class) 살펴보기



# id값 다르게 상세 이동
1. 하드코딩
```js
@click="goPage(post.id)"
...
const goPage = id => {
	router.push(`/posts/${id}`);
};
```
2. 이름을 가지는 라우트
```js
@click="goPage(post.id)"
...
const goPage = id => {
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};
```

3. 쿼리, 해쉬와 함께 사용
/posts/1?searhText=hello#world
/posts/2?searhText=hello#world
...
```js
router.push({
  name: 'PostDetail',
  params: {
    id,
  },
  query: {
    searhText: 'hello',
  },
  hash: '#world',
});
```

# 404 page Component