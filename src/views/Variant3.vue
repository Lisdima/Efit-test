<template>
  <div class="variant-three">
    <MainPage />
    <div class="title">
      <h1>Поиск улицы по справочнику</h1>
    </div>
    <div class="subtitle">
      <h2>Вариант 3</h2>
      </div>
    <VariantThree />
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
import VariantThree from "@/components/VariantThree.vue";

export default {
  name: "Variant-three",
  components: {
    MainPage,
    VariantThree,
  },
};
</script>