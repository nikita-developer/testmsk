<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import slider_items from "@/public/slider.json";
import type SlideItem from "~/interfaces/SlideItem";

const items = ref<SlideItem[]>(slider_items);

const myCarousel = ref();

const prev = () => myCarousel.value.prev();
const next = () => myCarousel.value.next();

const hold_key_shift = shallowRef<boolean>(false);
const movingSlide = (e: any) => {
  if (hold_key_shift.value) {
    e.preventDefault();
    e.deltaY < 0 ? next() : prev();
  }
};

const toggleHoldShift = (e: any, active: boolean = false) => {
  if (e.keyCode === 16) hold_key_shift.value = active;
};

const movingSlideArrow = (e: any) => {
  toggleHoldShift(e, true);
  if (e.keyCode === 39) next();
  if (e.keyCode === 37) prev();
};

const breakpoints = {
  0: {
    itemsToShow: 1.5,
  },
  768: {
    itemsToShow: 2.5,
  },
};
</script>

<template>
  <div
    class="carousel"
    @keyup="toggleHoldShift($event)"
    @keydown="movingSlideArrow"
    @wheel="movingSlide"
  >
    <Carousel
      ref="myCarousel"
      snap-align="start"
      :breakpoints="breakpoints"
      tabindex="0"
      aria-label="Слайдер карикатур"
    >
      <Slide
        v-for="item in items"
        :key="item.id"
        tabindex="0"
        :aria-label="'Слайд' + item.id"
      >
        <SliderItem :item="item"></SliderItem>
      </Slide>
    </Carousel>
    <div class="carousel-nav">
      <button
        class="carousel-nav__prev"
        tabindex="0"
        aria-label="Кнопка для переключения карикутуры назад"
        @click="prev"
      ></button>
      <button
        class="carousel-nav__next"
        tabindex="0"
        aria-label="Кнопка для переключения карикутуры вперед"
        @click="next"
      ></button>
    </div>
  </div>
</template>

<style scoped>
@import "@/components/styles/slider.scss";
</style>
