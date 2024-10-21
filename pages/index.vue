<script setup lang="ts">
import { useFormStore } from "~/stores/store";

const store = useFormStore();

const fio = ref("");
const email = ref("");
const description = ref("");
</script>

<template>
  <main class="main">
    <article class="article">
      <div class="container">
        <section class="section section-gallery">
          <h1 class="main__title" tabindex="0" aria-label="Галерея карикатур">
            Галерея карикатур
          </h1>
          <Slider></Slider>
        </section>
        <section
          class="section section-subscribe"
          tabindex="0"
          aria-label="Блок для подписки на расслку"
        >
          <Subscribe
            v-model:fio="fio"
            v-model:email="email"
            v-model:description="description"
            @send="store.setForm"
          ></Subscribe>
        </section>
      </div>
    </article>
  </main>
</template>

<style scoped></style>
