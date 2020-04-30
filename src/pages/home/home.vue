<template>
  <div id="home">
      <Header />
      <!-- <div class="home-swiper swiper-container">
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
      </div> -->
      <div class="home-paipan" v-html="paipan"></div>
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
  data() {
      return {
          gua: {
              years: '2020',
              months: '04',
              days: '23',
              hours: '14',
              mins: '3',
              miao: '13',
              R1: 'V1',
              T1: 120
          },
          paipan: '<b>',
      }
  },
  components: { Header, Footer },
  mounted() {
      const swiper = new Swiper('.home-swiper', {
          autoplay: true,
      })
      this.qimenShow();
  },
  methods: {
      qimenShow() {
          const url = 'http://localhost:3000/banner/paipan';
          const options = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(this.gua)
          }
          fetch(url, options).then(response => response.json())
            .then(res => {
                this.paipan += res.data;
          }).catch(err => {
              console.log(err);
          })
      }
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
    .home-paipan {
        font-family: '宋体';
        font-size: 16px;
        // white-space: pre;
    }
}
</style>
