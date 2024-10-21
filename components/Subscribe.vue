<script setup lang="ts">
import type { TextareaHTMLAttributes } from "vue";

const emit = defineEmits(["send"]);

const fio = defineModel("fio");
const email = defineModel("email");
const description = defineModel<TextareaHTMLAttributes["value"]>("description");
const is_checked = shallowRef<boolean>(false);

interface ErrorMessage {
  fio: boolean;
  email: boolean;
  description: boolean;
}

const error_message = ref({
  fio: false,
  email: false,
  description: false,
});

const is_error_checkbox = shallowRef<boolean>(false)

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const errorMessage = <K extends keyof ErrorMessage>(key: K, text: any): boolean | undefined => {
  if (key === "email") {
		if(EMAIL_REGEXP.test(text)) return error_message.value[key] = false;
	  return error_message.value[key] = true;
  }
  !!text
    ? (error_message.value[key] = false)
    : (error_message.value[key] = true);
};

const send = () => {
	errorMessage('fio', fio.value)
	errorMessage('email', email.value)
	errorMessage('description', description.value)
	if(!is_checked.value) is_error_checkbox.value = true
	for(let key of Object.values(error_message.value)) if(key) return alert("Заполните все поля");
	if(!is_checked.value) return alert("Заполните все поля");
  emit("send");
}
</script>

<template>
  <form class="subscribe" @submit.prevent="send">
    <article class="subscribe-media subscribe__media">
      <h4 class="subscribe-media__title">
        Комета из каменного века максимально приблизилась к Земле
      </h4>
      <p class="subscribe-media__description">
        Последними это небесное тело видели неандертальцы
      </p>
    </article>
    <article class="subscribe-info subscribe__info">
      <h3 class="subscribe-info__title">Подпишитесь на рассылку</h3>
      <fieldset class="subscribe-info__fields">
        <InputText
          v-model="fio"
          class="subscribe-info__field"
          placeholder="ФИО"
          :is_error="error_message.fio"
          @input="errorMessage('fio', fio)"
        ></InputText>
        <InputText
          v-model="email"
          class="subscribe-info__field"
          placeholder="E-mail"
          :is_error="error_message.email"
          @input="errorMessage('email', email)"
        ></InputText>
        <InputTextarea
          v-model="description"
          class="subscribe-info__field"
          placeholder="Примечание"
          :is_error="error_message.description"
          @input="errorMessage('description', description)"
        ></InputTextarea>
        <Checkbox @input="is_error_checkbox = is_checked" v-model="is_checked" :is_error="is_error_checkbox">
          <p>
            Я даю согласие на обработку персональных данных в соответсвии с
            <a href="#">политекой обработки персональных данных</a>.
          </p>
        </Checkbox>
        <button class="subscribe__submit">ПОДПИСАТЬСЯ</button>
      </fieldset>
    </article>
  </form>
</template>

<style scoped>
@import "@/components/styles/subscribe.scss";
</style>
