<template>
    <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="index.html">
            Каталог
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="cart.html">
            Корзина
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Оформление заказа
          </a>
        </li>
      </ul>
      <base-preloader v-if="dataLoading"/>
      <div v-else>
        <h1 class="content__title">
          Заказ оформлен <span>№ {{this.$store.state.orderInfo.id}}</span>
        </h1>
        <section class="cart">
          <form class="cart__form form" action="#" method="POST">
            <div class="cart__field">
              <p class="cart__message">
                Благодарим за&nbsp;выбор нашего магазина. На&nbsp;Вашу почту придет письмо с&nbsp;деталями заказа.
                Наши менеджеры свяжутся с&nbsp;Вами в&nbsp;течение часа для уточнения деталей доставки.
              </p>
              <ul class="dictionary">
                <li class="dictionary__item">
                  <span class="dictionary__key">
                    Получатель
                  </span>
                  <span class="dictionary__value">
                    {{this.$store.state.orderInfo.name}}
                  </span>
                </li>
                <li class="dictionary__item">
                  <span class="dictionary__key">
                    Адрес доставки
                  </span>
                  <span class="dictionary__value">
                    {{this.$store.state.orderInfo.address}}
                  </span>
                </li>
                <li class="dictionary__item">
                  <span class="dictionary__key">
                    Телефон
                  </span>
                  <span class="dictionary__value">
                    {{this.$store.state.orderInfo.phone}}
                  </span>
                </li>
                <li class="dictionary__item">
                  <span class="dictionary__key">
                    Email
                  </span>
                  <span class="dictionary__value">
                    {{this.$store.state.orderInfo.email}}
                  </span>
                </li>
                <li class="dictionary__item">
                  <span class="dictionary__key">
                    Способ оплаты
                  </span>
                  <span class="dictionary__value">
                    картой при получении
                  </span>
                </li>
              </ul>
            </div>
            <div class="cart__block">
              <ul class="cart__orders">
                <li class="cart__order">
                  <h3>Смартфон Xiaomi Redmi Note 7 Pro 6/128GB</h3>
                  <b>18 990 ₽</b>
                  <span>Артикул: 150030</span>
                </li>
                <li class="cart__order">
                  <h3>Гироскутер Razor Hovertrax 2.0ii</h3>
                  <b>4 990 ₽</b>
                  <span>Артикул: 150030</span>
                </li>
                <li class="cart__order">
                  <h3>Электрический дрифт-карт Razor Lil’ Crazy</h3>
                  <b>8 990 ₽</b>
                  <span>Артикул: 150030</span>
                </li>
              </ul>
              <div class="cart__total">
                <p>Доставка: <b>500 ₽</b></p>
                <p>Итого: <b>3</b> товара на сумму <b>37 970 ₽</b></p>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  </main>

</template>

<script>
import BasePreloader from '@/components/BasePreloader.vue';

export default {
  components: {
    BasePreloader
  },
  data() {
    return {
      dataLoading: false
    };
  },
  created() {
    if (this.$store.state.orderInfo && this.$store.state.orderInfo.od === this.$route.params.id) return;
    this.dataLoading = true;
  },
  mounted() {
    this.dataLoadingTimer = setTimeout(() => {
      this.$store.dispatch('loadOrderInfo', this.$route.params.id);
      this.dataLoading = false;
    }, 2500);
  }
};
</script>
