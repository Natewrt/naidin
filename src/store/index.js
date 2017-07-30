import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {},
    items: [
      { id: 7, name: 'Harry7', price: 25 },
      { id: 6, name: 'Harry6', price: 25 },
      { id: 5, name: 'Harry5', price: 25 },
      { id: 4, name: 'Harry4', price: 25 },
      { id: 3, name: 'Harry3', price: 15 },
      { id: 2, name: 'Harry2', price: 15 },
      { id: 1, name: 'Harry1', price: 10 }
    ]
  },

  getters: {

    cartItems (state) {
      return Object.keys(state.cart).map(k => state.cart[k])
    },

    cartTotal (state, getters) {
      if (!getters.cartItems.length) {
        return 0
      }
      return getters.cartItems.map(i => i.price * i.quantity).reduce((acc, val) => acc + val)
    }
  },

  mutations: {
    addItem (state, item) {
      if (state.cart[item.id]) {
        state.cart[item.id].quantity++
      } else {
        Vue.set(state.cart, item.id, {
          id: item.id,
          quantity: 1,
          price: item.price,
          name: item.name
        })
      }
    }
  }
})
