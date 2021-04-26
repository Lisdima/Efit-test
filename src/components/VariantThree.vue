<template>
  <div id="app">
    <v-app id="inspire">
      <v-container>
        <v-row align="center">
          <v-select v-model="selectedCity" :items="cities" item-text="name" item-value="id" label="Город"> </v-select>
        </v-row>
        <!-- <v-row align="center">
          <v-select :items="streets" v-model="selectedStreet" item-text="name" item-value="id" label="Улица"> </v-select>
        </v-row> -->
        <v-btn class="btn-searchStreet" depressed @click="getStreets">
          Найти
        </v-btn>
        <v-text-field v-model="selectedStreet"> </v-text-field>

        <v-text-field v-model="searchValue" @input="searchStreet" placeholder="Поиск улицы"> </v-text-field>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Улицы
                </th>
                <th class="text-left">
                  Id
                </th>
              </tr>
            </thead>
            <tbody>
              <tr @click="showId(street.id)" v-for="street in filteredStreet" :key="street.id">
                <td>{{ street.name }}</td>
                <td>{{ street.id }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
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
    searchValue: "",
    filteredStreet: [],
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
      this.filteredStreet.push(...result);
      console.log(this.streets);
    },
    searchStreet() {
      this.filteredStreet = this.streets.filter((street) => street.name.toLowerCase().includes(this.searchValue.toLowerCase()));
      console.log(this.filteredStreet);
    },
    showId(id) {
        this.selectedStreet = id;
    }
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

<style lang="scss" scoped>
td {
  text-align: start;
}
tr {
    cursor: pointer;
}
</style>
