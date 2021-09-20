<template>
	<div>
		Login
	</div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default{
        middleware: 'AuthFalse',
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