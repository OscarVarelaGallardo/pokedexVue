<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$router.push("/");
  },
};
</script>
