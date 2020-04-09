<template>
  <transition name="page">
    <div class="modal is-active" v-show="value">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="container">
          <div class="columns reverse-column-m">
            <div class="column">
              <ul class="menu-list has-text-right">
                <li v-for="work in works" :key="work.id">
                  <nuxt-link
                    :to="'/work/' + work.uid"
                    class="menu-link"
                    @click.native="close"
                  >{{ work.data.title[0].text }}</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="column">
              <ul class="menu-list has-text-right">
                <li>
                  <nuxt-link to="/" class="menu-link" @click.native="close">Home</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about" class="menu-link" @click.native="close">About</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/work" class="menu-link" @click.native="close">Work</nuxt-link>
                </li>
                <li>
                  <a href="mailto:magallen.fc@gmail.com" class="menu-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <button class="modal-close is-large" aria-label="close" @click.prevent="close"></button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import PrismicDOM from "prismic-dom";

export default {
  transition: "page",
  props: {
    value: {
      required: true
    }
  },
  data() {
    return {
      works: {}
    };
  },
  mounted() {
    this.pullWorks();
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    },
    pullWorks(req) {
      var _this = this;
      var apiEndpoint = "https://personal-api.cdn.prismic.io/api/v2";

      Prismic.getApi(apiEndpoint, { req: req })
        .then(api => {
          return api.query(Prismic.Predicates.at("document.type", "work-post"));
        })
        .then(
          response => {
            let workResults = response.results.sort(
              (a, b) =>
                new Date(b.last_publication_date).getTime() -
                new Date(a.last_publication_date).getTime()
            );
            _this.works = workResults;
          },
          function(err) {
            console.log("Something went wrong: ", err);
          }
        );
    }
  }
};
</script>

<style lang="scss">
.modal {
  transition: opacity 0.3s ease;
}

.modal-content {
  transition: all 0.3s ease;
}

.modal-close {
  &.is-large {
    height: 40px;
    max-height: 40px;
    max-width: 40px;
    min-height: 40px;
    min-width: 40px;
    width: 40px;
  }
}

.menu-list {
  text-align: center;

  a {
    font-size: 24px;
    color: #afafaf !important;
    padding-top: 0.7em;
    padding-bottom: 0.7em;

    &:hover {
      background-color: transparent !important;
      color: whitesmoke !important;
    }
  }
}
</style>
