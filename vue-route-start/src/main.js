import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const Foo = {
  template: '<div>this is foo</div>'
};
const Bar = {
  template: '<div>this is bar</div>'
};
const routes = [{
  path: '/foo',
  component: Foo
}, {
  path: '/bar',
  component: Bar
}];
const router = new VueRouter({
  routes: routes
})

new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
