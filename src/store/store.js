// import { createApp } from 'vue';
import products from '@/data/products';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cartProducts: [
      ]
    };
  },
  mutations: {
    addProductToCart(state, { productId, amount }) {
      const product = state.cartProducts.find((item) => item.productId === productId);
      if (product) {
        product.amount += amount;
      } else {
        state.cartProducts.push({
          productId,
          amount
        });
      }
    },
    updateAmount(state, { productId, amount }) {
      const product = state.cartProducts.find((item) => item.productId === productId);
      if (product) {
        product.amount = amount;
      }
    },
    deleteProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter((item) => item.productId !== productId);
    }
  },
  getters: {
    cartDetailsProducts(state) {
      return state.cartProducts.map((item) => ({
        ...item,
        product: products.find((el) => el.id === item.productId)
      }));
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailsProducts.reduce((acc, item) => (item.product.price * item.amount) + acc, 0);
    }
  }
});

export default store;
