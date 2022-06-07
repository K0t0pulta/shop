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
      productsPerPage: 3,
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryID: 0,
      productsData: ''
    };
  },
  mounted() {
    this.loadProducts();
  },
  watch: {
    page() {
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
      axios.get(
        'https://vue-study.skillbox.cc/api/products',
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
        .then((response) => {
          (this.productsData = response.data);
        });
    }
  }
};
</script>
