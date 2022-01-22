<template>
    <div>
        <div class="page-title my-4 my-sm-5">
            <hr>
            <div class="title-text">LAST PROJECT</div>
        </div>
        <div class="row py-4">
            <div class="col-12 col-lg-6 project-preview">
                <div class="project-box-preview">
                    <div class="preview-dash"></div>
                    <div class="preview-block"></div>
                    <div class="preview-image">
                        <img class="preview-image-img" title="Click To Change" @click="swap()" :src="require(`~/assets/images/shape/${ dataProject[mainProject].img }`)" width="100%" height="100%" />
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 px-3 px-sm-5 mt-4 project-info">
                <div class="project-name-box">
                    <div class="project-name prev swap">{{ dataProject[mainProject].title }}</div>
                    <div class="project-name next">{{ dataProject[((mainProject+1) > (dataProject.length-1)) ? 0 : mainProject+1].title }}</div>
                </div>

                <div class="project-desc">{{ dataProject[mainProject].description }}</div>
                <div class="project-btn mt-3">
                    <div class="btn--custom px-3">
                        <span>Visit</span>
                    </div>
                    <div class="btn--custom px-2 ml-1">
                        <span><i class="far fa-thumbs-up"></i></span>
                    </div>
                    <div class="btn--custom px-2 ml-1">
                        <span><i class="far fa-thumbs-down"></i></span>
                    </div>
                    <div class="btn--custom px-2 ml-1">
                        <span><i class="fas fa-share-alt"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style type="text/css">
    @keyframes preview-image-swap{
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
    @keyframes preview-dash-swap{
        0%{
            left: -20px;
            top: -20px;
        }
        70%{
            left: 20px;
            top: 0px;
        }
        100%{
            left: -20px;
            top: -20px;
        }
    }
    @keyframes preview-block-swap{
        0%{
            right: 30px;
            bottom: -20px;
        }
        70%{
            right: 60px;
            bottom: 0px;
        }
        100%{
            right: 30px;
            bottom: -20px;
        }
    }

    .project-name, .project-name.swap{
        transition: opacity 1s linear;
    }

    .btn--custom{
        background: #ffffff;
        color: #23cf9f;
        font-weight: 500;
        display: inline-block;
        padding: 2px 0px;
        border: 2px solid #23cf9f;
        border-radius: 25px;
        cursor: pointer;
    }
    .dark-web .btn--custom{
        background: transparent;
    }
    .btn--custom:hover{
        background: #23cf9f;
        color: #ffffff;
    }
    .dark-web .btn--custom:hover{
        color: #000000;
    }

    .project-preview{
        position: relative;
        width: 550px;
        height: 300px;
    }
    .project-preview.swap .preview-block{
        animation-name: preview-block-swap;
        animation-duration: 2s;
    }
    .project-preview.swap .preview-dash{
        animation-name: preview-dash-swap;
        animation-duration: 2s;
    }
    .project-preview.swap .preview-image-img{
        animation-name: preview-image-swap;
        animation-duration: 1.5s;   
    }
    .project-preview .preview-dash{
        position: absolute;
        left: -20px;
        top: -20px;
        width: 540px;
        height: 300px;
        border-radius: 15px;
        border: 2px solid #23cf9f;
    }
    .project-preview .preview-block{
        background: #23cf9f;
        position: absolute;
        right: 30px;
        bottom: -20px;
        width: 250px;
        height: 250px;
        border-radius: 15px;
        border: 2px solid #23cf9f;
    }
    .project-preview .preview-image{
        background: #e9faf5;
        overflow: hidden;
        position: absolute;
        width: 550px;
        height: 300px;
        border-radius: 15px;
        border: 2px solid #e9faf5;
    }

    .project-name-box{
        position: relative;
        height: 50px;
    }
    .project-info .project-name{
        position: absolute;
        opacity: 0;
        font-size: 25px;
        font-weight: 600;
    }
    .project-info .project-name.swap{
        opacity: 1;
    }

    /* Size Extra Small */
    @media screen and (max-width: 600px) {
        .project-preview{
            display: flex;
            justify-content: center;
            height: auto;
        }
        .project-box-preview{
            position: relative;
            margin-top: 5px;
            width: 400px;
            height: 225px;
        }
        .project-preview .preview-dash{
            left: 0px;
            top: 0px;
            width: 90%;
            height: 90%;
        }
        .project-preview .preview-block{
            right: 0px;
            bottom: 0px;
            width: 50%;
            height: 50%;
        }
        .project-preview .preview-image{
            margin: 2.5% 5%;
            width: 90%;
            height: 90%;
        }
    }
    /* Size Small */
    @media screen and (min-width: 600px) and (max-width: 960px) {
        .project-preview{
            display: flex;
            justify-content: center;
            height: auto;
        }
        .project-box-preview{
            position: relative;
            margin-top: 5px;
            width: 400px;
            height: 225px;
        }
        .project-preview .preview-dash{
            left: 0px;
            top: 0px;
            width: 80%;
            height: 80%;
        }
        .project-preview .preview-block{
            right: 0px;
            bottom: 0px;
            width: 50%;
            height: 50%;
        }
        .project-preview .preview-image{
            margin: 2.5% 5%;
            width: 90%;
            height: 90%;
        }
    }
    /* Size Medium */
    @media screen and (min-width: 960px) and (max-width: 1264px) {
        .project-preview{
            display: flex;
            justify-content: center;
            height: auto;
        }
        .project-box-preview{
            position: relative;
            margin-top: 5px;
            width: 400px;
            height: 225px;
        }
        .project-preview .preview-dash{
            left: 0px;
            top: 0px;
            width: 90%;
            height: 90%;
        }
        .project-preview .preview-block{
            right: 0px;
            bottom: 0px;
            width: 50%;
            height: 50%;
        }
        .project-preview .preview-image{
            margin: 2.5% 5%;
            width: 90%;
            height: 90%;
        }
    }
    /* Size Lerge */
    @media screen and (min-width: 1264px) and (max-width: 1904px) {
        
    }
    /* Size Super Lerge */
    @media screen and (min-width: 1904px) {
        
    }
</style>

<script>
    export default{
        data(){
            return {
                mainProject: 0,

                dataProject: [
                    {
                        img: 'preview-01.png',
                        title: 'Kinetic',
                        description: 'Kinetic lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    },
                    {
                        img: 'preview-02.png',
                        title: 'Avatar',
                        description: 'Avatar lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    },
                ],
            }
        },
        methods: {
            swap(){
                var vm = this;
                
                var prev = $('.project-name.prev');
                var next = $('.project-name.next');
                var indexNext = ((vm.mainProject+1) > (vm.dataProject.length-1)) ? 0 : vm.mainProject+1;

                prev.removeClass('swap');
                next.addClass('swap');
                $('.project-preview').addClass('swap');
                setTimeout(function(){
                    vm.mainProject = indexNext;
                    prev.text(vm.dataProject[vm.mainProject].title);
                    $('.project-desc').text(vm.dataProject[vm.mainProject].description);
                    setTimeout(function(){
                        next.removeClass('swap');
                        prev.addClass('swap');
                        $('.project-preview').removeClass('swap');
                    }, 1000);
                }, 1000)
                next.text(vm.dataProject[((indexNext+1) > (vm.dataProject.length-1)) ? 0 : indexNext+1].title);
            }
        }
    }
</script>