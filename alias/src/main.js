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
      // absolute alias:
      {
        path: 'foo',
        component: Foo,
        alias: '/foo'
      },
      // relative alias (alias to /home/bar-alias)
      {
        path: 'bar',
        component: Bar,
        alias: 'bar-alias'
      },
      // multiple aliases
      {
        path: 'baz',
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
