<template>
    <ul class="colors colors--black">
      <li class="colors__item" v-for="(color, index) in colors" :key="index">
        <label class="colors__label" :for="'color' + index">
          <input class="colors__radio sr-only" type="radio" :value="color" :id="'color' + index" v-model="value" name="color">
          <span class="colors__value" :style="'background-color: ' + color + ';'">
          </span>
        </label>
      </li>
    </ul>
</template>

<script>
export default {
  props: ['colors']
};
</script>
