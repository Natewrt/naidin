<template>
  <ul class='items'>
    <li v-for='(item, index) in items' class='item'>
      <img class='item-image' :src='"http://lorempixel.com/400/400/abstract/" + index' />
      <div>{{ item.name }} <span class='item-price'>${{ item.price }}</span></div>
      <a class='item-add' href='#' @click.prevent='addToCart(item)'>Add to Cart</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'items',
  computed: {
    items () {
      return this.$store.state.items
    }
  },
methods: {
    addToCart (item) {
      this.$store.commit('addItem', item)
    }
  }

 ,
  mutations: {
    addItem (state, item) {
      //ถ้ามีของในตระกร้าก็ให้เอาของเข้าไปเพิ่ม
      if (state.cart[item.id]) {
        state.cart[item.id].quantity++
      } else {
        //ถ้าไม่มีให้เป็นข้อมูลทีของตัวที่รับเข้ามา
        Vue.set(state.cart, item.id, {
          id: item.id,
          quantity: 1,
          price: item.price,
          name: item.name
        })
      }
    }
  }
}
</script>

<style>
.items {
  columns: 2;
  list-style-type: none;
  padding-left: 0;
}

.item {
  margin-bottom: 1 em;
}

.item-price {
  color: #999;
}

.item-image {
  height: 150px;
}

.item-add {
  display: block;
}
</style>
