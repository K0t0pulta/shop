<template>
    <header class="header">
        <div class="header__wrapper container">
            <span class="header__info">Каталог</span>
            <router-link class="header__logo" :to="{name: 'home'}">
                <img :src="`${publicPath}img/svg/logo-tech.svg`" alt="Логотип интернет магазина Технозавррр" width="190" height="33">
            </router-link>
            <a class="header__tel" href="tel:8 800 600 90 09">
                8 800 600 90 09
            </a>
            <router-link class="header__cart" :to="{name: 'cart'}" aria-label="Корзина с товарами">
                <svg width="30" height="21" fill="currentColor">
                    <use xlink:href="#icon-cart"></use>
                </svg>
                <span class="header__count" aria-label="Количество товаров">{{$store.state.cartProducts.length}}</span>
            </router-link>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>
