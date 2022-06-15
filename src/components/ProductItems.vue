<template>
  <li class="catalog__item" v-bind="$attrs" v-for="product in productsNormalize" :key="product.id">
    <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}">
      <img :src="product.img" :alt="product.title">
    </router-link>
    <h3 class="catalog__title">
    <a href="#">
      {{product.title}}
    </a>
    </h3>
    <span class="catalog__price">
        {{product.priceFormat}}  ₽
    </span>
    <ColorPicker :product="product"/>
  </li>
</template>

<script>
import ColorPicker from '@/components/ColorPicker.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['products'],
  components: {
    ColorPicker
  },
  computed: {
    productsNormalize() {
      return this.products.map((product) => ({
        ...product,
        priceFormat: Intl.NumberFormat().format(product.price)
      }));
    }
  }
});
</script>
