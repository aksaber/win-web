<template>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-content-top center">Copyright © 2019.Company name All rights reserved.</div>
            <div class="footer-content-bottom center">Copyright © 2019.Company name All rights reserved.</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss">
.footer {
    background: #FCFAFA;
    padding: 0.24rem;
    font-size: 16px;
    .footer-content {
        margin: 0 auto;
        font-weight: bold;
        @media only screen and (min-width: 1200px) {
            width: 1140px;
        }
        .footer-content-top {
            padding-bottom: 0.16rem;
        }
        .footer-content-bottom {
            padding-top: 0.16rem;
            border-top: 1px solid rgba(0, 0, 0, .1);
        }
    }
}
</style>