<template>
  <header
    class="lg:py-24 lg:w-1/2 flex flex-col justify-between lg:sticky lg:max-h-screen lg:top-0"
  >
    <div class="py-4 lg:py-0">
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
        <span class="text-gray-400">and I'm a </span>Software Engineer!
      </div>

      <button
        type="button"
        class="mt-8 inline-flex items-center justify-center rounded-md border border-emerald-800 p-2 text-gray-200 transition hover:border-emerald-600 hover:bg-emerald-900/40 lg:hidden"
        aria-controls="primary-navigation"
        :aria-expanded="isMobileMenuOpen.toString()"
        aria-label="Toggle navigation menu"
        @click="toggleMobileMenu"
      >
        <span class="sr-only">Toggle navigation menu</span>
        <span class="relative block h-5 w-6">
          <span
            class="absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-200"
            :class="isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''"
          ></span>
          <span
            class="absolute left-0 top-2 h-0.5 w-6 bg-current transition-opacity duration-200"
            :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
          ></span>
          <span
            class="absolute left-0 top-4 h-0.5 w-6 bg-current transition-transform duration-200"
            :class="isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''"
          ></span>
        </span>
      </button>

      <nav
        id="primary-navigation"
        class="nav lg:block"
        :class="isMobileMenuOpen ? 'block' : 'hidden lg:block'"
      >
        <ul
          class="mt-6 uppercase w-max text-xs font-bold tracking-widest lg:mt-16"
        >
          <li v-for="(item, index) in navigation" :key="index">
            <a
              :href="item.to"
              :download="item.download ? '' : null"
              class="group flex items-center py-3 text-gray-400 active"
              @click="closeMobileMenu"
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
    <ul class="flex items-center pb-2 lg:pb-0">
      <li v-for="(item, index) in socialMedia" :key="index">
        <a
          :href="item.to"
          :aria-label="item.label"
          :title="item.label"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            :name="item.name"
            :size="item.size"
            class="mr-6 text-gray-400 hover:text-gray-200"
            aria-hidden="true"
          />
        </a>
      </li>
    </ul>
  </header>
</template>

<script setup>
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const navigation = [
  { name: "About", to: "#about" },
  { name: "Experience", to: "#experience" },
  // { name: "Projects", to: "#projects" },
  { name: "Resume", to: "/Joao_Oliveira_Resume.pdf", download: true },
];

const socialMedia = [
  {
    name: "mdi:github",
    size: "2em",
    to: "https://github.com/jpdemoliveira",
    label: "GitHub profile",
  },
  {
    name: "mdi:linkedin",
    size: "2em",
    to: "https://www.linkedin.com/in/jpdemoliveira/",
    label: "LinkedIn profile",
  },
  {
    name: "mdi:instagram",
    size: "2em",
    to: "https://www.instagram.com/jpdemoliveira/",
    label: "Instagram profile",
  },
];
</script>

<style scoped></style>
