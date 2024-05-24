<template>
	<div class="w-full h-full">
		<NuxtImg class="w-full" :src="image" />
	</div>
</template>

<script setup lang="ts">
defineProps<{
	image: string;
}>();
</script>
