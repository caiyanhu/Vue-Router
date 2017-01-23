import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);
const Home = {
  template: '<div>This is Home.</div>'
};
const Foo = {
  template: '<div>This is Foo.</div>'
};
const Bar = {
  template: '<div>This is Bar.</div>'
};
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/foo',
      name: 'foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar
    }
  ]
});
new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
