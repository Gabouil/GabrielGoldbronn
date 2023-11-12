<template>
  <section id="projects_section" class="section-container projects_container">
    <div class="title-section">
      <h1 class="title">Mes projets</h1>
    </div>
    <ul>
      <li>
        <img
          onmousedown="return false"
          src="../../assets/images/SalineRoyaleAcademy/SalineRoyaleAcademy-card.png"
          alt="Carte du projet sur Saline Royale Academy"
        />
      </li>
      <li>
        <img
          onmousedown="return false"
          src="../../assets/images/JoyMovies/JoyMovies-card.png"
          alt="Carte du projet sur Saline Royale Academy"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import DownArrow from "@/assets/pictos/downArrow.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projects",
  // eslint-disable-next-line vue/no-unused-components
  components: { DownArrow },
  data: () => {
    return {};
  },
  mounted() {},
};
</script>

<style lang="sass">
@import "projects"
</style>
