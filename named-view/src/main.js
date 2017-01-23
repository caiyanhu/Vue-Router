import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);
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
      path: '/',
      // 一个视图用一个组件渲染，对于同一个路径（路由），多个视图就需要多个组件。所以下面使用的是components而不是component
      components: {
        //  router-view如果没写name属性的值，那么默认就是default。该视图渲染Foo组件
        default: Foo,
        // <router-view name='a'>，该视图渲染Bar组件
        a: Bar,
        // <router-view name='b'>，该视图渲染Baz组件
        b: Baz
      }
    },
    {
      path: '/other',
      components: {
        default: Baz,
        a: Bar,
        b: Foo
      }
    }
  ]
});
new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
