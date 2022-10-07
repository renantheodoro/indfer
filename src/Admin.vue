<template>
  <div></div>
</template>

<script>
// import netlifyIndentityWidget from "netlify-identity-widget";

export default {
  name: 'app-admin',
  // created() {
  //   window.netlifyIndentityWidget = netlifyIndentityWidget;
  //   netlifyIndentityWidget.init();
  // },

  mounted() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "admin/";
          });
        }
      });
    }
  },
};
</script>
