<template>
    <div>
        <div class="page-one">
            <div class="btn-to-dark" @click="($parent.$parent.skin) ? $parent.$parent.skin = false : $parent.$parent.skin = true">
                <i v-if="!$parent.$parent.skin" class="far fa-moon"></i>
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
                                <span class="position-relative overflow-hidden">
                                    <hr class="position-absolute w-100 m-0" style="left: 0px; bottom: 7px; border-top: 4px solid #23cf9f;">
                                    <span class="position-relative" style="z-index: 99;">
                                        Erick Dewa Pranata
                                    </span>
                                </span>
                            </div>
                            <div class="introduct-description font-weight-normal mt-3">I am a freelancer with expertise in web developer with 1 year experience. I can help build a website to improve your business.</div>
                            <div class="btn--introduct">
                                <div class="btn-project px-4 py-2 mt-5">Let`s Go</div>
                            </div>
                            <div class="profile-share mt-5">
                                <a v-for="(socialMedia, i) in socialMedia" class="social-circle" target="_blank" :href="socialMedia.link" v-bind:class="i != 0 ? 'ml-2' : ''" :title="socialMedia.name">
                                    <i :class="`fa ${ socialMedia.icon }`"></i>
                                </a>
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
        <div v-if="false" class="page-three d-none d-xl-block">
            <div class="content my-5">
                <HomeEducation></HomeEducation>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default{
        computed: {
            ...mapGetters(['loggedInUser', 'isAuthenticated'])
        },
        data(){
            return {
                socialMedia: [
                    {
                        name: 'facebook',
                        icon: 'fa-facebook',
                        link: 'https://facebook.com',
                    },
                    {
                        name: 'instagram',
                        icon: 'fa-instagram',
                        link: 'https://www.instagram.com/erickdewa_',
                    },
                    {
                        name: 'twitter',
                        icon: 'fa-twitter',
                        link: 'https://twitter.com/erickdewa',
                    },
                    {
                        name: 'linkedin',
                        icon: 'fa-linkedin',
                        link: 'https://linkedin.com/in/erickdewa',
                    },
                    {
                        name: 'github',
                        icon: 'fa-github',
                        link: 'https://github.com/erickdewa',
                    },
                ],
            }
        }
    }
</script>
