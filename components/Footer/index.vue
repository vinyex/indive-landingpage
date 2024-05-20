<template>
	<div class="relative w-full h-full pt-8 pb-[10rem] bg-black">
		<UContainer>
			<div class="flex flex-col lg:grid lg:grid-cols-3 gap-12">
				<div class="flex flex-col lg:flex-row gap-8">
					<IconsPhone />
					<div class="flex flex-col gap-2">
						<a
							v-for="(tel, idx) in telephones"
							class="text-white text-[16px] leading-[19px] font-rubik font-ultralight"
							:key="`tel-${idx}`"
							:href="`tel:+${tel}`"
							>{{ tel }}</a
						>
					</div>
				</div>
				<div class="flex flex-col lg:flex-row gap-8">
					<IconsEnvelope />
					<div class="flex flex-col gap-2">
						<a
							v-for="(email, idx) in emails"
							class="text-white text-[16px] leading-[19px] font-rubik font-ultralight"
							:key="`email-${idx}`"
							:href="`mailto:${email}`"
							>{{ email }}</a
						>
					</div>
				</div>
				<div class="flex flex-col lg:flex-row gap-8">
					<IconsUser />
					<div class="flex flex-col gap-2">
						<span
							v-for="(address, idx) in addresses"
							class="text-white text-[16px] leading-[19px] font-rubik font-ultralight"
							:key="`address-${idx}`"
							>{{ address }}</span
						>
					</div>
				</div>
			</div>
		</UContainer>
	</div>
</template>

<script setup lang="ts">
const telephones = ["1-677-124-44225", "1-677-124-44225", "1-677-124-44225"];
const emails = ["office@bridge.com", "service@bridge.com", "shop@bridge.com"];
const addresses = ["New York", "Bridgestone side 130", "NY"];
</script>
