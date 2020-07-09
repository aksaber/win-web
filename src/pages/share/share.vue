<template>
  <div id="share">
      <Header />
      
      <div class="share-banner container flex">
          <img src="../../assets/blogPic.jpg" class="share-banner-coverImage">
          <div class="share-banner-title">
              <div>一花一世界，一叶一菩提</div>
              <p>一物一太极</p>
          </div>
      </div>

      <div style="background: #fff; padding: 80px 0">
        <div class="container row">
            <div
                class="share-item col-xs-12 col-xl-6 col-lg-12"
                v-for="(item, index) in data"
                :key="index"
                @click="gotoBlog(item)"
            >
                <div class="flex">
                    <img
                        :src="item.coverImage ? item.coverImage : require('../../assets/home-swiper.png')"
                        style="border-radius: 50%; width: 160px; height: 160px"
                    />
                    <div class="share-item-right">
                        <p :title="item.title">{{ item.title }}</p>
                        <div class="share-item-intro">{{ item.intro }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="share-more" v-show="data2.length < data.length"><span @click="showMore">more</span></div> -->
        <div class="clear"></div>
      </div>

      <div class="container" style="margin-top: 20px; font-weight: bold; font-size: 20px">博文分类</div>
      <div class="share-category">
          <li v-for="item in blogType" @click="getData(item.id)">{{ item.name }}</li>
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
          data: [],
          blogType: [],
          size: 10,  // 每页条数
          page: 1,  // 当前页数
      }
  },
  components: { Header, Footer },
  mounted() {
    const type = window.location.search ? window.location.search.split('=')[1] : null;
    if (type) {
        this.getData(type);
        // 获取博客类型
        const url = 'https://www.hibifsqm.com/blog/getBlogType';
        fetch(url).then(response => response.json())
        .then(res => {
            this.blogType = res.data;
        })
    } else {
        // 获取博客类型
        const url = 'https://www.hibifsqm.com/blog/getBlogType';
        fetch(url).then(response => response.json())
        .then(res => {
            this.blogType = res.data;
            this.getData();
        })
    }
  },
  methods: {
      getBlogType() {
          // 获取博客类型
          const url = 'https://www.hibifsqm.com/blog/getBlogType';
          fetch(url).then(response => response.json())
            .then(res => {
                this.blogType = res.data;
            })
      },
      getData(type) {
          let url = null;
          if (type) {
            url = `https://www.hibifsqm.com/blog/list?type=${type}`;
          } else {
            url = `https://www.hibifsqm.com/blog/list`;
          }
          fetch(url).then(response => response.json())
            .then(res => {
                this.data = res.data;
            })
      },
      gotoBlog(blog) {
          window.location = `infoBlog.html?id=${blog.id}`;
      },
      showMore() {
            
      }
  }
}
</script>

<style lang="scss">
#share {
    background: rgb(188, 215, 196);
    .share-banner {
        justify-content: center;
        @media (max-width: 980px) {
            display: block;
            text-align: center;
            padding-top: 110px!important;
        }
        .share-banner-coverImage {
            width: 350px;
            border-radius: 50%;
        }
        .share-banner-title {
            >div {
                font-size: 39px;
                font-weight: 700;
                transition: transform .5s;
                margin-top: 95px;
                background: #bcd7c4;
                padding: 25px 60px;
                border-radius: 150px;
                z-index: 1;
                box-sizing: border-box;
                margin-left: -80px;
                @media (max-width: 980px) {
                    margin-top: 0;
                    margin-left: 0;
                }
            }
            p {
                color: #404040;
                font-size: 25px;
            }
        }
    }
    .share-category {
        padding: 0 15px 40px 15px;
        border-radius: 3px;
        text-align: center;
        font-weight: bold;
        li {
            cursor: pointer;
            padding: 8px 15px;
            transition: all .2s;
            border-radius: 3px;
            display: inline-block;
            &:hover {
                background: #008734;
                color: #fff;
            }
        }
    }
    .container {
        margin: 0 auto;
        padding-top: 50px;
        padding-bottom: 50px;
        .share-item {
            cursor: pointer;
            padding-left: 10px;
            padding-right: 10px;
            box-sizing: border-box;
            transition: all .5s;
            display: flex;
            // @media (max-width: 768px) {
            //     flex: 0 0 55%!important;
            //     max-width: 55%!important;
            // }
            @media (max-width: 1200px) {
                margin: 0 auto;
                flex: 0 0 55%!important;
                max-width: 55%!important;
            }
            @media (max-width: 980px) {
                margin: 40px auto;
            }
            &:hover {
                transform: scale(1.1);
            }
            >.flex {
                margin: 30px 0;
                align-items: center;
                @media (max-width: 980px) {
                    display: block!important;
                    text-align: center;
                    justify-content: center;
                    margin: 0 auto;
                }
            }
            img {
                max-width: 160px;
            }
            .share-item-right {
                margin-left: 10px;
                @media (max-width: 980px) {
                    margin-left: 0;
                }
                p {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 8px;
                    margin-top: 0;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    width: 80%;
                    @media (max-width: 980px) {
                        font-size: 40px;
                        width: 100%;
                    }
                }
                .share-item-intro {
                    color: #404040;
                    width: 80%;
                    font-size: 15px;
                    @media (max-width: 980px) {
                        font-size: 20px;
                        width: 100%;
                    }
                }
            }
        }
        .md-center {
            @media (max-width: 1200px) {
                text-align: center;
            }
        }
    }
    .share-more {
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        margin-top: 30px;
        span {
            cursor: pointer;
        }
    }
}
</style>
