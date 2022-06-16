<template>
  <section class="clock-wrapper">
    <h3>Work Session</h3>
    <h2>
      {{ minutes < 10 ? `0${minutes}` : minutes }}:{{
        seconds < 10 ? `0${seconds}` : seconds
      }}
    </h2>
    <div class="progress-bar">
      <div :style="[{ width: '10%' }]"></div>
      <span></span>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  timer: Function,
  minutes: Number,
  seconds: Number,
});

const clockTimer = props.timer;
</script>

<style lang="postcss" scoped>
.clock-wrapper {
  @apply my-4;
}
h3 {
  @apply text-4xl mb-6;
}

h2 {
  @apply text-6xl mb-2;
}
.progress-bar {
  @apply mx-auto flex items-center bg-gray-600 h-1.5 rounded w-[200px] sm:w-[250px] md:w-[300px];
}

.progress-bar div {
  @apply h-full bg-green-500 rounded;
}

.progress-bar span {
  @apply h-2 w-2 bg-green-500 rounded-full;
  margin-left: -2px;
}
</style>