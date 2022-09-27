<template>
  <Article
    class="mt-5"
    v-for="(article, i) in articles"
    :key="i"
    :article="article"
    :isKeyword="isKeyword"
    @setKeyword="setKeyword"
  />
</template>

<script>
import Article from "../components/Article.vue";
export default {
  name: "Home",
  components: { Article },
  data() {
    return {
      articles: [],
      keyword: "",
      isKeyword: [true, true, true, true],
    };
  },

  methods: {
    setKeyword(e) {
      this.articles.forEach((article, index) => {
        for (let i = 0; i < article.keywords.length; i++) {
          if (article.keywords[i] == e) {
            this.isKeyword[index] = true;
            break;
          } else {
            this.isKeyword[index] = false;
          }
        }
      });
    },
  },
  async mounted() {
    this.articles = (await (await fetch("data/db.json")).json()).articles;
  },
};
</script>
