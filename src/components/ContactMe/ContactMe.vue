<template>
  <section id="contact_section" class="about_section-container">
    <form
      action="mailto:gabriel.goldbronn@gmail.com?subject=Fomulaire Contact"
      name="envoi"
      method="POST"
      enctype="text/plain"
    >
      <div>
        <label id="email">Mail : </label>
        <input name="email" type="email" size="50" maxlength="50" /><br />
      </div>
      <div>
        <label id="name">Nom : </label>
        <input name="name" type="text" size="50" maxlength="50" /><br />
      </div>
      <div>
        <label id="message">Message : </label>
        <textarea name="message" cols="60" rows="5"></textarea>
      </div>
      <input type="submit" value="Envoyer" name="Envoyer" />
      <input type="reset" name="Submit" value="Effacer" />
    </form>
  </section>
</template>

<script>
export default {
  name: "ContactMe",
};
</script>

<style scoped lang="sass">
@import "contact_me"
</style>
