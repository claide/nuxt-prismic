<template>
  <div class="container page">
    <section class="section section-narrow has-text-centered">
      <h1>{{ $prismic.richTextAsPlain(workContent.title) }}</h1>
      <br />
      <p>{{ $prismic.richTextAsPlain(workContent.description) }}</p>
    </section>
    <!-- Begin loop work posts -->
    <section class="section work-sample">
      <div
        class="columns is-variable is-8-widescreen"
        v-for="(group, i) in workGroups"
        :key="group.id"
      >
        <div
          class="column"
          v-for="work in works.slice(i * itemsPerRow, (i + 1) * itemsPerRow)"
          :key="work.id"
          v-bind:work="work"
        >
          {{ work.url }}
          <work-widget :work="work" />
        </div>
      </div>
    </section>
    <div class="has-text-centered">
      <a href="https://dribbble.com/francism" class="is-link">See more</a>
    </div>
    <!-- End loop work posts -->
    <prismic-edit-button :documentId="documentId" />
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import PrismicDOM from "prismic-dom";
import WorkWidget from "~/components/WorkWidget.vue";

export default {
  components: { WorkWidget },
  head() {
    return {
      title: "Francis Magallen — Works",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "I love to create memorable work for a modern world."
        }
      ]
    };
  },
  data() {
    return {
      itemsPerRow: 2
    };
  },
  computed: {
    workGroups() {
      return Array.from(
        Array(Math.ceil(this.works.length / this.itemsPerRow)).keys()
      );
    }
  },
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });
      // Query to get work page content
      const document = await api.getSingle("work");
      let workContent = document.data;

      // Query work posts
      const workPosts = await api.query(
        Prismic.Predicates.at("document.type", "work-post"),
        { orderings: "[document.last_publication_date desc]" }
      );

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      return {
        workContent,
        documentId: document.id,
        works: workPosts.results
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  filters: {
    truncate(value, limit) {
      if (value.length > limit) {
        value = value.substring(0, limit - 16) + "...";
      }

      return value;
    }
  }
};
</script>
