<template>
	<div class="w-full bg-[#06090E] font-abel">
		<UContainer class="flex justify-between lg:block">
			<UHorizontalNavigation
				:ui="{
					container: 'gap-9',
					label: 'font-light',
					before: '',
					active: '',
				}"
				:links="links"
			>
				<template #default="{ link }">
					<span
						v-if="link.label !== 'logo'"
						class="relative hidden lg:block group-hover:text-[#076CF0] group-hover:bg-transparent capitalize text-white font-light lg:font-[18px] lg:leading-[23px]"
						:class="{
							'text-[#076CF0]': activeNav === link.label,
						}"
						@click="onClickNav(link)"
						>{{ link.label }}</span
					>
				</template>
				<template #icon="{ link }">
					<Logo v-if="link.icon === 'logo'" class="max-w-[70px] max-h-[70px]" />
				</template>
			</UHorizontalNavigation>
			<div class="absolute block right-[15px] top-[15px] z-[1] lg:hidden">
				<UButton
					class="bg-transparent hover:bg-transparent"
					icon="i-heroicons-bars-3-bottom-left"
					:padded="true"
					@click="isOpen = true"
				/>

				<USlideover v-model="isOpen" prevent-close>
					<UCard
						class="flex flex-col flex-1"
						:ui="{
							body: { base: 'flex-1' },
							ring: '',
							divide: 'divide-y divide-gray-100 dark:divide-gray-800',
						}"
					>
						<template #header>
							<div class="flex items-center justify-between">
								<h3
									class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
								>
									Navigation
								</h3>
								<UButton
									color="gray"
									variant="ghost"
									icon="i-heroicons-x-mark-20-solid"
									class="-my-1"
									@click="isOpen = false"
								/>
							</div>
						</template>

						<div class="flex flex-col gap-3">
							<a
								v-for="(link, index) in links[1]"
								:key="`index-key-${index}`"
								:href="link.to"
								class="relative capitalize after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[1.5px] after:bg-black/[.5]"
								@click="isOpen = false"
								>{{ link.label }}</a
							>
						</div>
					</UCard>
				</USlideover>
			</div>
		</UContainer>
	</div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const activeNav = ref("home");
const links: any = [
	[
		{
			icon: "logo",
			to: "/",
		},
	],
	[
		{
			label: "home",
			to: "#home",
		},
		{
			label: "about us",
			to: "#about-us",
		},
		{
			label: "service",
			to: "#service",
		},
		{
			label: "products",
			to: "#products",
		},
		{
			label: "people",
			to: "#people",
		},
		{
			label: "contact",
			to: "#contact",
		},
	],
];

/**
 * Methods
 */
const onClickNav = (link: any) => {
	activeNav.value = link.label;
};
</script>
