<template>
  <header
    class="lg:py-24 lg:w-1/2 flex flex-col justify-between lg:sticky lg:max-h-screen lg:top-0"
  >
    <div>
      <p class="max-w-xs leading-normal font-light text-gray-400">
        Hi! My name is
      </p>
      <div
        class="mt-4 text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl name"
      >
        João Pedro Oliveira
      </div>
      <div
        class="mt-3 text-lg font-medium tracking-tight text-gray-200 sm:text-xl"
      >
        <span class="text-gray-400">and I'm a </span>Front End Developer!
      </div>

      <nav class="nav lg:block">
        <ul class="mt-16 uppercase w-max text-xs font-bold tracking-widest">
          <li v-for="(item, index) in navigation" :key="index">
            <a
              :href="item.to"
              class="group flex items-center py-3 text-gray-400 active"
            >
              <span
                class="nav-indicator mr-4 h-px w-8 bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-200 group-focus-visible:w-16 group-focus-visible:bg-gray-200 motion-reduce:transition-none"
              ></span>
              <span
                class="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-200 group-focus-visible:text-gray-200"
              >
                {{ item.name }}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <ul class="flex items-center">
      <li v-for="(item, index) in socialMedia" :key="index">
        <a :href="item.to" target="_blank">
          <Icon
            :name="item.name"
            :size="item.size"
            class="mr-6 text-gray-400 hover:text-gray-200"
          />
        </a>
      </li>
    </ul>
  </header>
</template>

<script setup>
const navigation = [
  { name: "About", to: "#about" },
  { name: "Experience", to: "#experience" },
  { name: "Projects", to: "#projects" },
  { name: "Resume", to: "#resume" },
];

const socialMedia = [
  { name: "mdi:github", size: "2em", to: "https://github.com/jpdemoliveira" },
  {
    name: "mdi:linkedin",
    size: "2em",
    to: "https://www.linkedin.com/in/jpdemoliveira/",
  },
  {
    name: "mdi:instagram",
    size: "2em",
    to: "https://www.instagram.com/jpdemoliveira/",
  },
];
</script>

<style scoped></style>
