<template>
  <div id="home">
      <Header />
      <div class="home-swiper">
          <div class="home-swiper-content flex">
            <img src="../../assets/home-swiper.png" alt="">
            <div class="home-swiper-title_1">
                <h1>To theory equation, more have the or to was the</h1>
            </div>
            <div class="home-swiper-title_2">
                <p>Herself of that similar live good up which is are to for French endeavours, screen.</p>
            </div>
          </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components: { Header, Footer },
  mounted() {
      console.log('首页');
  }
}
</script>

<style lang="scss">
#home {
    background: #FCFAFA;
    .home-swiper {
        margin: 0 auto;
        padding: 4rem 0;
        @media only screen and (min-width: 768px) {
            width: 800px;
        }
        @media only screen and (min-width: 1200px) {
            width: 1140px;
        }
        .home-swiper-content {
            position: relative;
            align-items: flex-end;
            flex-direction: column;
            min-height: 700px;
            img {
                position: absolute;
                top: 0;
                left: 0;
            }
            .home-swiper-title_1 {
                background: #FCFAFA;
                padding: 25px 60px;
                border-radius: 150px;
                font-size: 1.6rem;
                z-index: 1;
                flex: 0 0 75%;
                max-width: 75%;
                box-sizing: border-box;
                h1 {
                    cursor: pointer;
                    transition: transform 0.5s;
                    &:hover {
                        transform: scale(1.01);
                    }
                }
            }
            .home-swiper-title_2 {
                z-index: 1;
                flex: 0 0 50%;
                max-width: 50%;
                box-sizing: border-box
            }
        }
    }
}
</style>
