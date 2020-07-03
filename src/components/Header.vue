<template>
    <div>
        <div class="header">
            <div class="container flex pcHeader">
                <div class="header-logo flex">
                    <img src="../assets/_logo.png" style="margin-right: 15px">
                    <!-- <img src="../assets/logo-font.png"> -->
                </div>
                <ul>
                    <li><a href="home.html">关于我</a></li>
                    <li><a>风水课程</a></li>
                    <li><a>奇门占卜</a></li>
                    <li><a>匿名占卜</a></li>
                    <li><a href="share.html">博文分享</a></li>
                    <li><a>联系我</a></li>
                </ul>
            </div>
            <div class="mobileHeader">
                <div class="collapseDiv container">
                    <div class="header-logo flex">
                        <img src="../assets/_logo.png" style="margin-right: 15px" width="244">
                        <!-- <img src="../assets/logo-font.png"> -->
                    </div>
                    <img
                        src="../assets/collapse.png"
                        class="collapseImg"
                        @click="showMenu"
                    />
                </div>
            </div>
        </div>
        <div class="mobile-menu" :style="{transform: isMenu ? 'rotateX(0deg)' : 'rotateX(90deg)', height: isMenu ? '244px' : 0}">
            <p><a href="home.html">首页</a></p>
            <p><a href="geoCourse.html">风水课程</a></p>
            <p><a href="magicCourse.html">奇门课程</a></p>
            <p><a href="share.html">博文分享</a></p>
            <p><a href="aboutUs.html">联系我们</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isMenu: false
        }
    },
    methods: {
        showMenu() {
            this.isMenu = !this.isMenu;
        }
    }
}
</script>

<style lang="scss">
.header {
    background: rgb(188, 215, 196);
    background-size: cover;
    background-position: 50% 50%;
    @media only screen and (max-width: 768px) {
        padding: 0 0.5rem;
    }
    .container {
        height: 90px;
        justify-content: space-between;
        align-items: center;
    }
    .pcHeader {
        @media (max-width: 980px) {
            display: none;
        }
    }
    .mobileHeader {
        position: fixed;
        left: 0;
        width: 100%;
        background: rgb(188, 215, 196);
        box-shadow: 0px -5px 11px #adacac;
        z-index: 999;
        display: none;
        @media (max-width: 980px) {
            display: block;
        }
    }
    .header-logo {
        align-items: center;
    }
    ul {
        @media (max-width: 768px) {
            display: none;
        }
        li {
            float: left;
            // padding: 0 30px;
            padding: 0 15px;
            @media only screen and (max-width: 640px) {
                padding: 0 7px;
            }
            @media only screen and (max-width: 1400px) {
                padding: 0 7px;
            }
        }
        a {
            cursor: pointer;
            // color: #000;
            color: #fff;
        }
    }
    .collapseDiv {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .collapseImg {
            width: 32px;
            height: 32px;
        }
    }
}
.mobile-menu {
    text-align: center;
    font-size: 16px;
    padding: 5px 0.5rem 0 0.5rem;
    transition: all 0.3s ease-in;
    display: none;
    position: fixed;
    right: 0px;
    top: 90px;
    width: 144px;
    box-shadow: rgb(171, 171, 171) 0px 5px 18px;
    z-index: 999;
    background: rgb(188, 215, 196);
    @media (max-width: 980px) {
        display: block;
    }
    a {
        color: #000;
        font-weight: bold;
    }
    p {
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
    }
    &:after {
        content: '';
        clear: both;
    }
}
</style>