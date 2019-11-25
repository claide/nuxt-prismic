<template>
  <nuxt-link :to="link">
    <figure class="image">
      <img :src="work.data.image.url" alt />
    </figure>
    <h4>{{ work.data.title[0].text }}</h4>
    <p>{{ work.data.description[0].text | truncate(125) }}</p>
  </nuxt-link>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";

export default {
  props: ["work"],
  data() {
    return {
      link: ""
    };
  },
  filters: {
    truncate(value, limit) {
      if (value.length > limit) {
        value = value.substring(0, limit - 16) + "...";
      }

      return value;
    }
  },
  created() {
    this.link = LinkResolver(this.work);
  }
};
</script>
