<template>
  <div>
    <div class="modal-dialog">
      <div class="modal-content bg-light">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close m-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <h5 class="modal-title" id="staticBackdropLabel">ارتباط با ما</h5>
        </div>
        <div class="modal-body">
          <form id="contact-us" dir="rtl">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">ایمیل: </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >پیام شما:
              </label>
              <textarea name="" id="" class="w-100" rows="5"></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary col-4">ارسال</button>
            </div>
          </form>
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