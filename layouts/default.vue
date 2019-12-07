<template>
  <v-app dark>
    <Nav />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './partials/Footer'
import Nav from './partials/Nav'
export default {
  components: {
    Footer,
    Nav
  }
}
</script>
