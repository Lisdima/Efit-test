<template>
  <div id="app">
    <v-app id="inspire">
      <v-container>
        <v-row align="center">
          <v-select v-model="selectedCity" :items="cities" item-text="name" item-value="id" label="Город" @change="getStreets"> </v-select>
        </v-row>
        <v-row align="center">
          <v-select :items="streets" v-model="selectedStreet" item-text="name" item-value="id" label="Улица"> </v-select>
        </v-row>
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
      if (this.selectedCity === "") {
        return;
      }
      // console.log(this.selectedCity)
      const response = await fetch(`${this.urlStreets}${this.selectedCity}`);
      const result = await response.json();
      this.streets = [];
      this.selectedStreet = "";
      this.streets.push(...result);
      //   console.log(this.streets);
    },
  },
  async mounted() {
    try {
      const response = await fetch(this.urlCities);
      const result = await response.json();
      this.cities.push(...result);
      //   console.log(this.cities);
    } catch (error) {
      this.errors.push(error);
    }
  },
};
</script>
