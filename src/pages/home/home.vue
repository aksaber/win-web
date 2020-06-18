<template>
    <div id="home" >
        <Header />
        <div class="home-swiper swiper-container" v-show="swiperShow">
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
        <div class="home-paipan" v-html="paipan"></div>
        <!-- 标题 -->
        <section class="flex" style="padding: 0 5%" data-aos="zoom-in">
            <img src="../../assets/shedo2.png" class="img-banner" />
            <div style="font-size: 56px; font-weight: bold; flex: 0 0 30%; max-width: 30%">
                <p style="color: #fff">Make your shedule work for your life</p>
            </div>
            <div>
                <img src="../../assets/h1-1.png" class="img-banner2" />
            </div>
        </section>
        <!-- 标题 End -->
        <!-- 上贰 -->
        <section style="font-size: 16px; text-align: center; width: 1140px; margin: 0 auto">
            <div>With xipper landing page you can easily present your 
digital projects in realistic environments. upload your design and edit the final image composition as you like</div>
            <div class="flex">
                <div class="col-4">
                    <div class="top1-item">
                        <p style="color: #30323d; font-size: 24px">Shedule Data</p>
                        <p style="color: #878991">Hit your coverage goals without boxing people into pre-defined work that makes fine-tuning easy.</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="top1-item">
                        <p style="color: #30323d; font-size: 24px">Shedule Data</p>
                        <p style="color: #878991">Hit your coverage goals without boxing people into pre-defined work that makes fine-tuning easy.</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="top1-item">
                        <p style="color: #30323d; font-size: 24px">Shedule Data</p>
                        <p style="color: #878991">Hit your coverage goals without boxing people into pre-defined work that makes fine-tuning easy.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- 上贰 End -->
        <!-- 上叁 -->
        <section></section>
        <!-- 上叁 End -->
        <Footer />
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
import 'aos/dist/aos.css'
import AOS from 'aos/dist/aos.js'
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
            swiperShow: false
        }
    },
    components: { Header, Footer },
    mounted() {
        // 初始化aos插件
        AOS.init();
        const swiper = new Swiper('.home-swiper', {
            autoplay: true,
        })
        // this.qimenShow();
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
    background-image: url('../../assets/h1-bg1.png');
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
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
    .img-banner {
        width: 220px;
        height: 220px;
        animation: scale-up-two 5s infinite linear;
    }
    .img-banner2 {
        animation: alltuchtopdown 1.5s ease-in-out 0s infinite alternate;
        animation-duration: 3s;
    }
    .top1-item {
        transition: .5s;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 1px;
        padding-bottom: 1px;
        background-color: #fff;
        &:hover {
            box-shadow: 26px 24px 49px -22px rgba(158, 158, 158, 0.55)
        }
    }
}
</style>
