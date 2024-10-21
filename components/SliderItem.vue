<script setup lang="ts">
import type SlideItem from "~/interfaces/SlideItem";

const { item } = defineProps<{
  item?: SlideItem;
}>();
</script>

<template>
  <article class="slider-item">
    <span
      class="slider-item__name"
      :class="item?.color"
      tabindex="0"
      aria-label="Тег карикатуры"
      >карикатура</span
    >
    <figure class="slider-item__media">
	    <img :src="`media/${item?.media}`" alt="">
      <figcaption tabindex="0" :aria-label="item?.title">
        {{ item?.title }}
      </figcaption>
    </figure>
    <p
      class="slider-item__description"
      tabindex="0"
      :aria-label="item?.description"
    >
      {{ item?.description }}
    </p>
  </article>
</template>

<style scoped>
@import "@/components/styles/slider-item.scss";
</style>
