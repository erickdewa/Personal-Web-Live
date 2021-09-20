<template>
	<div>
		Page
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