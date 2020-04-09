<template>
  <div class="container page">
    <div class="is-spacing-lg"></div>
    <section class="section">
      <div class="columns reverse-column-m">
        <div class="column is-half">
          <h1>{{ title }}</h1>
          <h2 class="page-overview is-size-4 p-tag">{{ desc }}</h2>
          <div v-html="cta"></div>
        </div>
        <div class="column">
          <img :src="document.image.url" alt="Francis Claide Magallen" class="image profile-image" />
        </div>
      </div>
    </section>
    <div class="is-spacing-lg"></div>
    <!-- Begin sample works section -->
    <section class="section work-sample">
      <div class="columns is-variable is-8-widescreen">
        <div v-for="featuredProject in featuredProjects" :key="featuredProject.id" class="column">
          <nuxt-link :to="'/work/' + featuredProject.uid">
            <figure class="image">
              <img :src="featuredProject.data.image.url" alt />
            </figure>
            <h4>{{ featuredProject.data.title[0].text }}</h4>
            <p>{{ featuredProject.data.description[0].text | truncate(125) }}</p>
          </nuxt-link>
        </div>
      </div>

      <div class="has-text-centered">
        <nuxt-link to="/work" class="is-link">Browse my work</nuxt-link>
      </div>
    </section>
    <!-- End sample works section -->
    <div class="is-spacing-lg"></div>
    <section class="section has-text-centered">
      <div v-html="about" class="is-centered-copy"></div>
      <nuxt-link to="/about" class="is-link">Learn more about me</nuxt-link>
    </section>
    <prismic-edit-button :documentId="documentId" />
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import PrismicDOM from "prismic-dom";
import linkResolver from "~/plugins/link-resolver.js";
import htmlSerializer from "~/plugins/html-serializer.js";

export default {
  transitions: "page",
  head() {
    return {
      title: "Francis Magallen — Front-end & UI Developer"
    };
  },
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document = {};
      const result = await api.getSingle("homepage");
      document = result.data;

      // query featured projects
      const featuredProjects = await api
        .query(Prismic.Predicates.at("document.tags", ["featured"]))
        .then(response => {
          return response.results;
        });

      const title = PrismicDOM.RichText.asText(document.title);
      const desc = PrismicDOM.RichText.asText(document.summary);
      const cta = PrismicDOM.RichText.asHtml(
        document.job_extra,
        linkResolver,
        htmlSerializer
      );

      const about = PrismicDOM.RichText.asHtml(document.about_me);
      const workSlices = document.body;

      if (process.client) window.prismic.setupEditButton();

      return {
        document,
        title,
        cta,
        desc,
        about,
        workSlices,
        featuredProjects,
        documentId: result.id
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
