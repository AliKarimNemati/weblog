<template>
  <div
    class="
      notfound
      d-flex
      flex-wrap
      justify-content-center
      align-items-center
      mt-5
    "
  >
    <h1 class="display-3 m-0 text-primary">404 - Not Found</h1>
    <form dir="rtl" class="notfound-form col-11">
      <input
        class="form-control ms-auto"
        type="search"
        placeholder="جستجو"
        aria-label="Search"
      />
      <router-link class="btn btn-primary d-block ms-auto mt-3" to="/"
        >خانه</router-link
      >
    </form>
  </div>
</template>

<style>
.notfound {
  height: 300px;
}
.notfound h1 {
  border-bottom: 4px solid #e4b1b1;
}
.notfound-form input {
  width: 300px;
}
.notfound-form a {
  width: 100px;
}
</style>