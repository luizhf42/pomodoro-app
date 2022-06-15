<template>
  <h1>Pomodoro 🐢</h1>
  <main>
    <Clock />
    <Buttons />
  </main>
</template>

<script lang="ts" setup>
// @ts-ignore
useHead({
  title: "LH's Pomodoro 🐢",
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: true,
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",
      rel: "stylesheet",
    },
  ],
});
</script>


<style lang="postcss" scoped>
h1 {
  @apply text-4xl font-bold;
}

main {
  @apply flex flex-col justify-center;
  height: calc(100vh - 100px);
}
</style>