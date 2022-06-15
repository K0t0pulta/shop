<template>
  <HeaderBlock/>
  <router-view :key="$route.fullPath"></router-view>
  <FooterBlock/>
  <div id="teleport-target"></div>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';
import { mapActions, mapMutations } from 'vuex';

export default {
  components: {
    HeaderBlock,
    FooterBlock
  },
  created() {
    const userAccessKey = localStorage.getItem('userAccessKey');
    if (userAccessKey) {
      this.updateUserAccessKey(userAccessKey);
    }
    this.loadCart();
  },
  methods: {
    ...mapActions(['loadCart']),
    ...mapMutations(['updateUserAccessKey'])
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
