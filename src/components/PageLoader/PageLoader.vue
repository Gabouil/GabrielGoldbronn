<template>
  <div class="loading_page_container">
    <Loader />
  </div>
</template>

<script>
import Loader from "@/assets/images/loader.vue";

export default {
  name: "PageLoader",
  components: { Loader },
  data: () => {
    return {};
  },
  mounted() {},
};
</script>

<style lang="sass">
@import "./page_loader.sass"
</style>
