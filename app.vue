<template>
  <h1>Pomodoro 🐢</h1>
  <main>
    <Clock
      :timer="timer?.value"
      :minutes="minutes"
      :seconds="seconds"
      :session="session"
    />
    <Buttons
      @start-timer="startTimer()"
      @pause-timer="pauseTimer()"
      @skip-session="skipSession()"
      @reset-timer="resetTimer()"
    />
  </main>
</template>

<script lang="ts" setup>
type Session = "Work" | "Break" | "Long Break";
type Minutes = 25 | 5 | 15;
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

const timer = ref();
const session = ref<Session>("Work");
const minutes = ref<Minutes>(25);
const seconds = ref<number>(0);
const breakSessionsCount = ref<number>(0);

const startTimer = () => {
  timer.value = setInterval(() => {
    seconds.value--;
    changeSecondsTo59AtTheEndOfAMinute();
    checkIfSessionEnded();
  }, 1000);
};

const changeSecondsTo59AtTheEndOfAMinute = () => {
  if (seconds.value < 0) {
    seconds.value = 59;
    minutes.value--;
  }
};

const pauseTimer = () => clearInterval(timer.value);

const checkIfSessionEnded = () => {
  // @ts-ignore
  if (seconds.value == 0 && minutes.value == 0) {
    checkAndPassToNextSession();
  }
};

const checkAndPassToNextSession = () => {
  if (session.value == "Work") {
    breakSessionsCount.value++;
    breakSessionsCount.value % 4 == 0
      ? passToNextSession("Long Break", 15)
      : passToNextSession("Break", 5);
  } else {
    passToNextSession("Work", 15);
  }
};

const passToNextSession = (
  nextSession: Session,
  nextSessionMinutes: Minutes
) => {
  session.value = nextSession;
  minutes.value = nextSessionMinutes;
};

const skipSession = () => {
  checkAndPassToNextSession();
  seconds.value = 0;
};

const resetTimer = () => {
  switch (session.value) {
    case "Work":
      minutes.value = 25;
      break;
    case "Break":
      minutes.value = 5;
      break;
    case "Long Break":
      minutes.value = 15;
      break;
  }
  seconds.value = 0;
  pauseTimer();
};
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