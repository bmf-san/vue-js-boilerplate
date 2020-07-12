<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/post">Post</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  margin: 0 auto;
  text-align: center;
}
#nav a {
  margin: 10px;
}
</style>
