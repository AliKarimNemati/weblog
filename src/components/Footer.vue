<template>
  <footer dir="rtl" class="bg-primary m-0 mt-5 pt-3">
    <div class="row m-0">
      <div class="col-md-5 col-12 m-md-5 m-2 me-auto">
        <div class="row">
          <router-link
            class="text-decoration-none fw-bold fs-3 text-white"
            to="/"
            >وبلاگ</router-link
          >
        </div>
        <div>
          <p class="text-white p-0">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده،...
          </p>
          <p class="text-white p-0">
            ارتباط با ما از طریق ایمیل:
            <a href="#" class="text-decoration-none text-white"
              >test@test.com
            </a>
          </p>
        </div>
      </div>
      <div class="col-md-5 col-12 m-md-5 m-2 me-auto">
        <h4 class="fw-bold fs-3 text-white ">ارتباط با ما</h4>
        <form id="contact-us">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label text-white"
              >ایمیل:
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label text-white"
              >پیام شما:
            </label>
            <textarea name="" id="" class="w-100" rows="5"></textarea>
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
      <p class="text-light m-0">
        تمام حقوق برای وبسایت محفوظ است - 1401
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>