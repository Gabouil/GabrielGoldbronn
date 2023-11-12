<script>
import HeroBanner from "@/components/HeroBanner/HeroBanner.vue";
import PageLoader from "@/components/PageLoader/PageLoader.vue";
import Projects from "@/components/Projects/Projects.vue";
import Header from "@/components/Header/Header.vue";
import AboutMe from "@/components/AboutMe/AboutMe.vue";
import ContactMe from "@/components/ContactMe/ContactMe.vue";

export default {
  name: "HomeView",
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { ContactMe, AboutMe, Header, Projects, PageLoader, HeroBanner },
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
  <section v-if="!isLoaded">
    <PageLoader />
  </section>
  <section>
    <Header />
    <main>
      <HeroBanner />
      <Projects />
      <AboutMe />
      <ContactMe />
    </main>
  </section>
</template>

<style></style>
