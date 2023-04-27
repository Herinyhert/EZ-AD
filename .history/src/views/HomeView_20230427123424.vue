<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EZADHome from '@/components/EZADHome.vue';

export default {
  name: 'HomeView',
  components: {
    EZADHome
  }
}
</script>
