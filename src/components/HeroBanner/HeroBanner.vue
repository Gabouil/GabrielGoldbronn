<template>
  <section id="top_page" class="immersive_visuals-container">
    <div class="img_container">
      <div class="absolute_center_container">
        <img
          onmousedown="return false"
          src="../../assets/images/hero-banner-gabriel-goldbronn.png"
        />
        <div class="info_hero_banner_container">
          <h3>Liens importants</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/gabriel-goldbronn">Linkedin</a>
            </li>
            <li><a href="https://github.com/Gabouil">Github</a></li>
            <li><a href="../../../public/CV_Gabriel_Goldbronn.pdf"  download="CV_Gabriel_Goldbronn">CV</a></li>
          </ul>
        </div>
      </div>
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
          >Suite
          <DownArrow />
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

<style scoped lang="sass">
@import "./hero_banner.sass"
</style>
