<template>
  <NuxtLink v-for="link in links" :key="link.id" :to="link.path"><span class="navlink">{{link.label}}</span></NuxtLink>
</template>

<script lang="ts" setup>
const links = [
{ id: 1, label: 'About', path: '/about' },
{ id: 2, label: 'Stagecraft', path: '/stage' },
{ id: 3, label: 'Community', path: '/board' },
{ id: 4, label: 'Blog', path: '/blog' }
];
</script>

<style scoped>
.router-link.active {
  @apply font-extrabold text-secondary-800 dark:text-secondary-400;
}
</style>