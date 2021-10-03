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
                    <img class="preview-image" src="~/assets/images/shape/preview-01.png" />
                </div>
            </div>
            <div class="col-12 col-lg-6 px-3 px-sm-5 mt-4 project-info">
                <div class="project-name">Kinetic</div>
                <div class="project-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</div>
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
    .btn--custom:hover{
        background: #23cf9f;
        color: #ffffff;
    }

    .project-preview{
        position: relative;
        width: 550px;
        height: 300px;
    }
    .project-preview .preview-dash{
        position: absolute;
        left: -20px;
        top: -20px;
        width: 550px;
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
        position: absolute;
        width: 550px;
        height: 300px;
        border-radius: 15px;
        border: 2px solid #e9faf5;
    }

    .project-info .project-name{
        font-size: 25px;
        font-weight: 600;
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
