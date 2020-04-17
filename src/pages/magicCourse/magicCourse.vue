<template>
  <div id="magicCourse">
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
      console.log('风水课程');
  }
}
</script>

<style>

</style>
