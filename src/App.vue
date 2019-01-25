<template>
  <div id="app" class="mdui-container">
    <HTMLMetadataGenerator/>
  </div>  
</template>

<script>
import HTMLMetadataGenerator from './components/HTMLMetadataGenerator.vue'

export default {
  name: 'app',
  components: {
    HTMLMetadataGenerator
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');
#app {
  font-family: 'Noto Sans TC', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
