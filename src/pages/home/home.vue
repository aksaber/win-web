<template>
  <div id="home">
      <Header />
      <div class="home-swiper swiper-container container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../../assets/timg1.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="../../assets/timg2.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="../../assets/timg3.jpg" />
            </div>
          </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components: { Header, Footer },
  mounted() {
      const swiper = new Swiper('.home-swiper', {
          autoplay: true,
      })
  }
}
</script>

<style lang="scss">
#home {
    background: #FCFAFA;
    .home-swiper {
        font-size: 16px;
        .swiper-slide {
            img {
                max-width: 100%;
            }
        }
    }
}
</style>
