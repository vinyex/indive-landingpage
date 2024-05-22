<template>
	<div v-if="show">
		<Header />
		<NuxtPage />
		<Footer />
	</div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

useHead({
	title: "Innovation Technology",
	meta: [{ name: "description", content: "Innovation Technology." }],
	bodyAttrs: {
		class: "",
	},
	script: [{ innerHTML: "" }],
});

gsap.registerPlugin(ScrollTrigger);

const show = ref(false);

onMounted(() => {
	show.value = true;
	window.scrollTo(0, 0);
});
</script>

<style>
.font-abel {
	font-family: "Abel";
}

.font-rubik {
	font-family: "Rubik";
}

.font-open-sans {
	font-family: "Open Sans";
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
