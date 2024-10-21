import { defineStore } from "pinia";

export const useFormStore = defineStore("store", () => {
  const setForm = async () => {
    try {
      // const res = await fetch("что-то там");
      // const json = await res.json();
      alert("Форма отправлена");
      // return json;
    } catch (e) {
      alert(`Ошибка: ${e}`);
    }
  };
  return { setForm };
});
