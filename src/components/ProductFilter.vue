<template>
      <aside class="filter">
        <h2 class="filter__title">Фильтры</h2>

        <form class="filter__form form" action="#" method="get">
          <fieldset class="form__block">
            <legend class="form__legend">Цена</legend>
            <label class="form__label form__label--price" for="min-price">
              <input class="form__input" type="text" name="min-price" id="min-price">
              <span class="form__value">От</span>
            </label>
            <label class="form__label form__label--price" for="max-price">
              <input class="form__input" type="text" name="max-price" id="max-price">
              <span class="form__value">До</span>
            </label>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Категория</legend>
            <label class="form__label form__label--select" for="select-cat">
              <select class="form__select" type="text" name="category" id="select-cat">
                <option value="0">Все категории</option>
                <option></option>
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
          <button class="filter__reset button button--second" type="button">
            Сбросить
          </button>
        </form>
      </aside>
</template>

<script>
import categories from '../data/categories';

export default {
  props: ['priceFrom', 'priceTo', 'categoryID'],
  data() {
    return categories;
  }
};
</script>
