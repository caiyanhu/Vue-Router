<template>
  <div id="app">
    <h1>Navigation Guards</h1>
    <ul>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/foo">/foo</router-link>
      </li>
      <li>
        <router-link to="/bar">/bar</router-link>
      </li>
      <li>
        <router-link to="/baz">/baz</router-link>
      </li>
      <li>
        <router-link to="/qux">/qux</router-link>
      </li>
      <li>
        <router-link to="/qux-async">/qux-async</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
