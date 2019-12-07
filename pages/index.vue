<template>
  <div>
    <v-row>
      <v-col
        v-for="(product, index) in products"
        :key="index"
        cols="6"
        md="4"
        sm="6"
      >
        <v-card class="mx-auto">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title>
            {{ product.name }}
          </v-card-title>

          <v-card-subtitle>
            {{ product.category }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn text>Share</v-btn>
            <v-spacer></v-spacer>
            <v-btn>show</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: null
    }
  },
  async asyncData({ params, app }) {
    const productsResponse = await app.$axios.$get('/api/products/')
    return {
      products: productsResponse.data
    }
  }
}
</script>
