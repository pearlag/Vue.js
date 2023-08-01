<sub>실전편도 매일 꾸준히 공부해서 실무에 적용할 수 있도록 해보자! </sub>

# 목차
1. [VueRouter](#VueRouter) 
2. [동적 라우트 매칭](#동적-라우트-매칭) 
3. [id값 다르게 링크 이동](#id값-다르게-링크-이동) 
4. [404 page Component](#404-page-component) 
5. [페이지 컴포넌트에 Props 전달](#페이지-컴포넌트에-props-전달) 
6. [다양한 History 모드](#다양한-history-모드) 

# VueRouter
Vue.js를 이용하여 SPA을 구현할 때 사용하는 Vue.js의 공식 라우터.

### Router
url에 따라 어떤 페이지를 보여줄지 mapping해주는 라이브러리

```bash
npm i vue-router
```

src/views  <sub>페이지들</sub>
src/components  <sub>재사용할 컴포넌트들</sub>

### 사용법
1. \src\router\ **index.js**
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

2. \src\ **main.js**
app.use(router) 호출
```js
import router from '@/router';

createApp(App).use(router).mount('#app');
```

3. 모든 자식 컴포넌트에 router, route 객체 사용가능.


### RouterLink = a태그 대신 사용.
> 페이지를 리로딩하지 않고, url매핑된 페이지 렌더링   
> 페이지 이동시 깜빡거림이 없고, 로딩시간이 거의 없다.   
> **active-class** : 활성화된 상태에서 추가하는 class 설정 가능.   
> **v-slot** 속성 사용 가능.  
> **to=""**  단순하게는  to="" 안에 이동할 url을 넣는다. 더 효율적인 방법은 아래에.    
```html
<router-link class="nav-link" active-class="active" to="/">Home</router-link>
```

### $route 내장객체
> **useRouter** import하고,    
> **$route**로 현재 페이지에 대한 정보를 접근할 수 있다.
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


### 링크 이동하는 방법들

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
3. 라우트 name으로 이동(권장)
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


### 라우트 name 설정
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
> 동적 url이다. 
> 유저마다 다른 여러 개의 url을 하나의 페이지에 매핑.    
```{{ $route.params }}```
> **params**의 값은 route에서 설정한 path에서 '**:id**' 이 부분!   
> 만약 ':abc'로 했으면 abc로 나옴.   


### query <sub>/users?</sub>
```
#route.query 
/users?searchText=love
query: { searchText: love }
```

### hash <sub>/users/#</sub>
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

/posts/ddd#hashvalue
```html
<p>hash: {{ $route.hash }}</p>
...
//출력
hash: #hashvalue
```



### ui 컴포넌트 파악하기
1. grid시스템 살펴보기
2. 사전에 정의해놓은 class들(help-class) 살펴보기



# id값 다르게 링크 이동
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
>	/posts/1?searhText=hello#world	
>	/posts/2?searhText=hello#world 	
> ...   
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
>	> 예를 들면, 페이지 이동을 about -> nested -> nested/one 페이지로 이동했다고 하자.   
>	> nested에 딸린 페이지 one, two는 link를 router.replace로 처리하였다.   
>	> 이 때, one과 two 페이지는 nested 페이지를 대체한다.   
>	> 그래서 one(또는 two, three four..) 페이지에서 뒤로 가기를 누르면 about 페이지가 나온다.   
```html
// replace 사용 안함
<router-link to="/nested/one">Nested One</router-link>

//replace 사용
<router-link :to="{ name: 'NestedOne', replace: true }">Nested One</router-link>
```

# 페이지 컴포넌트에 Props 전달

0. api 데이터 내보내기
```js
export function getPostById(id) {
	const numberID = parseInt(id); // string -> number 변환
	return posts.find(item => item.id === id);
}
```

1. 데이터를 가져올 컴포넌트
```js
import { getPostById } from '@/api/posts';
..
const id = route.params.id;
const form = ref({});

const fetchPost = () => {
	const data = getPostById(id);
	form.value = { ...data };
};
```



### reactive()와 ref() 의 차이
일관성 유지를 위해 보통 ref()를 쓴다.

#### ref()
장점
- reference(참조타입. array.function. object. date .. ), Primitive(원시타입. Number, String, Boolean, Null, undefined) 모두 할당 가능.
- 한꺼번에 객체 할당 가능 + 반응형 살아있음
- form.value = {...data}
- 일관성 유지

단점
- .value를 계속 붙여야 한다.
- form.value.title, form.value.content

#### reactive()
장점
- value를 안 붙여도 된다.
- form.title, form.content

단점
- 레퍼런스 타입만 할당이 가능.
- 객체할당을 하면 반응성을 잃는다.
- form.title = data.title;
- form.content = data.content;

### 게시판 상세 미리보기 만들기!
목록들이 간략하게 카드 형태로 나열되어 있고,

하단 섹션에는 게시판 상세 내용 미리보기 영역이 있다.

파라미터 값은 라우트 객체에 의존되어 있다.

라우트에서 ```props:true```를 넣어주면

파라미터(id값)가 해당 페이지 컴포넌트에 props로 전달된다.

**index.js**
```js
{
	path: '/posts/:id', // 동적 url. 유저마다 다른 여러개의 url을 하나의 페이지에 매핑.
	name: 'PostDetail',
	component: PostDetailView,
	props: true,
},
```

해당 페이지 컴포넌트에서 ```defineProps``` 정의

**PostDetailView.vue**
```js

// 라우트에서 props로 넘겨줬기 때문에 props로 받기.
const props = defineProps({
	id: String,
});
..
//하단에 id로만 정의되어있는 부분 props.id로 수정
const fetchPost = () => {
	const data = getPostById(props.id);
	form.value = { ...data };
};
..
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });

```



### id값을 여기저기 보낼 경우, ```index.js```
보낼 id가 있는 컴포넌트의 라우터에서 ```props:true```

#### 객체 모드로 넘길수도 있음.   
```props:{word: 'hello'}```

#### 함수 모드로 넘기기.   
props에서 속성도 넘길 수 있다.   
*parseInt() - 문자열을 정수로 바꾸는 함수   
```js
props: (route) => {
	return {
		id : parseInt(route.params.id),
		other: route.query..
	}
}

// other은 삭제하고 단축해서 적으면..
props: route => ({ id: parseInt(route.params.id) }),
```


#### 보여 줄 id를 정한다
PostListView.vue
```
<PostDetailView :id="1"></PostDetailView>
```



# 다양한 History 모드

## 우선 알아야 할 것
### SPA 
빌드 파일 생성 '/dist'
```bash
npm run build
```
생성되면 파일이 하나다. 구조도 코드도 단촐하다. 난 분명 페이지를 많이 만들었는데!!! 왜일까?   
뷰,리액트,앵귤러는 SPA 기반의 프레임워크이기 때문이다. 즉, 빌드된 결과물은 하나의 페이지에서 작동한다. 리로딩하지 않고 빠르게 UI를 보여준다.

### 서버 사이드 렌더링
ui에서 보여질 html문서를 서버에서 만들어 내려주는 것

### 클라이언트 사이드 렌더링
프웍처럼 js코드로 html를 생성해 사용자에게 보여줌.

### Hash 모드와 History 모드
Hash모드, History 모드의 차이는 운영서버에 배포할 때 일어난다.

index.js
```js
const router = createRouter({
	history: createWebHistory('/'), // ('/base')로 설정하면, url root에 기본으로 붙는다. /base/about, /base/home..
	history: createWebHashHistory(),// #이 붙는다.
	routes,
});
```

#### Hash 모드
createWebHashHistory()
> 운영서버 배포할 때 ```index.html``` 이 파일만 배포.   
> 요청은 뒤에 url 제거 (해쉬)   
> 루트로만 요청하면 index.html 파일 돌려줌.   
> 어차피 서버에 요청을 루트로 보내니, 서버 설정 없이 배포할수있다.   
> 웹사이트 크롤링 X. SEO X. 크롤링 봇이 해시를 무시할때가 많다.(치명적 단점)   
 

#### History 모드
CreateWebHistory()
> 전체 경로 포함해서 요청한다.   
> 이 경로는 404 뜸.   
> 그래서 서버 설정을 추가로 해야 한다. 공식문서 가이드 있음.   
> 대부분 이걸 사용해서 배포.   



# API 서버 통신

### github json-server library
명령어 하나로 api서버 생성 가능.
```bash
npm i -D json-server
npx json-server --watch db.json //api 서버 실행, db.json 생성
db.json 파일에 posts data 넣기
npx json-server --watch db.json --port 5000
package.json에 명령어 등록
..
npm run db // 이 명령어 띄우고 localhost 띄워야 데이터 보임!
```

### github axios
서버와 통신하기 위한 비동기 통신 모듈.
```bash
npm i axios
```

posts.js
```js
export function getPosts() {
	return axios.get('http://localhost:5000/posts');
}
// 단건 조회
export function getPostById(id) {
	return axios.get(`http://localhost:5000/posts/${id}`);
}
// 등록
export function createPost(data) {
	return axios.post('http://localhost:5000/posts', data);
}
// 수정
export function updatePost(id, data) {
	return axios.put(`http://localhost:5000/posts/${id}`, data);
}
// 삭제
export function deletePost(id) {
	return axios.delete(`http://localhost:5000/posts/${id}`);
}
```

### promise
자바스크립트에서 비동기를 처리할 때 사용하는 객체.
값을 받을땐
```js
const fetchPosts = () => {
	getPosts()
		.then(response => {
			console.log('response: ', response);
		})
		.catch(error => {
			console.log('error: ', error);
		});
};
```

### promise 객체 대신 async awit (promise의 문법적 설탕)
```js
const fetchPosts = async () => {
	try {
		const { data } = await getPosts();
		posts.value = data;
	} catch (error) {
		console.error(error);
	}
};
```

오류를 받을 때 catch()

객체를 로그로 출력할 땐 console.dir()을 사용하면 편하다.
ex) ```console.dir(response)```


### 게시글 등록 구현
1. 폼 객체 생성
PostCreateView.vue
```js
const form = ref({
	title: null,
	content: null,
});
```
2. v-model 바인딩 및 save 메서드 넣기
PostCreateView.vue
```html
<form @submit.prevent="save">
..
<input
	v-model="form.title"
	type="text"
	class="form-control"
	id="title"
/>
..
<textarea
	v-model="form.content"
	class="form-control"
	id="contents"
	rows="3"
></textarea>
```

3. save 메서드 등록
PostCreateView.vue
```js
import { createPost } from '@/api/posts';
...
const save = () => {
	try {
		createPost({
			...form.value,
			createdAt: Date.now(),
		});
		router.push({ name: 'PostList' });
	} catch (error) {
		console.error(error);
	}
};
```

db.js 파일에도 data가 추가된다.

### 글 상세 페이지 구현
postDetailView.vue
```js
<h2>{{ post.title }}</h2>
<p>{{ post.content }}</p>
<p>{{ post.createdAt }}</p>
const post = ref({
	title: null,
	content: null,
	createdAt: null,
});
..
const fetchPost = async () => {
	try {
		const { data } = await getPostById(props.id);
		setPost(data);
	} catch (error) {
		console.error(error);
	}
};
const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};
fetchPost();
```

### 글 수정 구현
PostEditView.vue
```js
<form @submit.prevent="edit">
..
<input
		v-model="form.title"
		type="text"
		class="form-control"
		id="title"
	/>
<textarea
	v-model="form.content"
	class="form-control"
	id="contents"
	rows="3"
></textarea>
...

import { getPostById, updatePost } from '@/api/posts';
..
const form = ref({
	title: null,
	content: null,
});
const fetchPost = async () => {
	try {
		const { data } = await getPostById(id);
		setForm(data);
	} catch (error) {
		console.error(error);
	}
};
..
const setForm = ({ title, content }) => {
	form.value.title = title;
	form.value.content = content;
};
...
const edit = async () => {
	try {
		await updatePost(id, { ...form.value });
		router.push({ name: 'PostDetail', params: { id } });
	} catch (error) {
		console.error(error);
	}
};
```


### 글 삭제 구현
PostDetailView.vue
```js
<button class="btn btn-outline-danger" @click="remove">삭제</button>
..
import { getPostById, deletePost } from '@/api/posts';
...
const remove = async () => {
	try {
		if (confirm('삭제하시겠습니까?') === false) {
			return;
		}
		await deletePost(props.id);
		router.push({ name: 'PostList' });
	} catch (error) {
		console.error(error);
	}
};
```


# Pagination & Filter 구현 
github.com/typicode/json-server 참고
### _sort
정렬의 기준이 되는 key
### order
asc: 오름차순   
desc: 내림차순

PostListView.vue
```vue
<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<form @submit.prevent><!-- 제출 기능(기본기능) 막기 -->
			<div class="row g-3">
				<div class="col">
					<input v-model="params.title_like" type="text" class="form-control" /><!-- 검색 기능. v-model에 title_like 값을 양방향 바인딩. -->
				</div>
				<div class="col-3">
					<select v-model="params._limit" class="form-select"><!-- 필터 기능. v-model에 limit 값을 바인딩. -->
						<option value="3">3개씩 보기</option>
						<option value="6">6개씩 보기</option>
						<option value="9">9개씩 보기</option>
					...
		<nav class="mt-5" aria-label="Page navigation example">
			<ul class="pagination justify-content-center">
				<li class="page-item" :class="{ disabled: !(params._page > 1) }">
					<a
						class="page-link"
						href="#"
						aria-label="Previous"
						@click.prevent="--params._page"
					>
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li
					v-for="page in pageCount"
					key="page"
					class="page-item"
					:class="{ active: params._page === page }"
				>
					<a class="page-link" href="#" @click.prevent="params._page = page">{{
						page
					}}</a>
				</li>
				<li
					class="page-item"
					:class="{ disabled: !(params._page < pageCount) }"
				>
					<a
						class="page-link"
						href="#"
						aria-label="Next"
						@click.prevent="++params._page"
					>
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>
		<hr class="my-5" />
		<AppCard>
			<PostDetailView :id="1"></PostDetailView>
		</AppCard>
	</div>
</template>
<script setup>
const params = ref({
	_sort: 'createdAt',  // 기준
	_order: 'desc', // 내림차순 정렬
	_limit: 3, //몇 개씩 조회할 것인지?
	_page: 1, // 어느 페이지를 보여줄 것인지?
	title_like: '', // 검색. 일단 빈값을 넣고 값을 받을 input에 v-model로 연결한다.
});
//paganation
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
); // 올림한다. (토탈카운트의 값 나누기 조회할 페이지를)

const fetchPosts = async () => {
	try {
		const { data, headers } = await getPosts(params.value);
		posts.value = data;
		totalCount.value = headers['x-total-count']; // header 값으로 x-total-cout를 받아와 변수에 넣는다.
	} catch (error) {
		console.error(error);
	}
};
watchEffect(fetchPosts); // v-model로 인해서 변경이 일어나면 다시 실행한다.(페이지 이동 후 리스트 재생성)
..
</script>
```

# axios 모듈, Vite 환경 변수 설정

### axios 라이브러리를 모듈로 분리

api/index.js 생성
```js
import axios from 'axios'; //axios를 이 파일에서 임포트한다

// create라는 함수에 baseURL, options 파라미터를 설정하고 
// instance 변수를 담고 리턴한다.
function create(baseURL, options) {
	const instance = axios.create(Object.assign({ baseURL }, options));
	return instance;
} 

// posts 변수에 create 변수를 담고, 파라미터 값으로 게시판 url을 설정해서 내보낸다.
export const posts = create('http://localhost:5000/posts');
```

posts.js 수정
```js
// axios 임포트를 지우고 앞전에 만든 posts 변수를 받는다.
import { posts } from '.';

// 중복으로 들어갔던 http://localhost:5000.. url을 지운다.
// axios 대신 posts를 넣는다.
export function getPosts(params) {
	return posts.get('/', { params });
}
// 단건 조회
export function getPostById(id) {
	return posts.get(id + '');
}
// 등록
export function createPost(data) {
	return posts.post('', data);
}
// 수정
export function updatePost(id, data) {
	return posts.put(`/${id}`, data);
}
// 삭제
export function deletePost(id) {
	return posts.delete(id + '');
}
```

vite 공식 홈페이지 -env - 환경 변수   
import.meta.env.MODE // 현재 구동되는 애플리케이션이 어떤 모드인지 (개발 or 운영)   
vite.config.js 옵션에서 설정 가능. 디폴트는 dev모드.   

import.meta.env.BASE_URL   
import.meta.env.PROD // 현재 운영 모드인가? boolean 값   
import.meta.env.DEV // 현재 개발 모드인가? boolean 값   


개발/운영 모드에 따라 다른 url을 가져오려면   
환경 변수를 설정해야 한다.   
.env Files

.env
```
VITE_APP_API_URL=http://localhost:5001
```

.env_development(우선순위가 더 높다. 그래서 default값이다.)
```
VITE_APP_API_URL=http://localhost:5000
```

접두사 VITE를 수정하고 싶다면
vite.config.js의 defineConfig 설정에서
envPrefix:'변경할 값'

api/index.js url 수정
```js
...
export const posts = create(`${import.meta.env.VITE_APP_API_URL}/posts`);
```


# 공통 컴포넌트 분리
한 번 더 듣기

# 버그 수정 : HTTP PUT vs PATCH

# Transitions

vue 내장 컴포넌트.
나타나고 사라지는 animation 구현

- v-if
- v-show
- <component>

AppAlert.vue
```vue
<template>
	<Transition name="slide">
		<div v-if="show" class="app-alert alert" role="alert" :class="typeStyle">
			{{ message }}
		</div>
	</Transition>
</template>

<style scoped>
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}
.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
}
.slide-enter-to,
.slide-leave-from {
	opacity: 1;
	transform: translateY(0px);
}
</style>
```
- v-enter-from 같은 class명은 transition 컴포넌트의 기능이다.(공식문서 참고) 나타나고 사라질 때 스타일속성을 부여할 수 있다.
- Transition 컴포넌트의 name을 설정해주면 css에서 v 접두사 대신에 쓸 수 있다.



# TransitionGroup
v-for 목록에 삽입.
제거 또는 이동할 때 애니메이션 적용


# 모달modal 팝업
