<script setup lang="ts">
import AppNavBar from '../component/AppNavBar.vue';

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  });
};

</script>

<template>
  <div>
    <AppNavBar @navigate="scrollToSection" />
    <router-view />
  </div>
</template>