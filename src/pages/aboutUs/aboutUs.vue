<template>
  <div id="aboutUs">
      <Header />
      <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: { Header, Footer },
  mounted() {
      console.log('联系我们');
  }
}
</script>

<style>

</style>
