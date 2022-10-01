<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary boxShadow" dir="rtl">
    <div class="container-fluid">
      <router-link class="navbar-brand link-light d-flex align-items-center justify-content-between" to="/">
        <p class="mb-2">وبلاگ</p>
        <i class="bi bi-book-fill fs-2 ms-3"></i>
      </router-link>
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
              <a
                class="nav-link link-light"
                data-bs-toggle="modal"
                data-bs-target="#contact"
                >ارتباط با ما</a
              >
            </li>

            <li class="nav-item">
              <button
                class="btn p-2 text-light"
                data-bs-toggle="modal"
                data-bs-target="#login_register"
              >
                ورود / ثبت نام
              </button>
            </li>
          </ul>
          <Clock />
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
import Clock from "../components/Clock.vue";
export default {
  components: { ContactUs, LoginRegister, Clock },
};
</script>

<style scoped>
a {
  cursor: pointer;
}

.nav-link.router-link-exact-active {
  border-bottom: 2px solid white;
}
</style>

