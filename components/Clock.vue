<template>
  <section class="clock-wrapper">
    <h3>{{ session }} Session</h3>
    <h2>{{ $minutes(minutes) }}:{{ $seconds(seconds) }}</h2>
    <div class="progress-bar">
      <div :style="[{ width: defineBarWidth() + '%' }]"></div>
      <span></span>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  timer: Function,
  minutes: Number,
  seconds: Number,
  session: String,
});

const { $seconds, $minutes } = useNuxtApp();

const getInitialTimeInSeconds = () => {
  switch (props.session) {
    case "Work":
      return 25 * 60;
    case "Break":
      return 5 * 60;
    case "Long Break":
      return 15 * 60;
  }
};

const defineBarWidth = () => {
  const initialTimeInSeconds = getInitialTimeInSeconds();
  const actualTimeInSeconds = props.minutes * 60 + props.seconds;
  const widthPercentage = (actualTimeInSeconds / initialTimeInSeconds) * 100;
  return widthPercentage;
};
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
  @apply h-2.5 aspect-square bg-green-500 rounded-full ml-[-2px] sm:ml-[-3px] md:ml-[-4px];
}
</style>