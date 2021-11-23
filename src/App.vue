<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Test task</router-link> |
      <router-link to="/solution">Solution</router-link>
    </div>
    <div class=""></div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #393c3f;
}

#nav {
  padding: 5px 10px 15px;
  text-align: left;
  font-size: 4vh;
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
</style>
