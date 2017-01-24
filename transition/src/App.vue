<template>
  <div id="app">
    <h1>Transitions</h1>
    <ul>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/parent">/parent</router-link>
      </li>
      <li>
        <router-link to="/parent/foo">/parent/foo</router-link>
      </li>
      <li>
        <router-link to="/parent/bar">/parent/bar</router-link>
      </li>
    </ul>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
