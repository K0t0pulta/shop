<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link :to="{name: 'home'}" class="breadcrumbs__link">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Корзина
          </a>
        </li>
      </ul>

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info" v-if="$store.state.cartProducts.length">
        {{$store.state.cartProducts.length}} товара
      </span>
    </div>
    <div v-if="!$store.state.cartProducts.length"> Вы ещё ничего не добавили в корзину. Ждём ваших покупок.</div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <CartItem v-for="item in products" :key="item.productId" :item='item'/>
          </ul>
        </div>

        <div class="cart__block" v-if="$store.state.cartProducts.length">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">
            Итого: <span>{{priceFormat}} ₽</span>
          </p>

          <button class="cart__button button button--primery" type="submit">
            Оформить заказ
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from '@/components/CartItem.vue';

export default {
  components: {
    CartItem
  },
  computed: {
    ...mapGetters({
      products: 'cartDetailsProducts',
      totalPrice: 'cartTotalPrice'
    }),
    priceFormat() {
      return Intl.NumberFormat().format(this.totalPrice);
    }
  }
};
</script>
