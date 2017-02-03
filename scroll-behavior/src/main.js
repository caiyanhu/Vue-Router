import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

const Home = {
  template: '<div>home</div>'
};
const Foo = {
  template: '<div>foo</div>'
};
const Bar = {
  template: `
    <div>
      bar
      <div style="height:500px"></div>
      <p id="anchor">Anchor</p>
    </div>
  `
}
// scrollBehavior:
// - only avaliable in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only avaliable for popstate navigations.
    return savedPosition;
  } else {
    const position = {};
    // new navigation
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash;
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided or if the selector didn't match any element
      position.x = 500;
      position.y = 100;
    }
    // if the required position is falsy or an empty object, will retain current scroll position
    return position;
  }
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  scrollBehavior,
  routes: [{
      path: '/',
      component: Home,
      meta: {
        scrollToTop: true
      }
    },
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/bar',
      component: Bar,
      meta: {
        scrollToTop: true
      }
    }
  ]
})
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
