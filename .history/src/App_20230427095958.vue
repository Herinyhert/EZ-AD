<template>
  <div id="app">
    <nav class="">
      <div class="contend1"><router-link to="/">EZ-AD</router-link> |</div>
      <div class="contend2">
        <router-link to="/about">Digital Signage</router-link> |
        <router-link to="/ez-commerce">EZ-Commerce</router-link> |
        <router-link to="/about">Contact Us</router-link>
      </div>
      <div class="contend3">
        <router-link to="/about">
          <button type="button" class="btn btn-warning">Warning</button>
        </router-link>
        <router-link to="/about">
          <button type="button" class="btn btn-info">Tutorial Videos</button>
        </router-link>
        <router-link to="/about">
          <button type="button" class="btn btn-info">Login</button>
        </router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav button {
  margin: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
