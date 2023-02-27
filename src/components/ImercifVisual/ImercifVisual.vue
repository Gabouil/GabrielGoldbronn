<template>
  <div class="immersive_visuals-container">
    <div class="svg_container">
      <span class="leaves leaves-left">
        <BG_Leaves />
      </span>
      <span class="leaves leaves-right">
        <BG_Leaves />
      </span>
    </div>
    <div class="text_container">
      <h1>Gabriel Goldbronn</h1>
      <h2>Graphique Dévlopeur</h2>
    </div>
  </div>
</template>

<script>
import BG_Leaves from "@/assets/images/BG_Leaves.vue";

export default {
  name: "ImmersiveVisuals",
  components: { BG_Leaves },
  data: () => {
    return {};
  },
  mounted() {},
};
</script>

<style lang="sass">
@import "./immersive_visuals.sass"
</style>
