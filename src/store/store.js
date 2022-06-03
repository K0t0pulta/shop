// import { createApp } from 'vue';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cartProducts: [
        {
          productId: 1,
          amount: 2
        }
      ]
    };
  }
});

export default store;
