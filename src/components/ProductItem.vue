<template>
  <li class="catalog__item" >
    <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}">
      <img :src="product.img" :alt="product.title">
    </router-link>
    <h3 class="catalog__title">
    <a href="#">
      {{product.title}}
    </a>
    </h3>
    <span class="catalog__price">
        {{numberFormat}}  ₽
    </span>
    <ColorPicker :product="product"/>
  </li>
</template>

<script>
import ColorPicker from '@/components/ColorPicker.vue';

export default {
  props: ['product'],
  components: {
    ColorPicker
  },
  computed: {
    numberFormat() {
      return Intl.NumberFormat().format(this.product.price);
    }
  }
};
</script>
