<script setup lang="ts">
const { is_error = false, placeholder = "" } = defineProps<{
  is_error?: boolean;
  placeholder?: string;
}>();

const model = defineModel();
</script>

<template>
  <div class="input-text">
    <input
      v-model="model"
      type="text"
      :placeholder="placeholder"
      :class="{ error: is_error }"
    />
    <p v-if="is_error" class="message-error" tabindex="0" aria-label="Поле заполнено не корректно.">Поле заполнено не корректно.</p>
  </div>
</template>

<style scoped lang="scss">
@import "@/components/styles/input-text.scss";
</style>
