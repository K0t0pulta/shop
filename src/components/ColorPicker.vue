<template>
    <ul class="colors colors--black">
      <li class="colors__item"
      v-for="color in colors"
      :key="color"
      >
        <label class="colors__label" :for="color + product.id">
          <input class="colors__radio sr-only" type="radio" :value="color" :id="color + product.id" v-model="picked"
          :name="'color' + product.id">
          <span class="colors__value" :style="{'background-color': color}">
          </span>
        </label>
      </li>
    </ul>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      picked: '#73B6EA',
      colors: ['#73B6EA', '#8BE000', '#222']
    };
  }
};
</script>
