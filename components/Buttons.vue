<template>
  <section class="buttons">
    <button @click="emit('start-timer')" v-show="timerIsPaused">
      <img src="~/assets/images/play.svg" alt="" />
    </button>
    <button @click="emit('pause-timer')" v-show="!timerIsPaused">
      <img src="~/assets/images/pause.svg" alt="" />
    </button>
    <button @click="emit('skip-session')">
      <img src="~/assets/images/skip.svg" alt="" />
    </button>
    <button @click="emit('reset-timer')">
      <img src="~/assets/images/reset.svg" alt="" />
    </button>
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits([
  "start-timer",
  "pause-timer",
  "skip-session",
  "reset-timer",
]);

defineProps({
  timerIsPaused: Boolean,
});
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