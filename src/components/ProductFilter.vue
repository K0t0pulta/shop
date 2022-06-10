<template>
      <aside class="filter">
        <h2 class="filter__title">Фильтры</h2>

        <form class="filter__form form" action="#" @submit.prevent="submit">
          <fieldset class="form__block">
            <legend class="form__legend">Цена</legend>
            <label class="form__label form__label--price" for="min-price">
              <input class="form__input" type="number" name="min-price" id="min-price" v-model="priceStart">
              <span class="form__value">От</span>
            </label>
            <label class="form__label form__label--price" for="max-price">
              <input class="form__input" type="number" name="max-price" id="max-price" v-model="priceEnd">
              <span class="form__value">До</span>
            </label>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Категория</legend>
            <label class="form__label form__label--select" for="select-cat">
              <select class="form__select" name="category" id="select-cat" v-model="catId">
                <option value="0">Все категории</option>
                <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{cat.title}}</option>
              </select>
            </label>
          </fieldset>

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

          <button class="filter__submit button button--primery" type="submit">
            Применить
          </button>
          <button class="filter__reset button button--second" type="button" @click.prevent="reset">
            Сбросить
          </button>
        </form>
      </aside>
</template>

<script>
import axios from 'axios';
import API_BASE_URL from '@/config';

export default {
  props: {
    priceFrom: Number,
    priceTo: Number,
    categoryId: Number
  },
  emits: ['update:priceFrom', 'update:priceTo', 'update:categoryId'],
  data() {
    return {
      priceStart: 0,
      priceEnd: 0,
      catId: 0,
      categoriesData: ''
    };
  },
  computed: {
    categories() {
      return this.categoriesData ? this.categoriesData.items : [];
    }
  },
  watch: {
    priceFrom(value) {
      this.priceStart = value;
    },
    priceTo(value) {
      this.priceEnd = value;
    },
    categoryId(value) {
      this.catId = value;
    }
  },
  methods: {
    submit() {
      this.$emit('update:priceFrom', this.priceStart);
      this.$emit('update:priceTo', this.priceEnd);
      this.$emit('update:categoryId', this.catId);
    },
    reset() {
      this.$emit('update:priceFrom', 0);
      this.$emit('update:priceTo', 0);
      this.$emit('update:categoryId', 0);
    },
    loadCategories() {
      axios.get(`${API_BASE_URL}/api/productCategories`)
        .then((response) => {
          this.categoriesData = response.data;
        });
    }
  },
  created() {
    this.loadCategories();
  }
};
</script>
