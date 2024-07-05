<template>
  <header class="flex flex-wrap items-center justify-between w-full">
    <div class="flex flex-wrap items-center h-16 justify-beteen">
      <div class="flex items-center justify-start w-2/3 px-12">
        <NuxtLink to="/" class="text-shadow-sm"
          ><span
            class="text-3xl font-medium tracking-tighter font-display text-secondary-800 dark:text-secondary-400"
            >the</span
          ><span
            class="text-4xl font-bebas font-extrabold text-primary-700 dark:text-primary-300"
            >SHIT</span
          ></NuxtLink
        >
        <input type="search" id="searchBar" class="w-40 hover:active:w-80 `active:w-80 focus:active:w-80 border-primary-100 hover:border-primary-200 focus:border-primary-300 active:border-primary-300 focus:outline-secondary-800 border rounded-md active:outline-secondary-800" placeholder="Search here...">
      </div>
      <div class="flex items-center justify-end w-1/3 gap-8 px-12"></div>
    </div>
    <nav class="flex justify-between w-full px-12 mt-4"><NavLinks /></nav>
  </header>
</template>

<script lang="ts" setup></script>
