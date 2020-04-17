<template>
    <div class="header">
        <img src="../assets/logo.png" alt="" class="header-logo">
        <ul>
            <li><a href="home.html">首页</a></li>
            <li><a href="geoCourse.html">风水课程</a></li>
            <li><a href="magicCourse.html">奇门课程</a></li>
            <li><a href="share.html">博文分享</a></li>
            <li><a href="aboutUs.html">联系我们</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss">
.header {
    // height: 200px;
    // height: 1.58rem;
    // background: url('../assets/img/banner.png') no-repeat;
    // font-size: 30px;
    font-size: 0.25rem;
    display: flex;
    justify-content: space-between;
    background-size: cover;
    background-position: 50% 50%;
    padding: 0 18%;
    background: #FCFAFA;
    @media only screen and (max-width: 768px) {
        padding: 0 0.5rem;
    }
    .header-logo {
        // margin-top: 34px;
        margin-top: 0.67rem;
        // width: 0.98rem;
        // height: 0.98rem;
    }
    ul {
        // margin-top: 97px;
        margin-top: 0.67rem;
        font-size: 1rem;
        font-weight: bold;
        line-height: 40px;
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
            color: #000;
        }
    }
}    
</style>