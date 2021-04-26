<template>
  <div class="variant-two">
    <MainPage />
    <div class="title">
      <h1>Поиск улицы по справочнику</h1>
    </div>
    <div class="subtitle">
      <h2>Вариант 2</h2>
      </div>
    <VariantTwo />
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
import VariantTwo from "@/components/VariantTwo.vue";

export default {
  name: "Variant-two",
  components: {
    MainPage,
    VariantTwo,
  },
};
</script>