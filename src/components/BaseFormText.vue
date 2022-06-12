<template>
  <label class="form__label" :for="id">
    <input class="form__input" :type="type" :placeholder="placeholder"
    :id="id" v-model="dataValue">
    <base-form-field :title="title" :error="error"/>
  </label>
</template>

<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
  props: ['type'],
  mixins: [formFieldMixin]
};
</script>
