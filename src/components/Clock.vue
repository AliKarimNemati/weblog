<template>
  <h2 class="clock text-light m-0">{{ clock }} <i class="bi bi-clock"></i>
</h2>
</template>

<script>
export default {
  data() {
    return {
      clock: "",
    };
  },

  mounted() {
    let time = setInterval(() => {
      let t = new Date();
      let hour = t.getHours();
      let min = t.getMinutes();
      let s = t.getSeconds()
      if (min % 10 == min) {
        this.clock = `${hour}:0${min}:${s}`;
      } else {
        this.clock = `${hour}:${min}:${s}`;
      }
    }, 1000);
  },
};
</script>

<style>
</style>