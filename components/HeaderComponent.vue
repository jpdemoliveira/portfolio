<template>
  <div class="lg:py-12 lg:w-1/2 flex flex-col justify-between">
    <header>
      <div class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        João Pedro Oliveira
      </div>
      <div
        class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"
      >
        Front End Developer
      </div>
      <p class="mt-4 max-w-xs leading-normal font-light text-gray-400">
        Deserunt nisi ea nulla officia esse do qui magna incididunt elit.
      </p>

      <nav class="nav w-max">
        <ul class="mt-16 uppercase text-xs font-bold tracking-widest">
          <li
            v-for="(item, index) in navigation"
            :key="index"
            class="flex items-center py-3 w-max text-gray-400"
          >
            {{ item.name }}
          </li>
        </ul>
      </nav>
    </header>
    <ul class="flex items-center text-gray-400">
      <li v-for="(item, index) in socialMedia" :key="index">
        <Icon :name="item.name" :size="item.size" class="mr-6" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const navigation = [
  { name: "About", to: "" },
  { name: "Experience", to: "" },
  { name: "Projects", to: "" },
  { name: "Resume", to: "" },
];

const socialMedia = [
  { name: "mdi:github", size: "2em" },
  { name: "mdi:linkedin", size: "2em" },
  { name: "mdi:instagram", size: "2em" },
];
</script>

<style scoped></style>
