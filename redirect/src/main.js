import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

const Home = {
  template: '<router-view></router-view>'
};
const Default = {
  template: '<div>Default</div>'
}
const Foo = {
  template: '<div>Foo</div>'
};
const Bar = {
  template: '<div>Bar</div>'
};
const Baz = {
  template: '<div>Baz</div>'
};
const WithParams = {
  template: '<div>{{$route.params.id}}</div>'
};

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      component: Home,
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
        },
        {
          path: 'baz',
          name: 'baz',
          component: Baz
        },
        {
          path: 'with-params/:id',
          component: WithParams
        },
        // relative redirect to a sibling route
        {
          path: 'relative-redirect',
          redirect: 'foo'
        }
      ]
    },
    // absolute redirect
    {
      path: '/absolute-redirect',
      redirect: '/bar'
    },
    // dynamic redirect
    {
      path: '/dynamic-redirect/:id?',
      redirect: to => {
        const {
          hash,
          params,
          query
        } = to
        if (query.to === 'foo') {
          return {
            path: '/foo',
            query: null
          };
        }
        if (hash === '#baz') {
          return {
            name: 'baz',
            hash: ''
          };
        }
        if (params.id) {
          return '/with-params/:id'
        } else {
          return '/bar'
        }
      }
    },
    // named redirect
    {
      path: '/named-redirect',
      redirect: {
        name: 'baz'
      }
    },
    // redirect with params
    {
      path: '/redirect-with-params/:id',
      redirect: '/with-params/:id'
    },
    // catch all redirect
    {
      path: '*',
      redirect: '/'
    }
  ]
})
new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
