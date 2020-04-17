<template>
  <div id="share">
      <Header />
      <div v-html="data"></div>
      <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Share',
  data() {
      return {
          data: {}
      }
  },
  components: { Header, Footer },
  mounted() {
      console.log('博文分享');
      this.getData();
  },
  methods: {
      getData() {
          const url = 'http://localhost:3000/blog/get';
          fetch(url).then(response => response.json())
            .then(res => {
                this.data = res.data[2].p4;
            })
      }
  }
}
</script>

<style>

</style>
