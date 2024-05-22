<template>
	<UContainer>
		<div class="flex flex-col gap-10">
			<!-- Form Section -->
			<div id="section-9-form" class="flex flex-col lg:grid lg:gap-[10rem]">
				<div class="flex flex-col lg:justify-center gap-[40px] w-full">
					<div class="relative lg:left-[40px] flex flex-col">
						<h2
							class="relative uppercase font-rubik font-bold text-white text-[60px] lg:leading-[71px] before:absolute before:top-[10px] before:left-[-40px] before:block before:w-[5px] before:h-[43px] before:bg-[#076CF0]"
						>
							Support
						</h2>
						<h5
							class="uppercase font-abel tracking-[2px] text-[#076CF0] font-normal text-[20px] lg:leading-[25.49px]"
						>
							Get In Touch
						</h5>
					</div>
					<form>
						<div class="flex flex-col lg:grid lg:grid-cols-3 gap-9 pb-8">
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Name"
								class="text-white bg-black outline-none p-[5px_15px] placeholder:text-white"
								:style="{ 'border-bottom': '1px solid #fff' }"
							/>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Email"
								class="text-white bg-black outline-none p-[5px_15px] placeholder:text-white"
								:style="{ 'border-bottom': '1px solid #fff' }"
							/>
							<input
								type="text"
								name="phone"
								id="phone"
								placeholder="Phone"
								class="text-white bg-black outline-none p-[5px_15px] placeholder:text-white"
								:style="{ 'border-bottom': '1px solid #fff' }"
							/>
						</div>
						<div class="grid">
							<textarea
								name="message"
								id="message"
								placeholder="Message"
								class="text-white bg-black outline-none p-[5px_15px] placeholder:text-white"
								cols="1"
								rows="1"
								:style="{ 'border-bottom': '1px solid #fff' }"
							></textarea>
						</div>
					</form>
					<div class="flex">
						<UButton
							class="font-abel uppercase font-extralight text-[12px] tracking-[3px] leading-[15.3px] bg-[#076CF0] hover:bg-[#076CF0] rounded-full py-[12px] px-[50px]"
							>Send</UButton
						>
					</div>
				</div>
			</div>
			<!-- Contact Us Section -->
			<div></div>
		</div>
	</UContainer>
</template>
