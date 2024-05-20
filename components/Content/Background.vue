<template>
	<div class="w-full h-full">
		<NuxtImg :src="image" />
	</div>
</template>

<script setup lang="ts">
defineProps<{
	image: string;
}>();
</script>
