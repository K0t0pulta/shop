<template>
    <ul class="catalog__list">
        <ProductItem  :products="products"></ProductItem>
    </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  props: ['products'],
  components: {
    ProductItem
  }
};
</script>
