<template>
  <div class="order-one">
    <MainPage />
    <div class="title">
      <h1>Заказ 1</h1>
    </div>
    <OrderOne />
  </div>
</template>


<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
import OrderOne from "@/components/OrderOne.vue";

export default {
  name: "Order-one",
  components: {
    MainPage,
    OrderOne,
  },
};
</script>