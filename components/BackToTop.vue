<template>
  <div>
    <a class="back_to_top" @click="backTop" v-show="isVisible" title="Back to top">&uarr;</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    backTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  },
  created() {
    if (process.browser) {
      window.onscroll = ev => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
          // you're at the bottom of the page
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      };
    }
  }
};
</script>

