<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/practice1">Practice1</router-link> |
      <router-link to="/practice2">Practice2</router-link> |
      <router-link to="/practice3">Practice3</router-link> |
      <router-link to="/practice4">Practice4</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>