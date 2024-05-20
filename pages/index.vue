<template>
	<div>
		<!-- Wrapper Background & Text -->
		<div class="relative w-full h-full">
			<!-- Background Image -->
			<ContentBackground image="/images/background.png" />
			<!-- Title & Subtitle -->
			<ContentBackgroundText />
		</div>
		<!-- Wrapper Grid Cards -->
		<div class="relative w-full h-full py-8 lg:top-[-6rem]">
			<UContainer>
				<!-- Grid Cards -->
				<div class="flex flex-col lg:grid lg:grid-cols-4 gap-5">
					<ContentGridFeatures
						v-for="(card, index) in cards"
						:key="`card-${index}`"
						:card="card"
					/>
				</div>
			</UContainer>
		</div>
		<!-- About Us -->
		<div class="relative w-full h-full py-8">
			<ContentAboutUs />
		</div>
		<!-- Work Features -->
		<div class="relative w-full h-full py-[8rem]">
			<ContentWorkFeatures />
		</div>
		<!-- Unique Experiences -->
		<div class="relative w-full h-full mb-[8rem]">
			<!-- Background Image -->
			<ContentBackground image="/images/unique-experiences.png" />
			<!-- Title & Subtitle -->
			<ContentBackgroundText>
				<template #title>Unique Experiences</template>
			</ContentBackgroundText>
		</div>
		<!-- Be Unique -->
		<div class="relative w-full h-full py-8">
			<ContentPeopleMatter />
		</div>
		<!-- Products -->
		<div class="relative w-full h-full pb-8 pt-[10rem]">
			<ContentProducts />
		</div>
		<!-- Technology Stack -->
		<div class="relative w-full h-full pt-[8rem] pb-[5rem]">
			<UContainer>
				<div
					class="flex flex-col items-center gap-[4rem] lg:grid lg:grid-cols-4 lg:gap-5"
				>
					<IconsAdobe />
					<IconsWordpress />
					<IconsJquery />
					<IconsEnvato />
				</div>
			</UContainer>
		</div>
		<!-- Wrapper Grid Cards -->
		<div class="relative w-full h-full py-8 bottom-[-6rem] z-[199]">
			<UContainer>
				<!-- Grid Cards -->
				<div class="flex flex-col lg:grid lg:grid-cols-3 gap-5">
					<ContentGridText
						v-for="(card, index) in implementations"
						:key="`card-${index}`"
						:card="card"
					/>
				</div>
			</UContainer>
		</div>
		<!-- Support Form -->
		<div class="relative w-full h-full pb-8 pt-[13rem] bg-black">
			<FormSupport />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { ConcreteComponent, ComputedOptions, MethodOptions } from "vue";

const IconsComputerChart = resolveComponent("IconsComputerChart");
const IconsLayout = resolveComponent("IconsLayout");
const IconsPieChart = resolveComponent("IconsPieChart");
const IconsUserHighlight = resolveComponent("IconsUserHighlight");
const IconsEasyImport = resolveComponent("IconsEasyImport");
const IconsStunningLayouts = resolveComponent("IconsStunningLayouts");
const IconsNoCoding = resolveComponent("IconsNoCoding");

const cards: Array<{
	label: string;
	icon:
		| string
		| ConcreteComponent<{}, any, any, ComputedOptions, MethodOptions, {}, any>;
	shadow: string;
}> = [
	{
		label: "Countless Layout",
		icon: IconsLayout,
		shadow: "shadow-[0px_15px_60px_0px_#4091FB]",
	},
	{
		label: "Easy to customize",
		icon: IconsPieChart,
		shadow: "shadow-[0px_15px_60px_0px_#7FE7C6]",
	},
	{
		label: "Live customizer",
		icon: IconsComputerChart,
		shadow: "shadow-[0px_15px_60px_0px_#DF8CC4]",
	},
	{
		label: "Fully responsive",
		icon: IconsUserHighlight,
		shadow: "shadow-[0px_15px_60px_0px_#F4A382]",
	},
];

const implementations: Array<{
	title: string;
	subtitle: string;
	icon:
		| string
		| ConcreteComponent<{}, any, any, ComputedOptions, MethodOptions, {}, any>;
	shadow: string;
}> = [
	{
		title: "Easy Import",
		subtitle:
			"Nulla placerat mi vitae mauris varius . Aliquam libero ante, consectetur at.",
		icon: IconsEasyImport,
		shadow: "shadow-[0px_15px_60px_0px_#4091FB]",
	},
	{
		title: "Stunning Layouts",
		subtitle:
			"Nulla placerat mi vitae mauris varius . Aliquam libero ante, consectetur at.",
		icon: IconsStunningLayouts,
		shadow: "shadow-[0px_15px_60px_0px_#7FE7C6]",
	},
	{
		title: "No Coding",
		subtitle:
			"Nulla placerat mi vitae mauris varius . Aliquam libero ante, consectetur at.",
		icon: IconsNoCoding,
		shadow: "shadow-[0px_15px_60px_0px_#DF8CC4]",
	},
];
</script>
