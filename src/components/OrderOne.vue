<template>
  <div id="app">
    <v-app id="inspire">
      <v-container class="main-container">
        <v-card>
          <v-card-title class="title__table-up" v-if="showAll"> Заказ №1 ({{ order.orderType.name }}) </v-card-title>
          <div class="full-container">
            <div class="vertical-container">
              <v-simple-table class="table-up">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="subtitle-list">
                        Продукт
                      </th>
                      <th class="subtitle-list">
                        Модификатор
                      </th>
                      <th class="subtitle-list">
                        Количество
                      </th>
                      <th class="subtitle-list">
                        Сумма
                      </th>
                    </tr>
                  </thead>
                  <tbody class="table-values">
                    <tr v-for="item in order.items" :key="item.id">
                      <td class="border-line">{{ item.name }}</td>
                      <td></td>
                      <td class="border-line">{{ item.amount }}</td>
                      <td class="border-line">{{ item.sum }}</td>
                    </tr>
                  </tbody>
                  <tbody class="result-table">
                    <tr>
                      <th class="subtitle-list border-top">Сумма заказа:</th>
                      <th class="border-top"></th>
                      <th class="border-top"></th>
                      <th class="border-top">
                        {{ order.sum }}
                      </th>
                    </tr>
                    <tr>
                      <th class="subtitle-list">Сумма скидки:</th>
                      <th></th>
                      <th></th>
                      <th>
                        {{ order.discount }}
                      </th>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>

              <v-card-title class="title__second-table">Оплата</v-card-title>
              <v-simple-table class="table-bottom">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="subtitle-list">
                        Тип оплаты
                      </th>
                      <th class="subtitle-list">
                        Сумма, руб
                      </th>
                    </tr>
                  </thead>
                  <tbody class="table-values">
                    <tr v-for="payment in order.payments" :key="payment.id">
                      <td>{{ payment.paymentType.name }}</td>
                      <td>{{ payment.sum }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>

              <v-card-title class="title__client">Данные Клиента</v-card-title>
              <ul>
                <li v-if="showAll">Имя: {{ order.customer.name }}</li>
                <li v-if="showAll">Телефон: {{ order.customer.phone }}</li>
                <li v-if="showAll">id: {{ order.customer.id }}</li>
              </ul>
            </div>
            <v-divider class="horizontal-line"></v-divider>
            <div class="vertical-container vertical-container-secondary">
              <div class="items-order">Статус заказа:</div>
              <div class="items-order">Создан в: {{ order.createdTime }}</div>
              <div v-if="showAll" class="items-order">{{ order.deliveryTerminal.restaurantName }}</div>
              <div v-if="showAll" class="items-order">Доставлен в: {{ order.deliveryDate }}</div>
            </div>
          </div>
          <!-- <v-card-text v-for="item in order.items" :key="item.id"> {{item.name}} </v-card-text> -->
        </v-card>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    urlOrder: "http://efit.biz:8080/operatororderprocessor/api/orders/",
    order: {},
    errors: [],
    showAll: false,
  }),
  async mounted() {
    try {
      const response = await fetch(`${this.urlOrder}${this.$route.params.id}/info`);
      const result = await response.json();
      this.showAll = true;
      this.order = result;
      console.log(this.order);
    } catch (error) {
      this.errors.push(error);
    }
    //   console.log(this.$route.params.id)
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  max-width: 90%;
}
.full-container {
  display: flex;
  justify-content: space-between;
  text-align: start;
  @media (max-width: 930px) {
      flex-direction: column;
  }
}
.vertical-container {
  width: 60%;
  @media (max-width: 930px) {
      width: 100%;
  }
}
.vertical-container-secondary {
  width: 37%;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th {
  border-bottom: 2px solid black;
  border-top: 2px solid black;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:not(.v-data-table__mobile-row),
.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:last-child {
  border-bottom: 1px dotted grey;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > th:last-child,
.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > th:not(.v-data-table__mobile-row) {
  border-bottom: none;
}
.horizontal-line {
  display: none;
  @media (max-width: 930px) {
    display: block;
    margin: 40px 0;
  }
}
.subtitle-list {
  font-weight: 700;
  font-size: 16px !important;
  color: black !important;
}
.border-top {
  border-top: 2px solid black;
}
.title__second-table {
  margin-top: 15px;
  padding: 0 16px;
}
.items-order {
  margin-bottom: 10px;
}
</style>
