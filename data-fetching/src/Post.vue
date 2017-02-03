<template>
  <div class="post">
    <div class="loading" v-if='loading'>
      Loading
    </div>
    <div class="error" v-if='error'>
      {{ error }}
    </div>
    <transition name="slide">
      <!--
        giving the post container a unique key triggers transitions when post id changes
      -->
      <div class="content" v-if='post' :key='post.id'>
        <h2>
          {{ post.title}}
        </h2>
        <p>
          {{ post.body }}
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
  import {
    getPost
  } from './api'
  export default {
    data() {
      return {
        loading: false,
        post: null,
        error: null
      }
    },
    created() {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        this.error = this.post = null;
        this.loading = true;
        getPost(this.$route.params.id, (err, post) => {
          this.loading = false;
          if (err) {
            this.error = err.toString();
          } else {
            this.post = post;
          }
        })
      }
    }
  }

</script>
<style>
  .loading {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .error {
    color: red;
  }

  .content {
    transition: all .35s ease;
    position: absolute;
  }

  .slide-enter {
    opacity: 0;
    transform: translate(30px, 0);
  }

  .slide-leave-active {
    opacity: 0;
    transform: translate(-30px, 0);
  }

</style>
