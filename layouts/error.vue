<template>
	<div align="center" style="min-height: 570px; padding-top: 50px">
		<div class="error-text">404</div>
		<div class="error-title-text">Oops, your lost in space</div>
		<div class="error-subtitle-text">We didn't find the page you were looking for</div>
		<div class="error-go-home d-inline" @click="$router.push('/')">Go Home</div>
	</div>
</template>

<style type="text/css">
	.error-text{
		font-size: 200px;
		font-weight: 800;
	}
	.error-title-text{
		font-size: 30px;
		font-weight: 600;
	}
	.error-subtitle-text{
		font-size: 20px;
		margin-bottom: 20px;
	}
	.error-go-home{
		color: #23cf9f;
		padding: 5px 15px;
		cursor: pointer;
		border-radius: 20px;
		border: 2px solid #23cf9f;
	}
</style>