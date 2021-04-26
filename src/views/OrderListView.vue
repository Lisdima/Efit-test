<template>
  <div class="order-list">
    <MainPage />
    <div class="title">
      <h1>Заказы</h1>
    </div>
    <OrderList />
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
import OrderList from "@/components/OrderList.vue";

export default {
  name: "Order-list",
  components: {
    MainPage,
    OrderList,
  },
}
</script>