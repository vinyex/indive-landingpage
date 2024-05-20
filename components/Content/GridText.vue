<template>
	<div class="flex flex-col items-center gap-5 font-abel">
		<UCard
			:ui="{
				base: 'w-[330px] h-[305px]',
				divide: '',
				shadow: card.shadow,
				body: {
					base: 'flex items-center justify-center h-full',
					background: '',
					padding: 'px-4 py-5 sm:p-6',
				},
			}"
		>
			<div class="flex flex-col items-center text-center">
				<component :is="card.icon" />
				<span
					class="pt-8 pb-2 uppercase font-abel text-black font-normal lg:text-[25px] lg:leading-[40px] lg:tracking-[2px]"
					>{{ card.title }}</span
				>
				<span
					class="text-[#868686] font-normal lg:text-[16px] lg:leading-[19px] max-w-[220px]"
					>{{ card.subtitle }}</span
				>
			</div>
		</UCard>
	</div>
</template>

<script setup lang="ts">
import type { ConcreteComponent, ComputedOptions, MethodOptions } from "vue";

defineProps<{
	card: {
		shadow: string;
		icon:
			| string
			| ConcreteComponent<
					{},
					any,
					any,
					ComputedOptions,
					MethodOptions,
					{},
					any
			  >;
		title: string;
		subtitle: string;
	};
}>();
</script>
