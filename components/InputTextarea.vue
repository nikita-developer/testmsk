<script setup lang="ts">
import type { TextareaHTMLAttributes } from "vue";

const { is_error = false, placeholder = "" } = defineProps<{
  is_error?: boolean;
  placeholder?: string;
}>();

const model = defineModel<TextareaHTMLAttributes["value"]>();
</script>

<template>
  <div class="input-textarea">
    <textarea
      v-model="model"
      type="text"
      :placeholder="placeholder"
      :class="{ error: is_error }"
    ></textarea>
    <p
      v-if="is_error"
      class="message-error"
      tabindex="0"
      aria-label="Поле заполнено не корректно."
    >
      Поле заполнено не корректно.
    </p>
  </div>
</template>

<style scoped>
@import "@/components/styles/input-textarea.scss";
</style>
