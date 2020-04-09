<template>
  <div class="container page">
    <section class="section section-narrow">
      <h1>{{ $prismic.richTextAsPlain(aboutpageContent.about) }}</h1>
      <br />
      <div v-html="contentParagraphs"></div>
    </section>

    <section class="section section-narrow">
      <h4>EXPERIENCE</h4>
      <hr />
      <ul class="content-exp">
        <li v-for="contentExp in contentExps" :key="contentExp.id">
          <p class="is-size-5 exp-title">{{ contentExp.job_title[0].text }}</p>
          <p class="is-size-6 has-text-grey">{{ contentExp.date_range[0].text }}</p>
        </li>
      </ul>
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
  head() {
    return {
      title: "Francis Magallen — About me",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "I am Francis Claide Magallen a Front-End and UI Developer based in Davao City."
        }
      ]
    };
  },
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      // query to get website about page content
      const document = await api.getSingle("about");
      let aboutpageContent = document.data;
      // const contentParagraphs = aboutpageContent.content;
      const contentParagraphs = PrismicDOM.RichText.asHtml(
        aboutpageContent.content,
        linkResolver,
        htmlSerializer
      );
      const contentExps = aboutpageContent.experience;

      // Load edit button
      if (process.client) window.prismic.setupEditButton();

      // return data to display on the template
      return {
        aboutpageContent,
        contentParagraphs,
        contentExps,
        documentId: document.id
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="scss">
.content-exp {
  .exp-title {
    margin-bottom: 0;
    font-weight: bold;
  }
}
</style>
