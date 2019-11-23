<template>
  <div class="container page" :data-wio-id="documentId">
    <section class="section section-narrow">
      <h1>{{ $prismic.richTextAsPlain(document.title) }}</h1>
      <br />
      <p>{{ $prismic.richTextAsPlain(document.description) }}</p>
      <div class="tags">
        <span
          class="tag is-primary"
          v-for="slice in slices"
          :key="slice.id"
        >{{ slice.primary.text[0].text }}</span>
      </div>
    </section>
    <div class="is-spacing-md"></div>
    <section class="section work-sample">
      <figure class="image">
        <img :src="document.main_image.url" alt />
      </figure>
    </section>
    <div class="is-spacing-md"></div>
    <div class="has-text-centered">
      <nuxt-link to="/work">Browse more work</nuxt-link>
    </div>
    <!-- <prismic-edit-button :documentId="documentId" /> -->
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
export default {
  head() {
    return {
      title: "Francis Magallen — " + this.document.title[0].text,
      meta: [
        {
          hid: `description`,
          name: "description",
          content: this.document.description[0].text
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: `Francis Magallen - ${this.document.title[0].text}`
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: `Francis Magallen - ${this.document.title[0].text}`
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: `Francis Magallen — ${this.document.description[0].text}`
        },
        {
          hid: "og:title",
          name: "og:title",
          content: `Francis Magallen - ${this.document.title[0].text}`
        },
        {
          hid: "og:description",
          name: "og:description",
          content: `Francis Magallen — ${this.document.description[0].text}`
        }
      ]
    };
  },
  async asyncData({ params, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      // Get post content
      const work = await api.getByUID("work-post", params.uid);

      if (process.client) window.prismic.setupEditButton();

      return {
        document: work.data,
        documentId: work.id,
        slices: work.data.body
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
