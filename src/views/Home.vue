<template>
  <Navbar />
  <Article class="mt-5" />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Article from "../components/Article.vue";
export default {
  name: "Home",
  components: { Navbar, Article },
};
</script>
