<template>
  <div class="relative">
    <div class="pointer-events-none background absolute inset-0"></div>
    <div
      class="text-slate-200 min-h-screen max-w-screen-xl mx-auto md:px-12 md:py-20 lg:px-24 lg:py-0 lg:flex lg:justify-between lg:gap-4"
    >
      <HeaderComponent />
      <slot />
    </div>
  </div>
</template>

<script setup>
const mouseGlow = () => {
  const background = document.querySelector("#__nuxt");
  background.style.setProperty("--x", `0px`);
  background.style.setProperty("--y", `0px`);

  background.addEventListener("mousemove", (e) => {
    const rect = background.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    background.style.setProperty("--x", `${x}px`);
    background.style.setProperty("--y", `${y}px`);
  });
};
onMounted(() => {
  mouseGlow();
});
</script>

<style>
.background {
  background: radial-gradient(
    600px at var(--x) var(--y),
    rgba(52, 211, 153, 0.15),
    transparent 80%
  );
}

.background::before {
  background: radial-gradient(
    600px at var(--x) var(--y),
    rgba(2, 6, 23, 0.05),
    transparent 80%
  );
}
</style>
