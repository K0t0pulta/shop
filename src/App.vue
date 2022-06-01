<template>
  <component :is="currentComponent" :page-params="currentPageParams"
  @goto-page="(pageName, pageParams) => gotoPage(pageName, pageParams)"></component>
</template>

<script>
import MainPage from '@/pages/MainPage.vue';
import ProductPage from '@/pages/ProductPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes = {
  main: 'MainPage',
  product: 'ProductPage'
};

export default {
  components: { MainPage, ProductPage, NotFoundPage },
  data() {
    return {
      currentPage: 'main',
      currentPageParams: {
        productId: '1',
        categoryId: ''
      }
    };
  },
  methods: {
    gotoPage(pageName, pageParams = {}) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams;
    }
  },
  computed: {
    currentComponent() {
      return routes[this.currentPage] || 'NotFoundPage';
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
