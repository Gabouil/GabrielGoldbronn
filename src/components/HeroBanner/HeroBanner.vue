<template>
  <section id="top_page" class="immersive_visuals-container">
    <div class="img_container">
      <img src="../../assets/images/hero-banner-gabriel-goldbronn.png" />
    </div>
    <div class="text_container">
      <div class="text">
        <div>
          <h1 class="title-spe title-spe1">Gabriel</h1>
          <h1 class="title-spe">Goldbronn</h1>
        </div>
        <div>
          <h2>Développeur Front-end</h2>
          <h2>Ui designer</h2>
        </div>
        <a href="#projects_section" class="btn btn_border-white btn_picto-right"
          >Suite <DownArrow />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import DownArrow from "@/assets/pictos/downArrow.vue";

export default {
  name: "HeroBanner",
  components: { DownArrow },
  data: () => {
    return {};
  },
  mounted() {},
};
</script>

<style lang="sass">
@import "./hero_banner.sass"
</style>
