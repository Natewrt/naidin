<template>

  <div id='app'>
    <cart />
    <div class='hr'></div>
    <h1>Naidin New</h1>
    <h2>Book store</h2>
    <items />
  </div>
</template>

<script>
import Items from './components/Items.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'app',
  components: { Items, Cart } 
}
</script>

<style>

body {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 1em;
}

.hr {
  margin-top: 1em;
  background-color: #ccc;
  height: 1px;
}
</style>
