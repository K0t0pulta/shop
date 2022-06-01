<template>
  <li class="catalog__item" >
    <a class="catalog__pic" href="#" @click.prevent="$emit('gotoPage', 'product', {productId: product.id, categoryId: product.categoryId})">
      <img :src="product.img" :alt="product.title">
    </a>
    <h3 class="catalog__title">
    <a href="#">
      {{product.title}}
    </a>
    </h3>
    <span class="catalog__price">
       {{$filters.numberFormat(product.price)}}  ₽
    </span>
    <ColorPicker :product="product"/>
  </li>
</template>

<script>
import ColorPicker from '@/components/ColorPicker.vue';

export default {
  props: ['product'],
  emits: ['gotoPage'],
  components: {
    ColorPicker
  }
};
</script>
