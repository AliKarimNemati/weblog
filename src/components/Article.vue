<template>
  <div class="card mb-3 p-0 container-fluid col-10 article" dir="rtl" v-if="isKeyword[article.id - 1]">
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
            <a class="text-decoration-none btn btn-primary mt-3" href=""
              >ادامه مقاله</a
            >
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["article", "isKeyword"],
  methods: {
    handleKeyword(e) {
      this.$emit('setKeyword', e.target.value)
      console.log(this.isKeyword);
    },
  },
};
</script>

<style>
.img-article {
  border-radius: 0 5px 5px 0;
}
</style>