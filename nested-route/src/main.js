import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);
const User = {
  template: `
  <div class='user'>
    <h2>User {{$route.params.id}}</h2>
    <router-view></router-view>
  </div>
  `
};
const userHome = {
  template: '<p>Home</p>'
}
const userProfile = {
  template: '<p>Profile</p>'
};
const userPost = {
  template: '<p>Post</p>'
};
const router = new VueRouter({
  routes: [{
    path: '/user/:id',
    // 组件中的内容会被渲染插入main.js的<router-view>中，但组件本身也含<router-view>标签，所以组件内为嵌套的路由
    component: User,
    // 嵌套路由在构建路由对象时，必须加chilren属性
    children: [{
        // 匹配的是/user/某个id
        path: '',
        component: userHome
      }, {
        // 匹配的是/user/某个id/profile
        path: 'profile',
        component: userProfile
      },
      {
        // 匹配的是/user/某个id/post
        path: 'post',
        component: userPost
      }
    ]
  }]
});
new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
