<template>
  <header>
    <a href="#top_page"><LogoGabrielGoldbronn /></a>
    <nav>
      <ul>
        <li><a href="#projects_section">Mes projets</a></li>
        <li><a href="#about_section">Plus sur moi</a></li>
        <li><a href="#contact_section">Contact</a></li>
      </ul>
    </nav>
    <span :class="{ change_color: scrollPosition > 50 }" />
  </header>
</template>

<script>
import LogoGabrielGoldbronn from "@/assets/pictos/logoGabrielGoldbronn.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: "Header",
  components: { LogoGabrielGoldbronn },
  data: () => {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped lang="sass">
@import "./header.sass"
</style>
