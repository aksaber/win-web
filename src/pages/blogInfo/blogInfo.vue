<template>
    <div id="blogInfo">
        <Header />
        <audio
            :src="data.audio"
            v-if="data.audio"
            id="player"
            autoplay
            loop
        ></audio>
        <img
            :src="isPlaying ? require('../../assets/audioPlay.png') : require('../../assets/audioPause.png')"
            class="audioImg"
            @click="playPause"
        >
        <div class="share-first">
            <div class="share-first-content flex">
                <img :src="data.coverImage" class="share-first-coverImage">
                <div class="share-first-title_1">
                    <div>{{ data.title }}</div>
                </div>
                <div class="share-first-title_2">
                    <p>{{ data.abstract }}</p>
                </div>
                <div class="share-first-title_2 flex">
                    <div>
                        <div style="margin-bottom: 10px; font-size: 20px">{{ data.date }}</div>
                        <div style="font-size: 18px; margin-bottom: 10px">{{ data.author }}</div>
                        <div class="share-item-tag">
                            <span v-for="item in data.tag">{{ item }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog-content">
            <div class="container">
                <div v-html="data.content"></div>
            </div>
        </div>
        <Footer />  
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'BlogInfo',
    data() {
        return {
            data: {
            },
            isPlaying: true,
        }
    },
    components: { Header, Footer },
    mounted() {
        let s_id = window.location.search;
        let url = {};
        if (s_id.indexOf('?') != -1) {
            let str = s_id.substr(1);
            let strs = str.split('&');
            for (let i = 0; i < strs.length; i++) {
                url[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
            }
        }
        this.getInfo(url.id);
    },
    methods: {
        getInfo(id) {
            const url = `https://www.hibifsqm.com/blog/detail?id=${id}`;
            fetch(url).then(response => response.json())
                .then(res => {
                    this.data = res.data[0];
                    this.$nextTick(() => {
                        this.isPlaying = !document.getElementById('player').paused;
                    })
                })
        },
        playPause() {
            if (this.isPlaying) {
                // 当前正在播放，需暂停
                this.isPlaying = false;
                document.getElementById('player').pause();
            } else {
                this.isPlaying = true;
                document.getElementById('player').play();
            }
        }
    }
}
</script>

<style lang="scss">
#blogInfo {
    .share-first {
        margin: 0 auto;
        padding: 64px 0;
        @media (max-width: 980px) {
            padding-top: 110px;
        }
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
                font-size: 0.25rem;
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
            }
        }
    }
    .blog-content {
        font-size: 16px;
        word-break: break-all;
        background: #fbfbfb;
        padding-bottom: 50px;
        .container {
            >div, img {
                max-width: 95%;
                margin: 0 auto;
            }
        }
    }
    .audioImg {
        position: fixed;
        top: 96px;
        right: 10px;
        z-index: 9999999;
        width: 48px;
        animation: turn 8s linear infinite;
        cursor: pointer;
    }
    @keyframes turn{
        0%{-webkit-transform:rotate(0deg);}
        25%{-webkit-transform:rotate(90deg);}
        50%{-webkit-transform:rotate(180deg);}
        75%{-webkit-transform:rotate(270deg);}
        100%{-webkit-transform:rotate(360deg);}
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
</style>