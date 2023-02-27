<template>
  <div class="loading_page_container">
    <div class="svg_container">
      <div class="stuff">
        <div class="loader_container">
          <h1 class="loader_text">Loading ...</h1>
          <span class="loader_bar_container"
            ><span class="loader_bar"></span
          ></span>
        </div>
        <BG_Office />
      </div>
      <span class="office"></span>
    </div>
  </div>
</template>

<script>
import BG_Office from "../../assets/images/BG_Office.vue";
export default {
  name: "PageLoader",
  components: { BG_Office },
  data: () => {
    return {
      svg_container: document.getElementsByClassName("svg_container"),
      loader_container: document.getElementsByClassName("loader_container"),
      loader_bar: document.getElementsByClassName("loader_bar"),
    };
  },
  mounted() {
    setTimeout(
      () => this.loader_bar[0].classList.add("loader_bar-active"),
      500
    );
    setTimeout(
      () => this.loader_container[0].classList.add("loader_container-finish"),
      2100
    );
    setTimeout(
      () => this.svg_container[0].classList.add("svg_container-scale"),
      2600
    );
  },
};
</script>

<style lang="sass">
@import "./page_loader.sass"
</style>
