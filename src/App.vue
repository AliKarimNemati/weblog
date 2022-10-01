<template>
    <!-- <link rel="stylesheet" href="/css/bootstrap.rtl.min.css">
  <link rel="stylesheet" href="../css/main.min.css" /> -->
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Navbar, Footer },
  methods: {},
};
</script>
<style>
/* nav a {
  font-weight: bold;
  color: #2c3e50;
} */

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
