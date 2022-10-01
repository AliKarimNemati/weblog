<template>
  <footer dir="rtl" class="bg-primary m-0 mt-5 pt-3">
    <div class="row m-4">
      <div class="col-md-4 col-12">
        <div class="row">
          <router-link
            class="text-decoration-none fw-bold fs-4 text-white text-center mb-2"
            to="/"
            >وبلاگ من</router-link
          >
        </div>
        <div>
          <p class="text-white p-0 text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده،...
          </p>
          <p class="text-white p-0 text-center">
            ارتباط با ما از طریق ایمیل:
            <a href="#" class="text-decoration-none text-white"
              >test@test.com
            </a>
          </p>
        </div>
      </div>
      <div class="col-md-4 col-12 text-center">
        <h4 class="fw-bold fs-4 text-white mb-2">دسترسی سریع</h4>
        <nav class="list-inline d-inline-block">
          <router-link
            class="nav-link link-light active mt-3"
            aria-current="page"
            to="/"
            >خانه</router-link
          >
          <a
            class="nav-link link-light mt-3"
            data-bs-toggle="modal"
            data-bs-target="#contact"
            >ارتباط با ما</a
          >
          <a
            class="nav-link link-light mt-3"
            data-bs-toggle="modal"
            data-bs-target="#login_register"
          >
            ورود / ثبت نام
          </a>
        </nav>
      </div>
      <div class="col-md-4 col-12">
        <h4 class="fw-bold fs-4 text-white text-center mb-2">ارتباط با ما</h4>
        <form id="contact-us" @submit.prevent="handleSubmit">
          <div
            class="
              alert alert-warning alert-dismissible
              fade
              show
              bg-success
              mt-4
            "
            role="alert"
            dir="rtl"
            v-if="isSend"
          >
            <p class="m-0">ارسال با موفقیت انجام شد.</p>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label text-white">ایمیل: </label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              required
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label class="form-label text-white">پیام شما: </label>
            <textarea
              name=""
              id=""
              class="w-100"
              rows="5"
              required
              v-model="message"
            ></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-lightBrown col-4">
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="row text-center border-top border-gray p-4 m-0">
      <p class="text-light m-0">تمام حقوق برای وبسایت محفوظ است - 1401</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isSend: false,
      message: "",
      email: "",
    };
  },
  methods: {
    handleSubmit() {
      this.isSend = true;
      this.message = "";
      this.email = "";
      setInterval(() => {
        this.isSend = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
