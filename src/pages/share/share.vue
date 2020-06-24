<template>
  <div id="share">
      <Header />
      <div class="share-category">
          <h3>博客分类</h3>
          <li>分类1</li>
          <li>分类2</li>
          <li>分类3</li>
          <li>分类4</li>
      </div>
      <div class="share-first">
          <div class="share-first-content flex">
            <!-- <img :src="data[0] ? data[0].coverImage : null" alt=""> -->
            <img src="../../assets/home-swiper.png" class="share-first-coverImage">
            <div class="share-first-title_1">
                <div>{{ data[0] ? data[0].title : null }}</div>
            </div>
            <div class="share-first-title_2">
                <p>{{ data[0] ? data[0].abstract : null }}</p>
            </div>
            <div class="share-first-title_2 flex">
                <img src="../../assets/avatar.png" style="width: 60px; height: 60px" />
                <div class="share-author">
                    <div>{{ data[0] ? data[0].author : null }}</div>
                    <span>风水大师</span>
                </div>
            </div>
          </div>
      </div>

      <div style="background: #fff">
        <div class="container row">
            <div
                class="share-item col-xs-12 col-xl-6 col-lg-12"
                v-for="(item, index) in data"
                :key="index"
                @click="gotoBlog(item)"
            >
                <div class="flex">
                    <img src="../../assets/home-swiper.png" />
                    <div class="share-item-right">
                        <p>{{ item.title }}</p>
                        <div>{{ item.abstract }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>
      </div>
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
          data: []
      }
  },
  components: { Header, Footer },
  mounted() {
      this.getData();
  },
  methods: {
      getData() {
          const url = 'http://localhost:3000/blog/list';
          fetch(url).then(response => response.json())
            .then(res => {
                this.data = res.data;
            })
      },
      gotoBlog(blog) {
          window.location = `blogInfo.html?id=${blog.id}`;
      }
  }
}
</script>

<style lang="scss">
#share {
    background: #FCFAFA;
    .share-category {
        position: fixed;
        top: 50px;
        left: 15px;
    }
    .share-first {
        margin: 0 auto;
        padding: 64px 0;
        @media only screen and (min-width: 768px) {
            width: 800px;
        }
        @media only screen and (min-width: 1200px) {
            width: 1140px;
        }
        >.flex {
            @media (max-width: 992px) {
                text-align: center;
                display: block!important;
            }
        }
        .share-first-content {
            position: relative;
            align-items: flex-end;
            flex-direction: column;
            min-height: 600px;
            .share-first-coverImage {
                position: absolute;
                top: 0;
                left: 0;
                max-width: 540px;
                @media (max-width: 992px) {
                    position: unset!important;
                }
                @media (max-width: 600px) {
                    width: 400px;
                }
                @media (max-width: 500px) {
                    width: 300px;
                }
            }
            .share-first-title_1 {
                margin-top: 95px;
                background: #FCFAFA;
                padding: 25px 60px;
                border-radius: 150px;
                font-size: 25px;
                z-index: 1;
                flex: 0 0 75%;
                max-width: 75%;
                box-sizing: border-box;
                width: 100%;
                @media (max-width: 992px) {
                    margin-top: 0!important;
                    max-width: 100%;
                }
                div {
                    cursor: pointer;
                    transition: transform 0.5s;
                    font-size: 60px;
                    font-weight: bold;
                    &:hover {
                        transform: scale(1.01);
                    }
                }
            }
            .share-first-title_2 {
                z-index: 1;
                flex: 0 0 50%;
                max-width: 50%;
                box-sizing: border-box;
                width: 100%;
                font-size: 18px;
                @media (max-width: 992px) {
                    max-width: 100%;
                    display: block!important;
                }
                p {
                    color: #404040;
                    font-size: 22px;
                }
                img {
                    margin-right: 10px;
                }
                .share-author {
                    div {
                        color: #212529;
                        font-size: 18px;
                        margin-top: 5px;
                        font-weight: bold;
                    }
                    span {
                        color: #818181;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .container {
        margin: 0 auto;
        padding-top: 10px;
        padding-bottom: 10px;
        .share-item {
            cursor: pointer;
            padding-left: 10px;
            padding-right: 10px;
            box-sizing: border-box;
            transition: all .5s;
            // @media (max-width: 768px) {
            //     flex: 0 0 55%!important;
            //     max-width: 55%!important;
            // }
            @media (max-width: 1200px) {
                margin: 0 auto;
                flex: 0 0 55%!important;
                max-width: 55%!important;
            }
            &:hover {
                transform: scale(1.1);
            }
            >.flex {
                margin: 30px 0;
                @media (max-width: 768px) {
                    display: block!important;
                    text-align: center;
                    justify-content: center;
                }
                @media (min-width: 768px) {
                    
                }
            }
            img {
                max-width: 160px;
            }
            .share-item-right {
                margin-left: 10px;
                p {
                    font-size: 26px;
                    font-weight: bold;
                    margin-bottom: 8px;
                }
                div {
                    font-size: 16px;
                    color: #404040;
                }
            }
        }
        .md-center {
            @media (max-width: 1200px) {
                text-align: center;
            }
        }
    }
}
</style>
