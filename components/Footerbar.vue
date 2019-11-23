<template>
  <footer class="footer">
    <div class="container">
      <section class="section">
        <div class="columns is-mobile is-multiline">
          <div class="column is-half-mobile is-one-quarter-desktop">
            <h4 class="footer-col-title">General</h4>
            <ul>
              <li>
                <nuxt-link to="/about" class="menu-link is-size-6">About</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/work" class="menu-link is-size-6">Work</nuxt-link>
              </li>
              <li>
                <a href="mailto:magallen.fc@gmail.com" class="menu-link is-size-6">Contact</a>
              </li>
            </ul>
          </div>
          <div class="column is-half-mobile is-one-quarter-desktop">
            <h4 class="footer-col-title">Works</h4>
            <ul>
              <li v-for="work in works" :key="work.id">
                <nuxt-link
                  :to="'/work/' + work.uid"
                  class="menu-link is-size-6"
                >{{ work.data.title[0].text }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop">
            <h4 class="footer-col-title">Social</h4>
            <ul>
              <li>
                <a href="https://twitter.com/francismagallen" class="menu-link is-size-6">Twitter</a>
              </li>
              <li>
                <a href="https://dribbble.com/francism" class="menu-link is-size-6">Dribbble</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/fcmagallen/"
                  class="menu-link is-size-6"
                >Linkedin</a>
              </li>
            </ul>
          </div>
          <div class="column is-hidden-desktop is-full-mobile is-half-tablet">
            <a href="https://bulma.io" class="link-text">
              <img
                src="https://bulma.io/images/made-with-bulma.png"
                alt="Made with Bulma"
                width="128"
                height="24"
              />
            </a>
          </div>
        </div>
        <br />
        <p class="footer-copy is-pulled-left">&copy; Francis Claide Magallen. All Rights Reserved.</p>
        <a href="https://bulma.io" class="is-pulled-right link-text is-hidden-mobile">
          <img
            src="https://bulma.io/images/made-with-bulma.png"
            alt="Made with Bulma"
            width="128"
            height="24"
          />
        </a>
      </section>
    </div>
  </footer>
</template>

<style scoped>
a.link-text {
  border-bottom: 0;
}
</style>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import PrismicDOM from "prismic-dom";

export default {
  data() {
    return {
      works: {}
    };
  },
  mounted() {
    this.pullWorks();
  },
  methods: {
    pullWorks(req) {
      var _this = this;
      var apiEndpoint = "https://personal-api.cdn.prismic.io/api/v2";

      Prismic.getApi(apiEndpoint, { req: req })
        .then(function(api) {
          return api.query(Prismic.Predicates.at("document.type", "work-post"));
        })
        .then(
          function(response) {
            _this.works = response.results;
          },
          function(err) {
            console.log("Something went wrong: ", err);
          }
        );
    }
  }
};
</script>
