<template>
	<div class="container my-5">
		<div class="artikel-list">
            <div class="row" align="center">
                <div class="col-12 col-sm-6 col-md-4 my-2 my-sm-3">
                    <div class="artikel-item p-sm-3 d-flex d-sm-block" align="left">
                        <img src="~assets/images/blog/test.png">
                        <div class="artikel-nav ml-3 ml-sm-0">
                            <div class="article-title pt-sm-2">Cara Mudah Menghitung Banyak Data Dengan PHP & MySql</div>
                            <div class="d-block d-sm-none" style="font-size: 15px">
                                <i class="fa fa-clock-o"></i>
                                <span class="ml-1">2 Min Ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 my-2 my-sm-3">
                    <div class="artikel-item p-sm-3 d-flex d-sm-block" align="left">
                        <img src="~assets/images/blog/test.png">
                        <div class="artikel-nav ml-3 ml-sm-0">
                            <div class="article-title pt-sm-2">Cara Mudah Menghitung Banyak Data Dengan PHP & MySql</div>
                            <div class="d-block d-sm-none" style="font-size: 15px">
                                <i class="fa fa-clock-o"></i>
                                <span class="ml-1">2 Min Ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 my-2 my-sm-3">
                    <div class="artikel-item p-sm-3 d-flex d-sm-block" align="left">
                        <img src="~assets/images/blog/test.png">
                        <div class="artikel-nav ml-3 ml-sm-0">
                            <div class="article-title pt-sm-2">Cara Mudah Menghitung Banyak Data Dengan PHP & MySql</div>
                            <div class="d-block d-sm-none" style="font-size: 15px">
                                <i class="fa fa-clock-o"></i>
                                <span class="ml-1">2 Min Ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<style type="text/css">
    .artikel-item{
        background: #e1ece9;
        width: 100%;
        border-radius: 10px;
    }
    .artikel-item img{
        width: 100%;
        max-height: 300px;
        border-radius: 10px;
    }
    .artikel-item .article-title{
        color: #000000;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
    }
    .artikel-item .article-title:hover{
        color: #0eb083;
    }

/* Size Small */
@media screen and (max-width: 600px){
    .artikel-item{
        background: #ffffff;
    }
    .artikel-item img{
        width: 130px;
        max-height: 100px;
        border-radius: 10px;
    }
    .artikel-item .article-title{
        color: #000000;
        height: 58px;
        font-size: 18px;
        font-weight: 500;
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