<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Task</router-link> <br />
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
  text-align: center;
  color: #393c3f;
  display: flex;
  justify-content: space-between;
}

#nav {
  width: max-content;
  padding: 1vw;
  text-align: left;
  font-size: 2vw;
  line-height: 40px;
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
