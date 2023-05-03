<template>
  <section id="projects_section" class="projects_container">
    <div>
      <h1 class="title">Mes projets</h1>
    </div>
    <ul>
      <li>
        <img
          onmousedown="return false"
          src="../../assets/images/Lyokolympiques/lyokolympique-card.png"
          alt="Carte du projet sur les Lyokolympiques"
        />
        <div class="text_card">
          Ce projet est un site web dédié aux Lyokolympiques, un événement
          tournoi captivant. Sur ce site, vous pourrez visionner les replays et
          les clips vidéos des moments forts de cet événement, ainsi que
          découvrir les participants et consulter les statistiques clés
          associées à cette compétition.
        </div>
      </li>
      <li>
        <img
          onmousedown="return false"
          src="../../assets/images/SalineRoyaleAcademy/SalineRoyaleAcademy-card.png"
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
