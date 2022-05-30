<template>
    <div>
        <div class="decore-edication"></div>
        <div class="d-flex py-5" align="center">
            <div class="education-ui-box">
                <div class="page-title ml-5 position-relative">
                    <div class="title-text">My Education</div>
                    <svg style="position: absolute; right: -10px; bottom: -5px; width: 200px; transform: rotate(3deg);" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 416.04 71.16"><path d="M788.6,61.29l-83.81.14c-26.91,0-53.72.33-80.5,3.34S571.1,72,544.64,76.33c-25.31,4.15-50.55,8.85-75.51,14.81a572.41,572.41,0,0,0-83.8,26.45c-3.73,1.52-6.42,5-5.24,9.22,1,3.55,5.44,6.79,9.23,5.24,47.8-19.53,98.34-30.9,149.12-39.55,25.62-4.37,51.35-8.45,77.15-11.69,26.7-3.35,53.38-4.3,80.28-4.36q46.36-.12,92.73-.16C798.25,76.27,798.27,61.27,788.6,61.29Z" transform="translate(-379.81 -61.29)" style="fill:#50b792"/></svg>
                </div>
                <div class="education-ui-circle"></div>
                <div class="education-ui-dot top d-block"></div>
                <div class="education-ui-dot bottom d-block"></div>
            </div>
            <div class="education-list">
                <div class="education-item">
                    <div class="education-box py-3 px-4">
                        <div class="education-box-dash" style="width: 255px; left: -255px;"></div>
                        <div class="education-box-dot"></div>
                        <div class="education-tipe">Middle School</div>
                        <div class="education-school">SMP 47 Surabaya</div>
                        <div class="education-year">2015-2018</div>
                    </div>
                </div>
                <div class="education-item">
                    <div class="education-box py-3 px-4">
                        <div class="education-box-dash" style="width: 200px; left: -200px;"></div>
                        <div class="education-box-dot"></div>
                        <div class="education-tipe">High School</div>
                        <div class="education-school">SMK 2 Surabaya</div>
                        <div class="education-year">2018-2021 (Rekayasa Perangkat Lunak)</div>
                    </div>
                </div>
                <div class="education-item">
                    <div class="education-box py-3 px-4">
                        <div class="education-box-dash" style="width: 255px; left: -255px;"></div>
                        <div class="education-box-dot"></div>
                        <div class="education-tipe">University</div>
                        <div class="education-school">Universitas 17 Agustus 1945 Surabaya</div>
                        <div class="education-year">2021-Now (Teknik Informatika)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style type="text/css" scoped="true">
    .decore-edication{
        background-image: url('~/assets/images/shape/shape-bg-1.png');
        background-size: contain;
        position: absolute;
        top: -3%;
        left: 0px;
        width: 46%;
        height: 106%;
        opacity: 0.5;
        border-radius: 0% 100% 100% 0%;
    }
    .education-ui-box{
        display: flex;
        align-items: center;
        position: relative;
        width: 45%;
        height: 615px;
        overflow: hidden;
    }
    .education-ui-box .title-text{
        font-size: 60px;
        font-weight: bolder;
        color: #000000;
    }
    .education-ui-box .education-ui-circle{
        position: absolute;
        right: 0px;
        top: -15%;
        height: 800px;
        width: 800px;
        border-radius: 50%;
        border: 2px solid #23cf9f;
        z-index: 1;
    }
    .education-ui-box .education-ui-dot{
        background: #23cf9f;
        position: absolute;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        z-index: 20;
    }
    .education-ui-box .education-ui-dot.top{
        top: 0px;
        right: 24%;
    }
    .education-ui-box .education-ui-dot.bottom{
        bottom: 0px;
        right: 24%;
    }

    .education-list{
        display: grid;
    }
    .education-list .education-item{
        display: flex;
        align-items: center;
    }
    .education-list .education-box{
        background: #ffffff;
        position: relative;
        min-width: 350px;
        margin-left: 200px;
        border-radius: 5px;
    }
    .education-box .education-box-dot{
        background: #23cf9f;
        top: 43%;
        left: -7.5px;
        position: absolute;
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }
    .education-box .education-box-dash{
        top: 50%;
        position: absolute;
        display: inline-block;
        border-bottom: 2px solid #23cf9f;
        border-radius: 50%;
    }
    .education-box .education-tipe{
        color: #23cf9f;
        font-size: 13px;
        font-weight: 600;
    }
    .education-box .education-school{
        color: #000000;
        font-size: 18px;
        font-weight: 600;
    }
    .education-box .education-year{
        color: #000000;
        font-size: 15px;
    }
</style>
