<template>
  <div class="variant-one">
    <MainPage />
    <div class="title">
      <h1>Поиск улицы по справочнику</h1>
    </div>
    <div class="subtitle">
      <h2>Вариант 1</h2>
    </div>
    <VariantOne />
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
import VariantOne from "@/components/VariantOne.vue";

export default {
  name: "Variant-one",
  components: {
    MainPage,
    VariantOne,
  },
};
</script>

<style lang="scss">
.title {
  padding: 60px;
  @media (max-width: 900px) {
    padding: 60px;
  }
}
</style>
