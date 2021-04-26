<template>
  <div id="app">
    <v-app id="inspire">
      <v-container>
        <v-row align="center">
          <v-select v-model="selectedCity" :items="cities" item-text="name" item-value="id" label="Город"> </v-select>
        </v-row>
        <v-row align="center">
          <v-select :items="streets" v-model="selectedStreet" item-text="name" item-value="id" label="Улица"> </v-select>
        </v-row>
        <v-btn class="btn-searchStreet" depressed @click="getStreets">
          Найти
        </v-btn>
        <v-text-field v-model="selectedStreet"> </v-text-field>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  // el: "#app",
  data: () => ({
    urlCities: "http://efit.biz:8080/iikobizdatastore/api/addresses/cities",
    urlStreets: "http://efit.biz:8080/iikobizdatastore/api/addresses/streets/by-city/",
    cities: [],
    errors: [],
    streets: [],
    selectedCity: "",
    selectedStreet: "",
  }),
  methods: {
    async getStreets() {
      // console.log(this.selectedCity)
      if (this.selectedCity === "") {
        return;
      }
      const response = await fetch(`${this.urlStreets}${this.selectedCity}`);
      const result = await response.json();
      this.streets = [];
      this.selectedStreet = "";
      this.streets.push(...result);
      console.log(this.streets);
    },
  },
  async mounted() {
    try {
      const response = await fetch(this.urlCities);
      const result = await response.json();
      this.cities.push(...result);
      console.log(this.cities);
    } catch (error) {
      this.errors.push(error);
    }
  },
};
</script>

<style lang="scss">
.v-application .align-center {
  margin-bottom: 60px;
}
.v-application .mx-auto {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
.btn-searchStreet {
  height: auto !important;
  padding: 16px 32px !important;
  margin-top: 30px;
}
.city {
  text-align: start;
  padding: 0;
  width: 100%;
}
.row {
  margin: 0 !important;
}
</style>
