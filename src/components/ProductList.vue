<template>
  <ul class="catalog__list">
      <ProductItem v-for="(product, index) in products" :key="product.id" :index="index" :product="product"
      @goto-page="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)"></ProductItem>
  </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  emits: ['gotoPage'],
  props: ['products'],
  components: {
    ProductItem
  }
};
</script>
