<template>
	<UContainer>
		<div class="flex flex-col lg:grid lg:grid-cols-2 gap-5">
			<div class="flex flex-col lg:justify-center gap-[40px] max-w-[455px]">
				<div class="flex flex-col">
					<h2
						class="relative uppercase font-rubik font-black text-[#000] text-[40px] lg:leading-[47px] before:absolute before:top-[40px] before:left-[-80px] before:block before:h-[5px] before:w-[84px] before:rotate-[-90deg] before:bg-[#076CF0]"
					>
						We work with big and small companies
					</h2>
				</div>
				<span
					class="max-w-[358px] text-[#868686] lg:text-[16px] lg:leading-[26px] font-open-sans font-normal"
					>Nulla placerat mi vitae mauris varius consequat. Aliquam libero ante,
					consectetur at turpis sit amet, congue Suspendisse porta bibendum
					scelerisque.</span
				>
				<span
					class="max-w-[358px] text-[#868686] lg:text-[16px] lg:leading-[26px] font-open-sans font-normal"
					>Suspendisse porta bibendum scelerisque. Nulla placerat</span
				>
			</div>
			<div class="flex flex-col gap-9">
				<div
					v-for="(item, index) in items"
					:key="`work-feature-${index}`"
					class="flex flex-col gap-3"
				>
					<div class="flex justify-between">
						<span
							class="uppercase font-abel text-[20px] tracking-[2px] lg:leading-[26px]"
							>{{ item.label }}</span
						>
						<span
							class="font-abel text-[20px] tracking-[2px] lg:leading-[26px]"
							>{{ `${item.value}%` }}</span
						>
					</div>
					<div class="relative w-full h-[5px] bg-[#F1F4F8]">
						<div
							class="absolute left-[0px] h-[5px]"
							:style="styleObjectChaining(item)"
						></div>
					</div>
				</div>
			</div>
		</div>
	</UContainer>
</template>

<script setup lang="ts">
const items = [
	{ label: "App Development", value: 92, color: "#F2662F" },
	{ label: "User Inteface", value: 88, color: "#FA2B7E" },
	{ label: "User Experiences", value: 95, color: "#23DDAC" },
	{ label: "Information Architecture", value: 50, color: "#076CF0" },
];

const styleObjectChaining = (item: any) => {
	return {
		background: item.color,
		width: `${item.value}%`,
	};
};
</script>
