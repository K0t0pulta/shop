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

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info">
        3 товара
      </span>
    </div>
    <section class="cart">
      <form class="cart__form form" action="#" method="POST" @submit.prevent="order">
        <div class="cart__field">
          <div class="cart__data">
            <base-form-text :error="formError.name" id="orderFormItem-name" placeholder="Введите ваше полное имя"
            v-model="formData.name" title="ФИО" type="text"/>
            <base-form-text :error="formError.address" id="orderFormItem-address" placeholder="Введите ваш адрес"
            v-model="formData.address" title="Адрес" type="text"/>
            <base-form-text :error="formError.phone" id="orderFormItem-phoneNumber" placeholder="Введите ваш номер телефона"
            v-model="formData.phone" title="Номер телефона" type="tel"/>
            <base-form-text :error="formError.email" id="orderFormItem-email" placeholder="Введите вашу эл. почту"
            v-model="formData.email" title="Электронная почта" type="email"/>
            <base-form-textarea :error="formError.comment" id="orderFormItem-comment" placeholder="Сообщите ваши пожелания"
            v-model="formData.comment" title="Комментарии к заказу"/>

          </div>

          <div class="cart__options">
            <h3 class="cart__title">Доставка</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label" for="orderFormItem-withoutDelivery">
                  <input class="options__radio sr-only" type="radio" name="delivery" value="0"
                  checked="" id="orderFormItem-withoutDelivery">
                  <span class="options__value">
                    Самовывоз <b>бесплатно</b>
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label" for="orderFormItem-courier">
                  <input class="options__radio sr-only" type="radio" name="delivery" value="500" id="orderFormItem-courier">
                  <span class="options__value">
                    Курьером <b>500 ₽</b>
                  </span>
                </label>
              </li>
            </ul>

            <h3 class="cart__title">Оплата</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label" for="orderFormItem-card">
                  <input class="options__radio sr-only" type="radio" name="pay" value="card" id="orderFormItem-card">
                  <span class="options__value">
                    Картой при получении
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label" for="orderFormItem-cash">
                  <input class="options__radio sr-only" type="radio" name="pay" value="cash" id="orderFormItem-cash">
                  <span class="options__value">
                    Наличными при получении
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div class="cart__block">
          <ul class="cart__orders">
            <order-item v-for="item in products" :key="item.id" :item="item"/>
          </ul>
          <div class="cart__total">
            <p>Доставка: <b>500 ₽</b></p>
            <p>Итого: <b>3</b> товара на сумму <b>{{priceFormat}} ₽</b></p>
          </div>

          <button class="cart__button button button--primery" type="submit">
            Оформить заказ
          </button>
        </div>
        <div class="cart__error form__error-block" v-if="formErrorMessage">
          <h4>Заявка не отправлена!</h4>
          <p>
            {{formErrorMessage}}
          </p>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import BaseFormText from '@/components/BaseFormText.vue';
import BaseFormTextarea from '@/components/BaseFormTextarea.vue';
import OrderItem from '@/components/OrderItem.vue';
import axios from 'axios';
import API_BASE_URL from '@/config';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseFormText,
    BaseFormTextarea,
    OrderItem
  },
  data() {
    return {
      formData: {},
      formError: {},
      formErrorMessage: ''
    };
  },
  computed: {
    ...mapGetters({
      products: 'cartDetailsProducts',
      totalPrice: 'cartTotalPrice'
    }),
    priceFormat() {
      return Intl.NumberFormat().format(this.totalPrice);
    }
  },
  methods: {
    order() {
      this.formError = {};
      this.formErrorMessage = '';
      axios.post(`${API_BASE_URL}/api/orders`, {
        ...this.formData
      }, {
        params: {
          userAccessKey: this.$store.state.userAccessKey
        }
      })
        .then((response) => {
          this.$store.commit('resetCart');
          this.$store.commit('updateOrderInfo', response.data);
          this.$router.push({ name: 'orderInfo', params: { id: response.data.id } });
        })
        .catch((e) => {
          this.formError = e.response.data.error.request;
          this.formErrorMessage = e.response.data.error.message;
        });
    }
  }
};
</script>
