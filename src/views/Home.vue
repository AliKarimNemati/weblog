<template>
  <Navbar @searchContent="searchContent" />

  <!-- <Article
    class="mt-5"
    v-for="(article, i) in articles"
    :key="i"
    :article="article"
    :isKeyword="isKeyword"
    @setKeyword="setKeyword"
  /> -->

  <div dir="rtl" v-for="(article, i) in articles" :key="i">
    <dir
      class="card mb-3 mt-5 p-0 container-fluid col-10 article"
      v-if="isKeyword[article.id - 1]"
    >
      <div class="row g-0">
        <div class="col-md-6">
          <img :src="article.imgSrc" class="img-fluid w-100 img-article" />
        </div>
        <div class="col-md-6">
          <div class="justify-content-between d-none d-md-flex">
            <div class="d-flex">
              <button
                @click="handleKeyword"
                v-for="(keyword, i) in article.keywords"
                :key="i"
                class="text-muted bg-keyword rounded-pill p-2 m-2 btn"
                :value="keyword"
              >
                {{ keyword }}
              </button>
            </div>
            <p class="card-text align-self-center m-3">
              <small class="text-muted">{{ article.date }}</small>
            </p>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
            <p class="card-text">{{ article.shortContent }}</p>
            <nav class="text-center h5">
              <router-link
                class="text-decoration-none btn btn-primary mt-3"
                :to="{ name: 'ArticleContent', params: { id: article.id } }"
                >ادامه مقاله</router-link
              >
            </nav>
          </div>
        </div>
      </div>
    </dir>
  </div>
  <div class="d-flex justify-content-center mt-5 pt-5" v-if="showNotfound">
    <h1
      class="
        display-3
        m-0
        text-primary
        border border-3 border-primary border-top-0 border-start-0 border-end-0
        text-center
        w-25
      "
    >
      Not Found
    </h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Home",
  components: { Navbar },
  data() {
    return {
      articles: [],
      keyword: "",
      isKeyword: [true, true, true],
      showNotfound: false,
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

    searchContent(e) {
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

      for (let i = 0; i < this.isKeyword.length; i++) {
        if (this.isKeyword[i] == true) {
          this.showNotfound = false;
          break;
        } else {
          this.showNotfound = true;
        }
      }
    },
  },
  async mounted() {
    this.articles = (await (await fetch("data/db.json")).json()).articles;
  },
};
</script>
