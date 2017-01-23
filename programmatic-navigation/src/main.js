import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);
const User = {
  template: `
  <p>{{$route.params.id}}</p>
  `
};
const Home = {
  template: '<p>HomePage</p>'
};
const router = new VueRouter({
  routes: [{
    path: '/user/:id',
    component: User
  }]
});
router.push("/");
new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
