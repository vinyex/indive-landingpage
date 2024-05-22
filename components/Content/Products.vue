<template>
	<UContainer>
		<div
			class="flex flex-col justify-evenly lg:grid lg:grid-cols-2 lg:gap-[10rem]"
		>
			<div id="section-6-image" class="max-w-[410px] max-h-[530px]">
				<NuxtImg class="w-full h-full" src="/images/products.png" />
			</div>
			<div
				id="section-6-text"
				class="flex flex-col lg:justify-center gap-[40px] max-w-[400px]"
			>
				<div class="flex flex-col">
					<h2
						class="relative uppercase font-rubik font-bold text-[#000] text-[60px] lg:leading-[71px] before:absolute before:top-[10px] before:left-[-40px] before:block before:w-[5px] before:h-[43px] before:bg-[#076CF0]"
					>
						Products
					</h2>
					<h5
						class="uppercase font-abel tracking-[2px] text-[#076CF0] font-normal text-[20px] lg:leading-[25.49px]"
					>
						Latest Features
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
