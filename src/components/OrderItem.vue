<template>
    <li class="cart__order">
        <h3>{{ item.product.title }}</h3>
        <b> {{ item.product.price }} ₽</b>
        <span>Артикул: {{ item.productId }}</span>
    </li>
</template>

<script>
export default {
  props: ['item'],
  computed: {
    priceFormat() {
      return Intl.NumberFormat().format(this.item.product.price);
    }
  }
};
</script>
