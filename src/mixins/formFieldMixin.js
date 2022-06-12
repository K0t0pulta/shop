import BaseFormField from '@/components/BaseFormField.vue';

export default {
  props: {
    title: String,
    placeholder: String,
    id: String,
    error: String,
    modelValue: String
  },
  components: {
    BaseFormField
  },
  computed: {
    dataValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  }
};
