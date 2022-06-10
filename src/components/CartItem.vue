<template>
            <li class="cart__item product">
              <div class="product__pic">
                <img :src="item.product.image.file.url" width="120" height="120" :alt="item.product.title">
              </div>
              <h3 class="product__title">
                {{item.product.title}}
              </h3>
              <span class="product__code">
                Артикул: {{item.productId}}
              </span>
              <div class="product__counter form__counter">
                <button type="button" aria-label="Убрать один товар" @click.prevent="amount > 1 ? amount -= 1 : amount = amount">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <label for="productsForPurchase">
                <input type="text" name="count" id="productsForPurchase" v-model="amount">
                </label>

                <button type="button" aria-label="Добавить один товар" @click.prevent="amount += 1">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <b class="product__price">
                 {{priceFormat}} ₽
              </b>

              <button class="product__del button-del" type="button" aria-label="Удалить товар из корзины"
              @click.prevent="deleteProduct(item.productId)">
                <svg width="20" height="20" fill="currentColor">
                  <use xlink:href="#icon-close"></use>
                </svg>
              </button>
            </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['item'],
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        if (value > 1) {
          this.updateCartProductAmount({ productId: this.item.productId, amount: value });
        }
      }
    },
    priceFormat() {
      return Intl.NumberFormat().format(this.item.product.price * this.item.amount);
    }
  },
  methods: {
    ...mapActions(['updateCartProductAmount', 'deleteProduct'])
  }
};
</script>
