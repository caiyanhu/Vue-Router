import Vue from 'vue'
import VueRoute from 'vue-router'
import App from './App.vue'

Vue.use(VueRoute);
const router = new VueRoute({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/'
    },
    {
      // :后面的内容都是路由参数，$route.params
      path: '/params/:foo/:bar'
    },
    {
      // ？表示这个参数可能有，可能没有。所以下面这条表达式匹配/optional-params或/optional-params/foo
      path: '/optional-params/:foo?'
    },
    {
      // 后面\\d+表示id这个参数必须是数字。所以/params-with-regex/abc不会被匹配到,/params-with-regex/123可以
      path: '/params-with-regx/:id(\\d+)'
    },
    {
      // 星号是通配符，表示/asterisk/后面可以跟任意内容
      path: '/asterisk/*'
    },
    {
      // 对foo/加括号，后跟问号，表示该部分路径是可选的。所以可配置/optional-group/foo/bar或者匹配/optional-group/bar
      path: '/optional-group/(foo/)?bar'
    }
  ]
})
new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
