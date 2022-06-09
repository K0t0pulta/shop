<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        {{products.length}} товара
      </span>
    </div>
    <div class="content__catalog">
      <ProductFilter v-model:priceFrom="filterPriceFrom" v-model:priceTo="filterPriceTo" v-model:categoryId="filterCategoryID"/>
        <section class="catalog">
        <div v-if="productsLoading">Загрузка товаров...</div>
        <div v-if="loadingFailed">Произошла ошибка <button @click.prevent="loadProducts">Try again</button></div>
          <ProductList :products="products"/>
          <BasePaginationVue v-model:page="page" :count="countProducts" :per-page="productsPerPage"/>
        </section>
    </div>
  </main>
  </template>

<script>
import ProductList from '@/components/ProductList.vue';
import BasePaginationVue from '@/components/BasePagination.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import axios from 'axios';
import API_BASE_URL from '@/config';

export default {
  name: 'MainPage',
  components: {
    ProductList,
    ProductFilter,
    BasePaginationVue
  },
  data() {
    return {
      page: 1,
      productsPerPage: 6,
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryID: 0,
      productsData: '',
      productsLoading: true,
      loadingFailed: true
    };
  },
  mounted() {
    this.loadProducts();
  },
  watch: {
    page() {
      this.loadProducts();
    },
    filterPriceFrom() {
      this.loadProducts();
    },
    filterPriceTo() {
      this.loadProducts();
    },
    filterCategoryID() {
      this.loadProducts();
    }
  },
  computed: {
    products() {
      return this.productsData
        ? this.productsData.items.map((product) => ({
          ...product,
          img: product.image.file.url
        }))
        : [];
    },
    countProducts() {
      return this.productsData ? this.productsData.pagination.total : 0;
    }
  },
  methods: {
    loadProducts() {
      this.productsLoading = true;
      this.loadingFailed = false;
      clearTimeout(this.loadProductsTimer);
      this.loadProductsTimer = setTimeout(() => {
        axios.get(
          `${API_BASE_URL}/api/products`,
          {
            params: {
              page: this.page,
              limit: this.productsPerPage,
              categoryId: this.filterCategoryID,
              minPrice: this.filterPriceFrom,
              maxPrice: this.filterPriceTo
            }
          }
        )
          .then((response) => { this.productsData = response.data; })
          .catch(() => { this.loadingFailed = true; })
          .then(() => { this.productsLoading = false; });
      }, 2000);
    }
  }
};
</script>
