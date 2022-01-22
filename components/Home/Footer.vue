<template>
    <div>
        <div v-if="$route.name != null" class="talk-project my-5 py-2 py-md-5">
            <div class="title-talk">Let`s talk about a project</div>
            <div align="center">
                <div class="desc-talk mx-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</div>
            </div>
            <div class="hire-talk mt-4">Hire Me</div>
        </div>
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
    </div>
</template>

<script>
    export default{
        data(){
            return {
                year: new Date().getFullYear(),
            }
        },
    }
</script>