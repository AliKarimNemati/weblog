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
          <div
            class="alert alert-warning alert-dismissible fade show bg-success mt-4"
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
          <form id="contact-us" dir="rtl" @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="email1" class="form-label">ایمیل: </label>
              <input
                type="email"
                class="form-control"
                id="email1"
                aria-describedby="emailHelp"
                required
                v-model="email"
              />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >پیام شما:
              </label>
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
              <button type="submit" class="btn btn-primary col-4">ارسال</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isSend: false,
      message:'',
      email:'',
    }
  },
  methods: {
    handleSubmit() {
      this.isSend = true;
      this.message = '';
      this.email = '';
      setInterval(() => {
        this.isSend = false
      }, 3000);
    },
  },
};
</script>

<style>
</style>