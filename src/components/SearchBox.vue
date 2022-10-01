<template>
  <form @submit.prevent="handleSubmit" class="col-md-4 col-12 mt-3 mt-md-0">
    <input
      class="form-control w-100"
      type="search"
      placeholder="جستجو بر اساس کلمه کلیدی"
      aria-label="Search"
      v-model="search"
      dir="rtl"
      required
    />
  </form>

  <div
    class="d-flex justify-content-center mt-5 pt-5 col-12"
    v-if="showNotfound"
  >
    <h1
      class="
        display-3
        m-0
        text-danger
        border border-3 border-primary border-top-0 border-start-0 border-end-0
        text-center
      "
    >
       Not Found
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      error: "",
      showNotfound: false,
    };
  },
  props: ["isKeyword", "articles"],
  methods: {
    handleSubmit() {
      this.articles.forEach((article, index) => {
        for (let i = 0; i < article.keywords.length; i++) {
          if (article.keywords[i] == this.search) {
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
          this.search = "";
        }
      }
    },
  },
};
</script>

<style>
</style>