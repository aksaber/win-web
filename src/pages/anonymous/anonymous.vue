<template>
  <div id="anonymous">
      <Header />
      <div>anonymous</div>
      <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Anonymous',
  components: { Header, Footer },
  mounted() {
      console.log('风水课程');
  }
}
</script>

<style>

</style>
