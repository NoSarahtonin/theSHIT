<template>
  <div>
<NavBar />
    <slot />
  </div>
</template>

<script setup>
const viewport = useViewport()
</script>