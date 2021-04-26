<template>
  <div id="app">
    <v-container class="main-container">
      <v-row class="justify-space-between">
        <v-card v-for="order in orders" :key="order.id">
          <v-img src="https://picsum.photos/450/225?random" max-height="550" contain class="grey darken-4"></v-img>
          <v-card-title class="title order-title">
            {{ order.name }}
          </v-card-title>
          <v-btn @click="openBlank(order.id)" v-if="order.openBlank" class="btn__open-order">Открыть заказ</v-btn>
          <v-btn v-else class="btn__open-order" @click="getOrder(order.id)">Открыть заказ</v-btn>
        </v-card>
      </v-row>
      <v-dialog v-if="dialog" v-model="dialog">
        <v-card>
          <v-card-title class="title-dialog"
            >Заказ №2 ({{ order.orderId }}) от {{ order.createdTime }} <v-divider vertical></v-divider> Тип Заказа: {{ order.orderType.name }}
            <v-btn @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>
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
                      <td class="border-line">{{ item.amount }}</td>
                      <td class="border-line">{{ item.sum }}</td>
                    </tr>
                  </tbody>
                  <tbody class="result-table">
                    <tr>
                      <td class="subtitle-list">Сумма заказа:</td>
                      <td></td>
                      <td>
                        {{ order.sum }}
                      </td>
                    </tr>
                    <tr>
                      <th class="subtitle-list">Сумма скидки:</th>
                      <td></td>
                      <td>
                        {{ order.discount }}
                      </td>
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
                <li>Имя: {{ order.customer.name }}</li>
                <li>Телефон: {{ order.customer.phone }}</li>
                <li>id: {{ order.customer.id }}</li>
                <li>Адрес: {{ order.address.comment }}</li>
              </ul>
            </div>
            <v-divider vertical></v-divider>
            <v-divider class="horizontal-line"></v-divider>
            <div class="vertical-container">
              <div class="event-delivery">
                <div class="icon"><img class="icon-watch" src="../assets/watch_later_black_24dp.svg" alt="" /></div>
                <div class="event-content">
                  <v-card-title> Заказ создан: {{ order.createdTime }} </v-card-title>
                  <v-card-text>Доставить к: {{ order.deliveryDate }}</v-card-text>
                </div>
              </div>
              <div class="event-delivery">
                <div class="icon"><img class="icon-watch" src="../assets/check_circle_outline_black_24dp.svg" alt="" /></div>
                <div class="event-content">
                  <v-card-title> Подтвержден оператором: {{ order.confirmTime }} </v-card-title>
                </div>
              </div>
            </div>
          </div>
          <v-divider></v-divider>
          <v-row align="center" justify="end">
            <v-card-actions>
              <v-btn color="black" outlined text @click="dialog = false">
                Отмена
              </v-btn>
              <v-btn class="success" text @click="dialog = false" color="white" outlined>
                Ок
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    urlOrder: "http://efit.biz:8080/operatororderprocessor/api/orders/",
    order: {},
    orders: [
      { id: "043bbc65-d68c-45f2-b385-fa9351511839", name: "Заказ 1", openBlank: true },
      { id: "d5db63ab-2503-4d84-a9c2-1dd3bd3f7abb", name: "Заказ 2", openBlank: false },
    ],
    dialog: false,
  }),
  methods: {
    async getOrderOne() {
      const response = await fetch(this.urlOrderOne);
      const result = await response.json();
      this.orderOne.push(result);
      console.log(...this.orderOne);
    },
    async getOrder(id) {
      const response = await fetch(`${this.urlOrder}${id}/info`);
      const result = await response.json();
      this.order = {};
      this.order = result;
      this.dialog = true;
      console.log(this.order);
    },
    openBlank(id) {
      window.open(`/order/${id}`, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  max-width: 90%;
}
.full-container {
  padding: 20px 0 60px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 990px) {
    flex-direction: column;
  }
}
.vertical-container {
  width: 48%;
  @media (max-width: 990px) {
    width: 100%;
  }
}
.v-dialog {
  max-height: 95% !important;
}
.order-title {
  border-bottom: 1px solid grey;
}
.title-dialog {
  font-size: 18px !important;
  justify-content: space-between;
}
.btn__open-order {
  margin: 20px 0;
  background-color: rgb(192, 192, 192) !important;
}
.btn__close-dialog {
  background-color: #bebaba !important;
  border-radius: 20px;
}
.justify-space-between {
  justify-content: space-around;
  @media (max-width: 1030px) {
    flex-direction: column;
  }
}
.table-up {
  border-top: 2px solid black;
  border-radius: 0;
  // width: 48%;
}
td {
  text-align: start;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th {
  border-bottom: 2px solid black;
}
.border-line {
  border-bottom: 2px solid black;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:not(.v-data-table__mobile-row),
.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:last-child {
  border-bottom: 0;
}
.subtitle-list {
  font-weight: 700;
  font-size: 16px !important;
  color: black !important;
}
.title__second-table {
  margin-top: 15px;
  padding: 0 16px;
}
.table-bottom {
  border-top: 2px solid black;
  border-radius: 0;
}
.title__client {
  padding: 16px 16px 0;
}
li {
  text-align: start;
}
.v-card {
  @media (max-width: 1030px) {
    width: 70%;
    margin: 20px auto;
  }
}
.horizontal-line {
  display: none;
  @media (max-width: 990px) {
    display: block;
    margin: 40px 0;
  }
}

.icon-watch {
  vertical-align: sub;
}
.event-delivery {
  display: flex;
  align-items: baseline;
}
.event-content {
  text-align: start;
}
.success {
  background-color: green;
}
</style>
