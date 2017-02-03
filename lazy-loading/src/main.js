import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

const Home = {
  template: '<div>home</div>'
};
// In Webpack we can use special require syntax to signify a "split point"
// Webpack will automatically split and lazy-load the split modules.
// - https://webpack.github.io/docs/code-splitting.html

// Combine that with Vue's async components, we can easily make our route
// components lazy-loaded only when the given route is matched.

// async components are defined as:
// - resolve => resolve(Component)
// or
// - () => Promise<Component>

// For single component, we can use the AMD shorthand
// require(['dep'], dep => { ... })
const Foo = resolve => require(['./Foo.vue'], resolve);
// If using Webpack 2, you can also do:
// const Foo = () => System.import('./Foo.vue')

// If you want to group a number of components that belong to the same
// nested route in the same async chunk, you will need to use
// require.ensure. The 3rd argument is the chunk name they belong to -
// modules that belong to the same chunk should use the same chunk name.
const Bar = r => require.ensure([], () => r(require(['./Bar.vue'])), '/bar');
const Baz = r => require.ensure([], () => r(require(['./Baz.vue'])), '/bar');

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      component: Home
    },
    // Just use them normally in the route config
    {
      path: '/foo',
      component: Foo
    },
    // Bar and Baz belong to the same root route and grouped in the same async chunk.
    {
      path: '/bar',
      component: Bar,
      children: [{
        path: "baz",
        component: Baz
      }]
    }
  ]
})
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
