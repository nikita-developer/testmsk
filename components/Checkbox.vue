<script setup lang="ts">
const { is_error = false } = defineProps<{
	is_error?: boolean;
}>();

const model = defineModel<boolean>();
</script>

<template>
  <label class="checkbox" :class="{ error: is_error }">
    <input type="checkbox" v-model="model"/>
    <span class="checkbox__body"></span>
    <slot></slot>
  </label>
</template>

<style scoped lang="scss">
@import "@/components/styles/checkbox.scss";
</style>
