<template>
	<div class="absolute top-0 h-full w-full">
		<div class="relative h-full w-full">
			<UContainer class="flex items-center h-full">
				<div class="flex flex-col gap-5 lg:max-w-[511px]">
					<h1
						class="font-rubik uppercase text-white font-bold text-[30px] lg:text-[80px] lg:leading-[95px]"
					>
						<slot name="title">innovation that drives emotion</slot>
					</h1>
					<h5
						class="font-abel uppercase text-[#868686] text-[15px] lg:text-[30px] lg:leading-[22px]"
					>
						<slot name="subtitle">the next level</slot>
					</h5>
				</div>
			</UContainer>
		</div>
	</div>
</template>
