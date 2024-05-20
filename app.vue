<template>
	<div>
		<Header />
		<NuxtPage />
		<Footer />
	</div>
</template>

<script setup lang="ts">
useHead({
	title: "Innovation Technology",
	meta: [{ name: "description", content: "Innovation Technology." }],
	bodyAttrs: {
		class: "",
	},
	script: [{ innerHTML: "" }],
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
</style>
