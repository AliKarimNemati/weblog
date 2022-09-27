<template  @setArticle="setArticle">
  <div
    class="
      d-flex
      flex-wrap
        justify-content-center
      container
      mt-5
    "
  >
    <h2 class="fw-bold">{{title}}</h2>
  </div>

  <div class="d-flex justify-content-center mt-5">
    <img :src="imgsrc" class="rounded-4" style="height: 340px; width: 85%" />
  </div>

  <div
    class="
      d-flex
      justify-content-md-between justify-content-center
      container
      flex-wrap-reverse
    "
    style="margin: 0 auto"
  >
    <div class="d-flex align-items-center flex-wrap">
      <div>
        <span class="text-secondary ms-2">{{date}}</span>
      </div>
      <div>
        <span class="text-secondary ms-2">زمان مطالعه: 6دقیقه</span>
      </div>
      <div>
        <span class="text-secondary ms-2">642 بازدید</span>
      </div>
    </div>
    <div class="d-flex">
      <a class="text-muted bg-keyword rounded-pill btn p-2 m-2" v-for="(keyword, i) in keywords" :key="i">{{keyword}}</a>
    </div>
  </div>
  <div class="bg-white rounded-4 container mt-5 p-4 p-md-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold">{{ title }}</h2>
    </div>
    <div dir="rtl">
      <p class="para text-secondary">{{ content }}</p>
      <p class="para text-secondary">{{ content }}</p>
      <p class="para text-secondary">{{ content }}</p>
    </div>
  </div>
  <!-- end article content -->

  <!-- start comment section -->
  <section
    class="container bg-white mt-5 p-md-5 p-3 rounded-4 shadow-sm"
    style="box-sizing: border-box"
  >
    <div class="d-flex justify-content-center align-items-center mb-5">
      <p class="text-center h3 fw-bold ms-2"> نظر ثبت شده</p>
      <span class="text-primary fw-bold">افزودن نظر</span>
    </div>
    <form action="" class="bg-light p-md-5 p-3 rounded-4 shadow-sm">
      <div class="mb-3">
        <textarea
          class="form-control p-3 m-md-3"
          id="comment"
          rows="6"
          placeholder="نظر شما"
        ></textarea>
      </div>
      <div class="row">
        <div class="col-md-6 col-12">
          <input
            type="text"
            class="form-control p-3 m-md-3"
            placeholder="آدرس ایمیل"
          />
        </div>
        <div class="col-md-6 col-12">
          <input
            type="text"
            class="form-control p-3 m-md-3 mt-2"
            placeholder="نام و نام خانوادگی"
          />
        </div>
      </div>
      <input
        type="submit"
        value="ثبت نظر"
        class="btn btn-primary text-white p-2"
        style="width: 10rem; display: block; margin: 16px auto"
      />
    </form>
    </section>
  <!-- end comment section -->
  <nav class="traslator bg-primary m-3 rounded-circle">
    <a
      href="#"
      class="fa fa-2x fa-angle-up text-white text-decoration-none"
    ></a>
  </nav>
</template>

<script>
export default {
  props: ["id"],
  methods: {},
  data() {
    return {
      articleContent: {},
      title: "",
      content: "",
      imgsrc: "",
      date: "",
      keywords: []
    };
  },
  async mounted() {
    this.articleContent = (
      await (await fetch("data/db.json")).json()
    ).articles.filter((element) => {
      return element.id == this.id;
    });
    this.title = this.articleContent[0].title;
    this.content = this.articleContent[0].longContent;
    this.imgsrc = this.articleContent[0].imgSrc;
    this.date = this.articleContent[0].date;
    this.keywords = this.articleContent[0].keywords;
  },
};
</script>

<style>
.para {
    line-height: 36px;
    font-size: 18px;
    font-weight: 400px;
}
</style>