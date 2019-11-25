<template>
  <div>
    <navbar />
    <nuxt />
    <div class="is-spacing-lg"></div>
    <br />
    <back-to-top />
    <footerbar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footerbar from "@/components/Footerbar";
import BackToTop from "@/components/BackToTop";

export default {
  components: { Navbar, Footerbar, BackToTop }
};
</script>

<style lang="scss">
@import "~assets/scss/style.scss";
</style>
