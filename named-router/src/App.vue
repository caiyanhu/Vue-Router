<template>
  <div id="app">
    <h1>Named Routes</h1>
    <p>Current Route Name: {{$route.name}}</p>
    <ul>
      <li>
        <router-link :to="{name:'home'}">home</router-link>
        <router-link :to="{name:'foo'}">foo</router-link>
        <router-link :to="{name:'bar'}">bar</router-link>
      </li>
    </ul>
    <blockquote cite="">
      使用命名路由的时候，router-link的to前面要有冒号。以bar链接为例，没有冒号的时候，to的值是字符串："{name:'bar'}"；加了冒号之后，to的值是对象：{name:'bar',params: Object(empty),path:'/bar'}
    </blockquote>
    <router-view></router-view>
  </div>
</template>
