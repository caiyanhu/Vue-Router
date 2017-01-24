import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);
const Home = {
  template: `
  <div class="home">
    <h2>Home</h2>
    <p>hello</p>
  </div>
  `
}

const Parent = {
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  // dynamiclly set transition based on route change
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    }
  },
  template: `
  <div class="parent">
    <h2>Parent</h2>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
  `
}

const Default = {
  template: '<div class="default">default</div>'
};
const Foo = {
  template: '<div class="foo">foo</div>'
};
const Bar = {
  template: '<div class="bar">bar</div>'
};

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/parent',
      component: Parent,
      children: [{
          path: '',
          component: Default
        },
        {
          path: 'foo',
          component: Foo
        },
        {
          path: 'bar',
          component: Bar
        }
      ]
    }
  ]
})
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
