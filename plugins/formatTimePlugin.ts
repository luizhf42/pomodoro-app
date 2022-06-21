export default defineNuxtPlugin(() => {
	return {
		provide: {
			seconds: (seconds: number) => (seconds < 10 ? `0${seconds}` : seconds),
			minutes: (minutes: number) => (minutes < 10 ? `0${minutes}` : minutes),
		},
	};
});
