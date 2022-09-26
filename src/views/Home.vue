<template>
  <Navbar />
  <Article class="mt-5" v-for="(article , i) in articles" :key="i" :article="article"/>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Article from "../components/Article.vue";
export default {
  name: "Home",
  components: { Navbar, Article },
  data(){
    return{
      articles:[]
    }
  },
  async mounted(){
    this.articles = (await (await fetch('data/db.json')).json()).articles;
  }
};
</script>
