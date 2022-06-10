// import { createApp } from 'vue';
import { createStore } from 'vuex';
import axios from 'axios';
import API_BASE_URL from '@/config';

const store = createStore({
  state() {
    return {
      cartProducts: [],
      userAccessKey: '',
      cartProductsData: []
    };
  },
  mutations: {
    updateAmount(state, { productId, amount }) {
      const product = state.cartProducts.find((item) => item.productId === productId);
      if (product) {
        product.amount = amount;
      }
    },
    updateUserAccessKey(state, accessKey) {
      state.userAccessKey = accessKey;
    },
    updateCartProductsData(state, productsData) {
      state.cartProductsData = productsData;
    },
    syncCartProducts(state) {
      state.cartProducts = state.cartProductsData.map((item) => ({
        productId: item.product.id,
        amount: item.quantity
      }));
    }
  },
  getters: {
    cartDetailsProducts(state) {
      return state.cartProducts.map((item) => {
        const { product } = state.cartProductsData.find((p) => p.product.id === item.productId);
        return {
          ...item,
          product
        };
      });
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailsProducts.reduce((acc, item) => (item.product.price * item.amount) + acc, 0);
    }
  },
  actions: {
    async loadCart(context) {
      const response = await axios.get(`${API_BASE_URL}/api/baskets`, {
        params: {
          userAccessKey: context.state.userAccessKey
        }
      });
      if (!context.state.userAccessKey) {
        localStorage.setItem('userAccessKey', response.data.user.accessKey);
        context.commit('updateUserAccessKey', response.data.user.accessKey);
      }
      context.commit('updateCartProductsData', response.data.items);
      context.commit('syncCartProducts');
    },
    async addProductToCart(context, { productId, amount }) {
      const response = await axios.post(`${API_BASE_URL}/api/baskets/products`, {
        productId,
        quantity: amount
      }, {
        params: {
          userAccessKey: context.state.userAccessKey
        }
      });
      context.commit('updateCartProductsData', response.data.items);
      context.commit('syncCartProducts');
    },
    async updateCartProductAmount(context, { productId, amount }) {
      context.commit('updateAmount', { productId, amount });
      try {
        const response = await axios.put(`${API_BASE_URL}/api/baskets/products`, {
          productId,
          quantity: amount
        }, {
          params: {
            userAccessKey: context.state.userAccessKey
          }
        });
        context.commit('updateCartProductsData', response.data.items);
      } catch {
        context.commit('syncCartProducts');
      }
    },
    async deleteCartProduct(context, productId) {
      const response = await axios.delete(`${API_BASE_URL}/api/baskets/products`, {
        productId
      }, {
        params: {
          userAccessKey: context.state.userAccessKey
        }
      });
      context.commit('updateCartProductsData', response.data.items);
      context.commit('syncCartProducts');
    }
  }
});

export default store;
