import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

const Home = {
  template: '<div><h1><router-view></router-view></h1></div>'
};
const Foo = {
  template: '<div>foo</div>'
};
const Bar = {
  template: '<div>bar</div>'
};
const Baz = {
  template: '<div>baz</div>'
};

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/home',
    component: Home,
    children: [
      // absolute alias: 因为alias前面有/，所以是绝对路径，浏览器访问的是localhost:8080/foo
      {
        path: 'foo', // 因为foo前面没有/，所以是相对路径，这个路径对应的是localhost:8080/home/foo
        component: Foo,
        alias: '/foo'
      },
      // relative alias (alias to /home/bar-alias): 因为alias前面没有/，所以是相对于/home的路径（原因是bar path是/home path的children），浏览器访问的是localhost:8080/home/bar-alias
      {
        path: 'bar', // 因为bar前面没有/，所以是相对路径，这个路径对应的是localhost:8080/home/bar
        component: Bar,
        alias: 'bar-alias'
      },
      // multiple aliases。综上可得，浏览器分别访问的是localhost:8080/baz localhost:8080/home/baz-alias
      {
        path: 'baz', // 因为baz前面没有/，所以是相对路径，这个路径对应的是localhost:8080/home/baz
        component: Baz,
        alias: ['/baz', 'baz-alias']
      }
    ]
  }]
})
new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
