<template>
  <div>
    <div class="modal-dialog" dir="rtl">
      <div class="modal-content bg-light">
        <div class="modal-header">
          <h5 class="modal-title" id="login-register">ثبت نام / ورود</h5>
          <button
            type="button"
            class="btn-close m-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                ورود
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                ثبت نام
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <!-- log in -->
            <form
              class="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
              @submit.prevent="handleLogin"
            >
              <div class="input-group mb-3 mt-3" dir="ltr">
                <input
                  type="text"
                  dir="rtl"
                  class="form-control"
                  placeholder="نام کاربری"
                  aria-label="Username"
                  aria-describedby="username"
                  id="login-username"
                  required
                  v-model="lUserName"
                />
              </div>
              <div class="input-group mb-3" dir="ltr">
                <input
                  type="password"
                  dir="rtl"
                  class="form-control"
                  placeholder="رمز عبور"
                  aria-label="Password"
                  aria-describedby="password"
                  id="login-password"
                  required
                  v-model="lPassword"
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary d-block ms-auto col-4"
              >
                ورود
              </button>
            </form>

            <!-- register -->
            <form
              class="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
              @submit.prevent="handleReg"
            >
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
                v-if="isregister"
              >
                <p class="m-0">ثبت نام با موفقیت انجام شد.</p>

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
              <div class="input-group mb-3 mt-3" dir="ltr">
                <input
                  type="text"
                  dir="rtl"
                  class="form-control"
                  placeholder="ایمیل"
                  aria-label="Email"
                  aria-describedby="email"
                  id="reg-email"
                  v-model="rEmail"
                  required
                />
              </div>
              <div class="input-group mb-3 mt-3" dir="ltr">
                <input
                  type="text"
                  dir="rtl"
                  class="form-control"
                  placeholder="نام کاربری"
                  aria-label="Username"
                  aria-describedby="username"
                  id="reg-username"
                  v-model="rUserName"
                  required
                />
              </div>
              <div class="input-group mb-3" dir="ltr">
                <input
                  type="password"
                  dir="rtl"
                  class="form-control"
                  placeholder="رمز عبور"
                  aria-label="Password"
                  aria-describedby="password"
                  id="reg-password"
                  v-model="rPassword"
                  required
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary d-block ms-auto col-4"
              >
                ثبت اطلاعات
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isregister: false,
      rPassword: "",
      rEmail: "",
      rUserName: "",
      lPassword: "",
      lUserName: "",
    };
  },
  methods: {
    handleReg() {
      this.isregister = true;
      this.rPassword = "";
      this.rEmail = "";
      this.rUserName = "";
      setInterval(() => {
        this.isregister = false;
      }, 3000);
    },
    handleLogin() {
      this.lPassword = "";
      this.lUserName = "";
      this.$router.push({name: 'home'})
    },
  },
};
</script>

<style>
</style>