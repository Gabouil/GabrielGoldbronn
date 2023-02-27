<script>
import ImmersiveVisuals from "@/components/ImercifVisual/ImercifVisual.vue";
import PageLoader from "@/components/PageLoader/PageLoader.vue";

export default {
  name: "HomeView",
  components: { PageLoader, ImmersiveVisuals },
  data: () => {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    setTimeout(() => (this.isLoaded = true), 4200);
  },
};
</script>

<template>
  <main>
    <div v-if="!isLoaded">
      <PageLoader />
    </div>
    <div v-if="isLoaded">
      <ImmersiveVisuals />
      <ImmersiveVisuals />
    </div>
  </main>
</template>
