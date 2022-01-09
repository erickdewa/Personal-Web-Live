<template>
    <div :class="(!skin) ? 'light-web' : 'dark-web'">
        <div class="page-one">
            <div class="btn-to-dark" @click="(skin) ? skin = false : skin = true">
                <i v-if="!skin" class="far fa-moon"></i>
                <i v-else class="far fa-sun"></i>
            </div>
            <div class="page-one-bg">
                <div class="content">
                    <div class="d-block d-lg-flex justify-content-lg-between">
                        <div class="profile-introduct">
                            <hr />
                            <div class="introduct-hi font-weight-normal">Hi, I`am</div>
                            <div class="introduct-name font-weight-bold">
                                <div class="owl"></div>
                                <span>Erick Dewa Pranata</span>
                            </div>
                            <div class="introduct-description font-weight-normal mt-3">Comes with all essential elements, features and sections for business websites, you need to launch a complete business or startup website.</div>
                            <div class="btn--introduct">
                                <div class="btn-project px-4 py-2 mt-5">Let`s Go</div>
                            </div>
                            <div class="profile-share mt-5">
                                <div class="social-circle">
                                    <i class="fa fa-facebook"></i>
                                </div>
                                <div class="social-circle ml-2">
                                    <i class="fa fa-instagram"></i>
                                </div>
                                <div class="social-circle ml-2">
                                    <i class="fa fa-twitter"></i>
                                </div>
                                <div class="social-circle ml-2">
                                    <i class="fa fa-linkedin"></i>
                                </div>
                                <div class="social-circle ml-2">
                                    <i class="fa fa-github"></i>
                                </div>
                            </div>
                        </div>
                        <div class="profile-owner d-none d-sm-none d-lg-block">
                            <div class="profile-owner-border">
                                <img src="~/assets/images/profile/owner.svg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="indonesia-mark"></div>
        <div class="page-two">
            <div class="content my-5">
                <HomeProject></HomeProject>
            </div>
        </div>
        <!-- <div class="page-three">
            <div class="content my-5">
                <HomeEducation></HomeEducation>
            </div>
        </div> -->
        <div style="position: relative; overflow: hidden;">
            <HomeFooter></HomeFooter>
        </div>

    </div>
</template>

<style type="text/css">
    @import url('~/assets/css/global.css');
    @import url('~/assets/css/main.css');
    @import url('~/assets/css/footer.css');

    /* Size Extra Small */
    @media screen and (max-width: 600px) {
        .profile-introduct{
            max-width: auto;
            padding: 120px 0px;
        }
    }
    /* Size Small */
    @media screen and (min-width: 600px) and (max-width: 960px) {
        .profile-introduct{
            max-width: auto;
            padding: 120px 0px;
        }
    }
    /* Size Medium */
    @media screen and (min-width: 960px) and (max-width: 1264px) {
        .profile-introduct{
            max-width: auto;
            padding: 120px 0px;
        }
    }
    /* Size Lerge */
    @media screen and (min-width: 1264px) and (max-width: 1904px) {
        .page-one{
            height: 640px;
        }

        .profile-introduct{
            max-width: 40%;
            margin-top: 15%;
        }
    }
    /* Size Super Lerge */
    @media screen and (min-width: 1904px) {
        .page-one{
            height: 640px;
        }

        .profile-introduct{
            max-width: 40%;
            margin-top: 15%;
        }
    }
</style>
<script>
    import { mapGetters } from 'vuex'
    export default{
        computed: {
            ...mapGetters(['loggedInUser', 'isAuthenticated'])
        },
        data(){
            return {
                skin: false,
            }
        },
        methods: {
          // method
        },
        mounted(){
            var vm = this;
        },
    }
</script>
