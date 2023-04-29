<script>
import HeroBanner from "@/components/HeroBanner/HeroBanner.vue";
import PageLoader from "@/components/PageLoader/PageLoader.vue";
import Projects from "@/components/Projects/Projects.vue";
import Header from "@/components/Header/Header.vue";

export default {
  name: "HomeView",
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Header, Projects, PageLoader, HeroBanner },
  data: () => {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      setTimeout(() => {
        if (document.readyState === "complete") {
          this.isLoaded = true;
        }
      }, "1500");
    };
  },
};
</script>

<template>
  <main>
    <div v-if="!isLoaded">
      <PageLoader />
    </div>
    <div v-if="isLoaded">
      <Header />
      <HeroBanner />
      <Projects />
    </div>
  </main>
</template>

<style>
</style>
