<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Task </router-link>|
      <router-link to="/solution">Solution</router-link>
    </div>
    <div class="context"><router-view /></div>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #393c3f;
}

#nav {
  padding: 1vw;
  font-size: 20px;
}

#nav a {
  font-weight: bold;
  color: #393c3f;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #0e85f5;
  text-decoration: underline;
}
.context {
  width: 100%;
}
</style>
