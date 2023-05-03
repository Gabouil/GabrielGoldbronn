<template>
  <section id="contact_section" class="about_section-container">
    <form
      action="https://public.herotofu.com/v1/18f12580-e9db-11ed-b24a-93241516dd10"
      method="post"
      accept-charset="UTF-8"
    >
      <div>
        <label for="name">Nom</label>
        <input name="Name" id="name" type="text" required />
      </div>
      <div>
        <label for="email">Mail</label>
        <input name="Email" id="email" type="email" required />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea name="Message" id="message" required />
      </div>
      <div>
        <input type="submit" value="Envoyer" />
        <div
          style="
            text-indent: -99999px;
            white-space: nowrap;
            overflow: hidden;
            position: absolute;
          "
          aria-hidden="true"
        >
          <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "ContactMe",
  methods() {
    //    curl --request POST \
    // --url https://api.sendinblue.com/v3/smtp/email \
    //        --header 'accept: application/json' \
    // --header 'content-type: application/json' \
    // --data '
    //    {
    //        "sender": {
    //        "name": "Gabriel",
    //            "email": "gabriel@famileat.fr",
    //            "id": 1
    //    },
    //        "to": [
    //        {
    //            "email": "gabriel.goldbronn@gmail.com",
    //            "name": "Gabriel"
    //        }
    //    ],
    //        "params": {
    //        "Email": "New Value",
    //            "Name": "New Value",
    //            "Message": "New Value"
    //    },
    //        "templateId": 1
    //    }
  },
};
</script>

<style scoped lang="sass">
@import "contact_me"
</style>
