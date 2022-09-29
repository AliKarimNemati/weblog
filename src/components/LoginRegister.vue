<template>
  <div>
    <div class="modal-dialog " dir="rtl">
      <div class="modal-content bg-light">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">ثبت نام / ورود</h5>
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
            <div
              class="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
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
                />
              </div>
              <button
                type="button"
                class="btn btn-primary d-block ms-auto col-4"
                id="login-btn"
              >
                ورود
              </button>
            </div>

            <!-- register -->
            <div
              class="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              <div class="input-group mb-3 mt-3" dir="ltr">
                <input
                  type="text"
                  dir="rtl"
                  class="form-control"
                  placeholder="ایمیل"
                  aria-label="Email"
                  aria-describedby="email"
                  id="reg-email"
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
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary  d-block ms-auto col-4"
                id="reg-btn"
              >
                ثبت اطلاعات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>