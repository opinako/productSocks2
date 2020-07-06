<template>
  <div id="app">
    <Product /> 

      
    </div>
</template>

<script>
import Product from './components/Product'
export default {
  components :{
    Product
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

 body {
    font-family: tahoma;
    color:#282828;
    margin: 0px;
  }

  .router-link-exact-active {
    color: #16C0B0;
    text-decoration: underline;
  }
</style>
