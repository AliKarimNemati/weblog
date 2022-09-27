<template>
  <link rel="stylesheet" href="../css/main.min.css">
    <Navbar />

  <router-view/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar }
}
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
