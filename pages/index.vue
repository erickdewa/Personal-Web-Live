<template>
    <div>
        <div class="page-one">
            <div class="page-one-bg">
                <div class="content">
                    <div class="d-block d-lg-flex justify-content-lg-between">
                        <div class="profile-introduct">
                            <hr />
                            <div class="introduct-hi font-weight-normal">Hi, I`am</div>
                            <div class="introduct-name font-weight-bold">Erick Dewa Pranata</div>
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
    </div>
</template>

<style type="text/css">
    @media screen and (max-width: 1200px) {
        .profile-introduct{
            max-width: auto;
            padding-top: 150px;
        }
    }
    @media screen and (min-width: 1200px) {
        .page-one{
            height: 780px;
        }

        .profile-introduct{
            max-width: 40%;
            margin-top: 15%;
        }
    }

    .page-one .page-one-bg{
        background-image: url('~/assets/images/shape/bg-1.svg');
        background-size: unset;
        background-repeat: no-repeat;
    }
    .content{
        margin: 0% 10%;
    }
    .profile-share{
        display: flex;
    }
    .profile-share .social-circle{
        color: #000000;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        text-align: center;
        font-size: 18px;
        padding-top: 3px;
        border: 2px solid #000000;
        cursor: pointer;
    }

    .profile-introduct hr{
        border-color: #000000;
        padding-bottom: 5px;
        margin-right: 8px;
        vertical-align: middle;
        display: inline-block;
        width: 25px;
    }
    .profile-introduct .introduct-hi{
        display: inline-block;
        font-size: 20px;
    }
    .profile-introduct .introduct-name{
        font-size: 45px;
        line-height: 50px;
    }
    .profile-introduct .introduct-description{
        font-size: 20px;
    }

    .btn--introduct .btn-project{
        background: #23cf9f;
        border-color: #23cf9f;
        color: #ffffff;
        display: inline-block;
        font-size: 15px;
        font-weight: 600;
        letter-spacing: 1px;
        border-radius: 15px;
        box-shadow: -7px 44px 84px -12px rgba(35,207,159,0.44);
        -webkit-box-shadow: -7px 44px 84px -12px rgba(35,207,159,0.44);
        -moz-box-shadow: -7px 44px 84px -12px rgba(35,207,159,0.44);
        cursor: pointer;
    }

    .profile-owner{
        background: #ffffff;
        display: inline-block;
        margin-top: 15%;
        border-radius: 50%;
    }
    .profile-owner .profile-owner-border{
        height: 400px;
        width: 400px;
        border-radius: 50%;
        border: 2px solid #23cf9f;
        transition: border 500ms;
    }
    .profile-owner img{
        background: #f3f9ff;
        border-radius: 50%;
        margin: 4px;
        height: 380px;
        width: 380px;
        transition: width 500ms, height 500ms, margin 500ms;
    }
    .profile-owner:hover img{
        height: 100%;
        width: 100%;
        margin: 0px;
    }
    .profile-owner:hover .profile-owner-border{
        border: 2px solid #f3f9ff;
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
              // data
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
