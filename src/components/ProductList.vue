<template>
  <ul class="catalog__list">
      <ProductItem v-for="(product, index) in products" :key="product.id" :index="index" :product="product"></ProductItem>
  </ul>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'ProductList',
  props: ['products'],
  components: {
    ProductItem
  }
};
</script>
