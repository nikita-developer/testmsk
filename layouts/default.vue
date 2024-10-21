<script setup lang="ts"></script>

<template>
  <div class="layouts">
    <Header></Header>
	  <div class="layouts__body">
		  <slot></slot>
	  </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
@import "@/layouts/styles/default.scss";
</style>
