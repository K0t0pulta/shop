<template>
  <div v-if="productLoading"> Данные о продукте загружаются </div>
  <div v-else-if="!productData"> Не удалось загрузить товар </div>
  <div v-if="loadingFailed"> Ошибка загрузки </div>
  <div v-if="productData">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link :to="{name: 'home'}" class="breadcrumbs__link">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link :to="{name: 'home'}" class="breadcrumbs__link" >
            {{category.title}}
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            {{product.title}}
          </a>
        </li>
      </ul>
    </div>
    <section class="item">
      <div class="item__pics pics">
        <div class="pics__wrapper">
          <img width="570" height="570" :src="product.image.file.url" :alt="product.title">
        </div>
      </div>
      <div class="item__info">
        <span class="item__code">Артикул: {{product.id}}</span>
        <h2 class="item__title">
          {{product.title}}
        </h2>
        <div class="item__form">
          <form class="form" action="#" @submit.once.prevent="addToCart">
            <b class="item__price">
              {{numberFormat}} ₽
            </b>
          <fieldset class="form__block">
            <legend class="form__legend">Цвет</legend>
            <ul class="colors">
              <li class="colors__item">
                <label class="colors__label" for="color#73B6EA">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#73B6EA" checked="" id="color#73B6EA">
                  <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color#FFBE15">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#FFBE15" id="color#FFBE15">
                  <span class="colors__value" style="background-color: #FFBE15;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color#939393">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#939393" id="color#939393">
                  <span class="colors__value" style="background-color: #939393;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color#8BE000">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#8BE000" id="color#8BE000">
                  <span class="colors__value" style="background-color: #8BE000;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color#FF6B00">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#FF6B00" id="color#FF6B00">
                  <span class="colors__value" style="background-color: #FF6B00;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color#FFF">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#FFF" id="color#FFF">
                  <span class="colors__value" style="background-color: #FFF;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color#000">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#000" id="color#000">
                  <span class="colors__value" style="background-color: #000;">
                </span></label>
              </li>
            </ul>
          </fieldset>
          <fieldset class="form__block">
            <legend class="form__legend">Объемб в ГБ</legend>
            <ul class="check-list">
              <li class="check-list__item">
                <label class="check-list__label" for="memory8">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="8" checked="" id="memory8">
                  <span class="check-list__desc">
                    8
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="memory16">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="16" id="memory16">
                  <span class="check-list__desc">
                    16
                    <span>(461)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="memory32">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="32" id="memory32">
                  <span class="check-list__desc">
                    32
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="memory64">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="64" id="memory64">
                  <span class="check-list__desc">
                    64
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="memory128">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="128" id="memory128">
                  <span class="check-list__desc">
                    128
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="memory264">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="264" id="memory">
                  <span class="check-list__desc">
                    264
                    <span>(313)</span>
                  </span>
                </label>
              </li>
            </ul>
          </fieldset>
            <div class="item__row">
              <div class="form__counter">
                <button type="button" aria-label="Убрать один товар" @click.prevent="decreaseAmount">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>
                <label for="productsForPurchase">
                <input type="text" name="count" id="productsForPurchase" v-model.number="productAmount">
                </label>

                <button type="button" aria-label="Добавить один товар" @click.prevent="increaseAmount">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>
              <button class="button button--primery" type="submit" :disabled="productAddSending">
                В корзину
              </button>

            <div v-show="productAdded">Товар успешно добавлен в корзину</div>
            <div v-show="productAddSending">Добавляем товар в корзину...</div>
            </div>
          </form>
        </div>
      </div>

      <div class="item__desc">
        <ul class="tabs">
          <li class="tabs__item">
            <a class="tabs__link tabs__link--current">
              Описание
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Характеристики
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Гарантия
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Оплата и доставка
            </a>
          </li>
        </ul>

        <div class="item__content">
          <p>
            Навигация GPS, ГЛОНАСС, BEIDOU Galileo и QZSS<br>
            Синхронизация со смартфоном<br>
            Связь по Bluetooth Smart, ANT+ и Wi-Fi<br>
            Поддержка сторонних приложений<br>
          </p>
          <a href="#">
            Все характеристики
          </a>
          <h3>Что это?</h3>
          <p>
            Wahoo ELEMNT BOLT GPS – это велокомпьютер, который позволяет оптимизировать свои велотренировки,
            сделав их максимально эффективными.
            Wahoo ELEMNT BOLT GPS синхронизируется с датчиками по ANT+, объединяя полученную с них информацию.
            Данные отображаются на дисплее, а также сохраняются на смартфоне.
            При этом на мобильное устройство можно установить как фирменное приложение,
            так и различные приложения сторонних разработчиков. Велокомпьютер точно отслеживает местоположение,
            принимая сигнал с целого комплекса спутников.
            Эта информация позволяет смотреть уже преодоленные маршруты и планировать новые велопрогулки.
          </p>
          <h3>Дизайн</h3>
          <p>
            Велокомпьютер Wahoo ELEMNT BOLT очень компактный. Размеры устройства составляют всего 74,6 x 47,3 x 22,1 мм.
            что не превышает габариты смартфона.
            Корпус гаджета выполнен из черного пластика. На обращенной к пользователю стороне расположен дисплей диагональю 56 мм.
            На дисплей выводятся координаты и скорость,
            а также полученная со смартфона и синхронизированных датчиков информация: интенсивность,
            скорость вращения педалей, пульс и т.д.
            (датчики не входят в комплект поставки).
            Корпус велокомпьютера имеет степень защиты от влаги IPX7.
            Это означает, что устройство не боится пыли, а также выдерживает кратковременное
            (до 30 минут) погружение в воду на глубину не более 1 метра.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import API_BASE_URL from '@/config';
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: 'ProductQuickView',
  props: {
    productId: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      productAmount: 1,
      productData: '',
      productLoading: true,
      loadingFailed: false,
      productAdded: false,
      productAddSending: false,
      isShowAddedMessage: false
    };
  },
  computed: {
    product() {
      return this.productData;
    },
    category() {
      return this.productData.category;
    },
    numberFormat() {
      return Intl.NumberFormat().format(this.product.price);
    }
  },
  methods: {
    ...mapActions(['addProductToCart']),
    decreaseAmount() {
      if (this.productAmount > 1) {
        this.productAmount -= 1;
      }
    },
    increaseAmount() {
      this.productAmount += 1;
    },
    addToCart() {
      this.productAdded = false;
      this.productAddSending = true;
      this.isShowAddedMessage = true;
      this.addProductToCart({ productId: this.product.id, amount: this.productAmount })
        .then(() => {
          this.productAdded = true;
          this.productAddSending = false;
        });
    },
    loadProduct() {
      this.productLoading = true;
      this.loadingFailed = false;
      axios.get(
        `${API_BASE_URL}/api/products/${this.productId}`
      )
        .then((response) => { this.productData = response.data; })
        .catch(() => { this.loadingFailed = false; })
        .then(() => { this.productLoading = false; });
    }
  },
  created() {
    this.loadProduct();
  }
};
</script>

<style scoped>
    .item {
        grid-template-columns: 1fr;
    }
</style>
