<template>
  <section class="catalog">
    <ProductList :products="products"/>
    <BasePaginationVue v-model:page="page" :count="countProducts" :per-page="productsPerPage"/>
  </section>
</template>

<script>
import products from './data/products';
import ProductList from './components/ProductList.vue';
import BasePaginationVue from './components/BasePagination.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    BasePaginationVue
  },
  data() {
    return {
      page: 1,
      productsPerPage: 3
    };
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return products.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return products.length;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
