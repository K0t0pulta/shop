<template>
  <ul class="catalog__list">
      <ProductItems :products="products"></ProductItems>
  </ul>
</template>

<script>
import ProductItems from '@/components/ProductItems.vue';

export default {
  name: 'ProductList',
  props: ['products'],
  components: {
    ProductItems
  }
};
</script>
