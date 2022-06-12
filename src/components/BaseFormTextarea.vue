<template>
  <label class="form__label" :for="id">
    <textarea class="form__input form__input--area" :placeholder="placeholder"
    :id="id" v-model="dataValue"></textarea>
    <base-form-field :title="title" :error="error"/>
  </label>
</template>

<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
  mixins: [formFieldMixin]
};
</script>
