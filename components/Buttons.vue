<template>
  <section class="buttons">
    <button><img src="~/assets/images/play.svg" alt="" /></button>
    <button><img src="~/assets/images/pause.svg" alt="" /></button>
    <button><img src="~/assets/images/skip.svg" alt="" /></button>
    <button><img src="~/assets/images/reset.svg" alt="" /></button>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="postcss" scoped>
.buttons {
  @apply mx-auto flex items-center gap-2;
}
button {
  @apply w-11 aspect-square rounded-full flex justify-center items-center;
  background: #121116;
}

img {
  @apply w-6 aspect-square;
}
</style>