<template>
  <div id="app">
    <nav class="contend">
      <div class="contend1">
        <router-link to="/">EZ-AD</router-link>
      </div>
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

.contend {
  padding: 30px;
  position: relative;
}

.contend button {
  margin: 10px;
}

.contend a {
  font-weight: bold;
  color: #2c3e50;
}

.contend a.router-link-exact-active {
  color: #42b983;
}
.contend1{
  margin: 50px;
  position: absolute;
  left: 0px;
  font-size: 3rem;
}
.contend2{
justify-content: center;
}
.contend3{
  position: absolute;
  right: 50px;
}
</style>
