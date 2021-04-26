<template>
  <v-app id="inspire">
    <!-- <v-card> -->
      <v-navigation-drawer class="menu" width="280px" v-model="drawer" :mini-variant.sync="mini" permanent>
        <v-list-item class="px-4">
          <v-list-item-icon>
            <img src="../assets/home_black_24dp.svg" alt="" />
          </v-list-item-icon>
          <v-list-item-title @click="$router.push('/')">Главная страница</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item>
            <v-list-item-icon>
              <img src="../assets/streetview_black_24dp.svg" alt="" />
            </v-list-item-icon>

            <ul class="list">
              Поиск улицы по справочнику
              <li @click="$router.push('/variant1')">Вариант 1</li>
              <li @click="$router.push('/variant2')">Вариант 2</li>
              <li @click="$router.push('/variant3')">Вариант 3</li>
            </ul>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <img src="../assets/list_alt_black_24dp.svg" alt="" />
            </v-list-item-icon>
            <ul class="orders" @click="$router.push('/orderlist')" target="_blank">
              Заказы
            </ul>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    <!-- </v-card> -->
  </v-app>
</template>

<script>
export default {
  // el: "#inspire",
  // vuetify: new Vuetify(),
  data() {
    return {
      drawer: true,
      mini: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  height: auto !important;
  z-index: 100;
}
.v-card {
  // position: absolute;
  box-shadow: none;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
  // position: absolute;
}
.v-application--is-ltr .v-list-item__action:last-of-type:not(:only-child),
.v-application--is-ltr .v-list-item__avatar:last-of-type:not(:only-child),
.v-application--is-ltr .v-list-item__icon:last-of-type:not(:only-child) {
  margin-left: 0;
}
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 0;
}
.v-list-item__icon {
  margin: 15px 0;
}
.v-list-item .v-list-item__title {
  cursor: pointer;
}
.v-list-item-icon {
  cursor: pointer;
}
.list {
  text-align: start;
  li {
    padding: 5px 0px 5px 10px;
    list-style-type: none;
    cursor: pointer;
  }
  li:before {
    content: "- ";
  }
}
.orders {
  cursor: pointer;
}
</style>
