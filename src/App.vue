<template>
  <div id="app">
    <div id="nav">
      <router-link to="/dashboard">DashBoard</router-link> /
      <router-link to="/about">About</router-link>
    </div>
    <div class="main">
      <router-view />
    </div>

    <dash-board v-if="false" />
    <about v-if="false" />

    <!-- <dash-board v-if="page === 'dashboard'" />
    <about v-if="page === 'about'" /> -->
  </div>
</template>

<script>
  import About from "./views/About.vue";
  import DashBoard from "./views/DashBoard.vue";

  export default {
    name: "App",
    components: {
      DashBoard,
      About,
    },
    data() {
      return {
        page: "",
      };
    },
    methods: {
      setPage() {
        this.page = location.pathname.slice(1);
        console.log(this.page);
      },
    },
    mounted() {
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          history.pushState({}, "", link.href);
          this.setPage();
        });
      }),
        this.setPage();
      window.addEventListener("popstate", this.setPage);
    },
    beforeDestroy() {
      window.removeEventListener("popstate", this.setPage);
    },
  };
</script>
