<template>
    <div>
        <div class="decore-edication"></div>
        <div class="d-flex py-5" align="center">
            <div class="education-ui-box">
                <div class="page-title ml-5">
                    <div class="title-text" style="font-size: 40px;">My Education</div>
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
    .education-ui-box .education-ui-circle{
        position: absolute;
        right: 0px;
        top: -15%;
        height: 800px;
        width: 800px;
        border-radius: 50%;
        border: 2px solid #e4e7ee;
        z-index: 1;
    }
    .education-ui-box .education-ui-dot{
        background: #e4e7ee;
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
        background: #e4e7ee;
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
        border-bottom: 2px solid #e4e7ee;
        border-radius: 50%;
    }
    .education-box .education-tipe{
        color: red;
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
