<template>
  <li class="catalog__item" >
    <a class="catalog__pic" href="#">
      <img :src="product.img" :alt="product.title">
    </a>
    <h3 class="catalog__title">
    <a href="#">
      {{product.title}}
    </a>
    </h3>
    <span class="catalog__price">
      {{product.price}} ₽
    </span>
    <ColorPicker :product="product"/>
  </li>
</template>

<script>
import ColorPicker from './ColorPicker.vue';

export default {
  props: ['product'],
  components: {
    ColorPicker
  }
};
</script>
