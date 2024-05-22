<template>
	<UContainer>
		<div class="flex flex-col justify-between lg:flex-row-reverse lg:gap-16">
			<div id="section-5-image" class="max-w-[575px] max-h-[535px] round">
				<NuxtImg class="w-full h-full rounded-xl" src="/images/be-unique.png" />
			</div>
			<div
				id="section-5-text"
				class="flex flex-col lg:justify-center gap-[40px] max-w-[400px]"
			>
				<div class="flex flex-col">
					<h2
						class="relative uppercase font-rubik font-bold text-[#000] text-[60px] lg:leading-[71px] before:absolute before:top-[10px] before:left-[-40px] before:block before:w-[5px] before:h-[43px] before:bg-[#076CF0]"
					>
						Be Unique
					</h2>
					<h5
						class="uppercase font-abel tracking-[2px] text-[#076CF0] font-normal text-[20px] lg:leading-[25.49px]"
					>
						People Really Matter
					</h5>
				</div>
				<span
					class="max-w-[360px] text-[#868686] lg:text-[16px] lg:leading-[26px] font-open-sans font-normal"
					>Nulla placerat mi vitae mauris varius consequat. Aliquam libero ante,
					consectetur at turpis sit amet, congue Suspendisse porta bibendum
					scelerisque.</span
				>
				<span
					class="max-w-[360px] text-[#868686] lg:text-[16px] lg:leading-[26px] font-open-sans font-normal"
					>Suspendisse porta bibendum scelerisque. Nulla placerat</span
				>
				<div class="flex">
					<UButton
						class="font-abel uppercase font-normal tracking-[3px] leading-[15.3px] bg-[#076CF0] hover:bg-[#076CF0] rounded-full py-[12px] px-[31px]"
						>Learn More</UButton
					>
				</div>
			</div>
		</div>
	</UContainer>
</template>
