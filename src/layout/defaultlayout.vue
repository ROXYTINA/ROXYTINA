<template>
  <div class="min-h-screen flex flex-col">

    <Header />

    <main class="flex-1">
      <router-view />
    </main>

    <Footer />

  </div>

</template>

<script setup>

import Header from "@/component/header.vue";
import Footer from "@/component/footer.vue";

</script>
