<template>
  <nav class="navbar main-nav" role="navigation" aria-label="main navigation">
    <span class="container">
      <span class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">Francis Magallen</nuxt-link>
        <div class="navbar-item is-hidden-desktop">
          <div class="buttons">
            <a class="button is-text" @click.prevent="toggleTheme">{{ switchTheme }}</a>
          </div>
        </div>
        <a href="javascript:;" class="navbar-burger burger" @click.prevent="openMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </span>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-text" @click.prevent="toggleTheme">{{ switchTheme }}</a>
            </div>
          </div>
          <a href="javascript:;" class="navbar-burger burger is-open" @click.prevent="openMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </span>
    <menubar v-model="menuOpen" />
  </nav>
</template>

<script>
import Menubar from "@/components/Menu";
export default {
  components: { Menubar },
  data() {
    return {
      menuOpen: false,
      switchTheme: "🌙"
    };
  },
  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen;
    },
    setTheme(themeName) {
      localStorage.setItem("theme", themeName);
      document.documentElement.className = themeName;
    },
    toggleTheme() {
      if (localStorage.getItem("theme") === "theme-dark") {
        this.setTheme("theme-light");
        this.switchTheme = "🌙";
      } else {
        this.setTheme("theme-dark");
        this.switchTheme = "🌞";
      }
    }
  },
  mounted() {
    if (localStorage.getItem("theme") === "theme-light") {
      this.setTheme("theme-light");
    } else {
      this.setTheme("theme-dark");
    }
  }
};
</script>

<style lang="scss">
.main-nav {
  @media (min-width: 1408px) {
    margin-top: 5rem;
  }
}

.burger {
  &.is-open {
    @media (min-width: 1024px) {
      display: block;
    }
  }
}
</style>
