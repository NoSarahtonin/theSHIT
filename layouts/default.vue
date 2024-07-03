<template>
  <div>
<NavBar v-if="viewport.isGreaterOrEquals('desktop')" />
    <slot />
    <NavDrawer v-if="viewport.isLessThan('desktop')" />
  </div>
</template>

<script setup>
const viewport = useViewport()
</script>