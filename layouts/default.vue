<template>
	<div :class="(!skin) ? 'light-web' : 'dark-web'">
	    <nuxt />

	    <div style="position: relative; overflow: hidden;">
            <HomeFooter></HomeFooter>
        </div>

        <div class="to-top position-fixed">
            <i class="fa fa-arrow-circle-o-up"></i>
        </div>
	</div>
</template>

<style type="text/css">
    @import url('~/assets/css/global.css');
    @import url('~/assets/css/main.css');
    @import url('~/assets/css/footer.css');

    .to-top{
        color: #23cf9f;
        font-size: 40px;
        right: 30px;
        bottom: 30px;
        border-radius: 100px;
        cursor: pointer;
    }

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

<script type="text/javascript">
	export default {
		data(){
			return {
                skin: false,
			}
		},
		mounted(){
			$(".to-top").click(function() {
                $("html, body").animate({ scrollTop: 0 }, "slow");
            });
		}
	}
</script>