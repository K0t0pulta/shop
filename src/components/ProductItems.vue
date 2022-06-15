<template>
  <li class="catalog__item" v-bind="$attrs" v-for="product in productsNormalize" :key="product.id">
    <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}">
      <img :src="product.img" :alt="product.title">
    </router-link>
    <h3 class="catalog__title" @click.prevent="openQuickView(product.id)" @keypress.enter="openQuickView(product.id)">
    <a href="#">
      {{product.title}}
    </a>
    </h3>
    <span class="catalog__price">
        {{product.priceFormat}}  ₽
    </span>
    <ColorPicker :product="product"/>
  </li>
  <BaseModal v-model:open="isQuickViewOpen">
    <ProductQuickView :productId="currentProductId"/>
  </BaseModal>
</template>

<script>
import ColorPicker from '@/components/ColorPicker.vue';
import { defineComponent } from 'vue';
import BaseModal from '@/components/BaseModal.vue';
import ProductQuickView from '@/components/ProductQuickView.vue';

export default defineComponent({
  props: ['products'],
  components: {
    ColorPicker,
    BaseModal,
    ProductQuickView
  },
  data() {
    return {
      currentProductId: ''
    };
  },
  computed: {
    isQuickViewOpen: {
      get() {
        return !!this.currentProductId;
      },
      set(isOpen) {
        if (!isOpen) {
          this.currentProductId = null;
        }
      }
    },
    productsNormalize() {
      return this.products.map((product) => ({
        ...product,
        priceFormat: Intl.NumberFormat().format(product.price)
      }));
    }
  },
  methods: {
    openQuickView(productId) {
      this.currentProductId = productId;
    }
  }
});
</script>
