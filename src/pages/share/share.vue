<template>
  <div id="share">
      <Header />
      <div class="share-first">
          <div class="share-first-content flex">
            <!-- <img :src="data[0] ? data[0].coverImage : null" alt=""> -->
            <!-- <img :src="data[0] ? data[0].coverImage : require('../../assets/home-swiper.png')" class="share-first-coverImage"> -->
            <img src="../../assets/blogPic.jpg" class="share-first-coverImage">
            <div class="share-first-title_1">
                <!-- <div @click="gotoBlog(data[0])">{{ data[0] ? data[0].title : null }}</div> -->
                <div>一花一世界，一叶一菩提</div>
            </div>
            <div class="share-first-title_2">
                <!-- <p>{{ data[0] ? data[0].date : null }}</p> -->
                <p>一物一太极</p>
            </div>
            <!-- <div class="share-first-title_3" v-if="data[0]">
                <span v-for="item in data[0].tag">{{ item }}</span>
            </div>
            <div class="share-first-title_2 flex">
                <img src="../../assets/avatar.png" style="width: 60px; height: 60px" />
                <div class="share-author">
                    <div>{{ data[0] ? data[0].author : null }}</div>
                    <span>{{ data[0] ? data[0].date : null }}</span>
                </div>
            </div> -->
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
                    <img src="../../assets/home-swiper.png" />
                    <div class="share-item-right">
                        <p>{{ item.title }}</p>
                        <div style="font-size: 16px; color: #404040; margin-bottom: 5px">{{ item.date }}</div>
                        <div class="share-item-tag">
                            <span v-for="item2 in item.tag">{{ item2 }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>
      </div>

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
          blogType: []
      }
  },
  components: { Header, Footer },
  mounted() {
      // 获取博客类型
    const url = 'https://www.hibifsqm.com/blog/getBlogType';
    fetch(url).then(response => response.json())
    .then(res => {
        this.blogType = res.data;
        this.getData(res.data[0].id);
    })
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
          const url = `https://www.hibifsqm.com/blog/list?type=${type}`;
          fetch(url).then(response => response.json())
            .then(res => {
                this.data = res.data;
            })
      },
      gotoBlog(blog) {
          window.location = `infoBlog.html?id=${blog.id}`;
      }
  }
}
</script>

<style lang="scss">
#share {
    background: rgb(188, 215, 196);
    .share-category {
        padding: 40px 15px;
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
    .share-first {
        margin: 0 auto;
        padding-top: 64px;
        @media only screen and (min-width: 768px) {
            width: 800px;
        }
        @media only screen and (min-width: 1200px) {
            width: 1140px;
        }
        @media (max-width: 980px) {
            padding-top: 110px;
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
                border-radius: 50%;
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
                box-shadow: 0 0 13px #e0e0e0;
                @media (max-width: 992px) {
                    margin-top: 35px!important;
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
                    @media (max-width: 992px) {
                        font-size: 40px;
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
                    font-size: 25px;
                    margin-bottom: 15px;
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
            .share-first-title_3 {
                width: 100%;
                max-width: 50%;
                flex: 0 0 50%;
                margin-bottom: 15px;
                span {
                    display: inline-block;
                    background: #19be6b;
                    height: 32px;
                    line-height: 32px;
                    color: #fff;
                    padding: 0 12px;
                    border-radius: 3px;
                    margin: 2px 4px 2px 0;
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
                .share-item-tag span {
                    display: inline-block;
                    background: #19be6b;
                    height: 28px;
                    line-height: 28px;
                    color: #fff;
                    padding: 0 12px;
                    border-radius: 3px;
                    font-size: 12px;
                    margin: 2px 4px 2px 0;
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
