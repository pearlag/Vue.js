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
엉뚱한 url로 이동했을 때 이동할 페이지를 설정한다.
index.js
```js
const routes = [
	{
		path: '/:pathMatch(.*)*',
	// path: '/user-:afterUser(.*)', 특정 문자열 뒤에 정규식 표현할 때
		name: 'NotFound',
		component: NotFoundView,
	},
];
```

### 중첩된 라우트
> nav에서 선택된 메뉴의 컨텐츠가 이미 보여지고 있는데   
> 그 컨텐츠에 또 탭이 있어서 그 탭에 해당되는 컨텐츠가 보여져야할 때.  

1. 부모 컴포넌트에 ```<router-view></router-view>```를 넣는다.

2. 라우트 설정에서 부모 컴포넌트 안에 children 속성을 넣어, 딸린 페이지들을 연결한다.
```js
{
	path: '/Nested',
	name: 'Nested',
	component: NestedView,
	children: [
		{
				path: '', // /Neseted 페이지, 즉 기본 페이지
				name: 'NestedHome',
				component: NestedHomeView,
			},
		{
			path: 'one',
			name: 'NestedOne',
			component: NestedOneView,
		},
		{
			path: 'two',
			name: 'NestedTwo',
			component: NestedTwoView,
		},
	],
},
```

### router.replace
= router.push

> 현재 페이지 컴포넌트를 '대체'한다.   
> 히스토리에 쌓이지 않는다.   
> 예를 들면, 페이지 이동을 about -> nested -> nested/one 페이지로 이동했다고 하자.   
> nested에 딸린 페이지 one, two는 link를 router.replace로 처리하였다.   
> 이 때, one과 two 페이지는 nested 페이지를 대체한다.   
> 그래서 one(또는 two, three four..) 페이지에서 뒤로 가기를 누르면 about 페이지가 나온다.   
```html
// replace 사용 안함
<router-link to="/nested/one">Nested One</router-link>

//replace 사용
<router-link :to="{ name: 'NestedOne', replace: true }">Nested One</router-link>
```



# 페이지 컴포넌트에 Props 전달

1. id값을 여기저기 보낼 경우,
(보낼 id가 있는 컴포넌트의)라우터에서 props:true

객체 모드로 넘길수도 있음.

함수 모드로 넘기기.
props: (route) => {
	return {
		id : parseInt(route.params.id),
		other: route.query
	}
}
매개변수로 route 넘기고,.. 