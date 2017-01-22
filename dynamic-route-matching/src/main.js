import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);
const User = {
  template: '<div>User</div>'
};
const routes = [{
  path: '/user/:id',
  component: User
}];
const router = new VueRouter({
  routes: routes
});
new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
