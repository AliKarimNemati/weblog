<template>
  <div class="d-flex flex-wrap justify-content-between col-10 me-auto mt-5">
    <div class="col-md-2 col-12">
      <select
        @change="handleOption"
        dir="rtl"
        class="w-100 h-100 rounded-3 border border-2"
      >
        <option value="همه">همه</option>
        <option value="پر بازدید ها">پر بازدید ها</option>
      </select>
    </div>
    <SearchBox :articles="articles" :isKeyword="isKeyword" />
  </div>

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
import SearchBox from "../components/SearchBox.vue";

export default {
  name: "Home",
  components: { SearchBox, Article },
  data() {
    return {
      articles: [],
      keyword: "",
      isKeyword: [true, true, true],
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

    handleKeyword(e) {
      let currentKeyword = e.target.value;
      this.articles.forEach((article, index) => {
        for (let i = 0; i < article.keywords.length; i++) {
          if (article.keywords[i] == currentKeyword) {
            this.isKeyword[index] = true;
            break;
          } else {
            this.isKeyword[index] = false;
          }
        }
      });
    },
    handleOption(e) {
      if (e.target.value == "همه") {
        for (let i = 0; i < this.isKeyword.length; i++) {
          this.isKeyword[i] = true;
        }
      } else if (e.target.value == "پر بازدید ها") {
        for (let i = 0; i < this.articles.length; i++) {
          if (this.articles[i].isfavorit == true) {
            this.isKeyword[i] = true;
          } else {
            this.isKeyword[i] = false;
          }
        }
      }
    },
  },
  async mounted() {
    this.articles = (await (await fetch("data/db.json")).json()).articles;
  },
};
</script>
