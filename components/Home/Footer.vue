<template>
    <div class="footer pt-5 pb-4" align="center">
        <div class="footer-decore decore-left"></div>
        <div class="footer-decore decore-right"></div>
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