<template>
    <div>
        <div class="decore-footer decore-left"></div>
        <div class="decore-footer decore-right"></div>
        <div class="footer-social mb-3">
            <div class="social-circle">
                <i class="fa fa-facebook"></i>
            </div>
            <div class="social-circle ml-4">
                <i class="fa fa-instagram"></i>
            </div>
            <div class="social-circle ml-4">
                <i class="fa fa-twitter"></i>
            </div>
            <div class="social-circle ml-4">
                <i class="fa fa-linkedin"></i>
            </div>
            <div class="social-circle ml-4">
                <i class="fa fa-github"></i>
            </div>
        </div>
        <div class="footer-copyright">
            <span>© Erick Dewa Pranata {{ year }}. All rights reserved.</span>
        </div>
    </div>
</template>

<style type="text/css" scoped="true">
    .decore-footer{
        background-image: url('~/assets/images/shape/shape-bg-footer.png');
        background-size: cover;
        position: absolute;
        width: 120px;
        height: 100%;
        top: 0px;
    }
    .decore-footer.decore-left{
        left: 0px;
    }
    .decore-footer.decore-right{
        right: 0px;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }

    .social-circle{
        display: inline-block;
        cursor: pointer;
        font-size: 20px;
    }
    .social-circle:hover{
        color: #23cf9f;
    }
</style>

<script>
    export default{
        data(){
            return {
                year: "",
            }
        },
        mounted(){
            this.year = new Date().getFullYear();
        }
    }
</script>