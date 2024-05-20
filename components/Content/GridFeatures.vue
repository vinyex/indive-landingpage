<template>
	<div class="flex flex-col items-center gap-5 font-abel">
		<UCard
			:ui="{
				base: 'w-[250px] h-[170px]',
				divide: '',
				shadow: card.shadow,
				body: {
					base: 'flex items-center justify-center h-full',
					background: '',
					padding: 'px-4 py-5 sm:p-6',
				},
			}"
		>
			<component :is="card.icon" />
		</UCard>
		<span class="text-black font-extralight lg:text-[25px] lg:leading-[32px]">{{
			card.label
		}}</span>
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
		label: string;
	};
}>();
</script>
