<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary" dir="rtl">
    <div class="container-fluid">
      <router-link class="navbar-brand link-light" to="/">وبلاگ</router-link>
      <button
        class="navbar-toggler bg-lightBrown m-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="d-lg-flex d-block justify-content-between w-100 flex-wrap">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link link-light active"
                aria-current="page"
                to="/"
                >خانه</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link link-light" href="#">درباره ما</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link link-light"
                data-bs-toggle="modal"
                data-bs-target="#contact"
                >ارتباط با ما</a
              >
            </li>

            <li class="nav-item">
              <a
                class="btn p-2 text-light"
                data-bs-toggle="modal"
                data-bs-target="#login_register"
                >ورود/ثبت نام</a
              >
            </li>

            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle link-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                مقاله ها
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item text-center" href="#">علمی</a></li>
                <li>
                  <a class="dropdown-item text-center" href="#">برنامه نویسی</a>
                </li>
                <li>
                  <a class="dropdown-item text-center" href="#">محیط زیست</a>
                </li>
              </ul>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <ContactUs
    class="modal fade"
    id="contact"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  />

    <LoginRegister
    class="modal fade"
    id="login_register"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  />
</template>

<script>
import ContactUs from "../components/ContactUs.vue";
import LoginRegister from "../components/LoginRegister.vue";
export default {
  components: { ContactUs, LoginRegister },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>

