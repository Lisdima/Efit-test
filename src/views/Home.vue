<template>
  <div class="home">
    <MainPage />
    <div class="title">
      <h1>Тестовое задание</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";

export default {
  name: "Home",
  components: {
    MainPage,
  },
};
</script>

<style lang="scss">
.v-application--wrap {
  min-height: auto;
}
.title {
  padding: 0;
  h1 {
    @media (max-width: 600px) {
      font-size: 20px;
    }
  }
}
</style>
