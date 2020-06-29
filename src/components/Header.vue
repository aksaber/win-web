<template>
    <div>
        <div class="header">
            <div class="container flex">
                <div class="header-logo flex">
                    <img src="../assets/logo.png" style="margin-right: 15px">
                    <img src="../assets/logo-font.png">
                </div>
                <ul>
                    <li><a href="home.html">关于我</a></li>
                    <li><a href="geoCourse.html">风水课程</a></li>
                    <li><a href="magicCourse.html">奇门占卜</a></li>
                    <li><a href="magicCourse.html">匿名占卜</a></li>
                    <li><a href="share.html">博文分享</a></li>
                    <li><a href="aboutUs.html">联系我</a></li>
                </ul>
                <!-- <div class="collapseDiv">
                    <img
                        src="../assets/collapse.png"
                        class="collapseImg"
                        @click="showMenu"
                    />
                </div> -->
            </div>
        </div>
        <!-- <div class="mobile-menu" :style="{transform: isMenu ? 'rotateX(0deg)' : 'rotateX(90deg)', height: isMenu ? '244px' : 0}">
            <p><a href="home.html">首页</a></p>
            <p><a href="geoCourse.html">风水课程</a></p>
            <p><a href="magicCourse.html">奇门课程</a></p>
            <p><a href="share.html">博文分享</a></p>
            <p><a href="aboutUs.html">联系我们</a></p>
        </div> -->
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
            padding: 0 0.5rem;
            @media only screen and (max-width: 640px) {
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
        position: relative;
        .collapseImg {
            width: 32px;
            height: 32px;
            margin-top: 0.2rem;
            display: none;
            @media (max-width: 768px) {
                display: block;
            }
        }
    }
}
.mobile-menu {
    text-align: right;
    font-size: 16px;
    padding: 5px 0.5rem 0 0.5rem;
    transition: all 0.3s ease-in;
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