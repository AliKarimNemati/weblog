<template>
  <div
    class="
      notfound
      d-flex
      flex-column
      flex-wrap
      justify-content-center
    "
  >
  <div class="align-self-center">
    <h1 class="display-3 text-primary col-12 text-center d-block">404 - Not Found</h1>
    <router-link class="btn btn-primary d-block ms-auto mt-5 col-5" to="/">خانه</router-link>
  </div>

  </div>
</template>

<style>
.notfound {
  height: 100vh;
}
.notfound h1 {
  border-bottom: 4px solid #e4b1b1;
  margin: 0 auto;
}
</style>