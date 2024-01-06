<template>
	<header class="bg-transparent">
		<nav
			class="container mx-auto flex max-w-6xl items-center justify-between py-6"
			aria-label="Global"
		>
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Vasilis Bakas</span>

				<img
					class="h-8 w-32"
					src="/assets/images/text-logo.svg"
					alt="Vasilis Bakas Logo"
				/>
			</a>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					@click="mobileMenuOpen = true"
				>
					<span class="sr-only">Open main menu</span>
					<Bars3Icon class="h-6 w-6" aria-hidden="true" />
				</button>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				<a
					v-for="item in navigation"
					:key="item.name"
					:href="item.href"
					class="text-lg font-medium leading-6 text-gray-700"
					>{{ item.name }}</a
				>
			</div>
		</nav>
		<Dialog
			as="div"
			class="lg:hidden"
			@close="mobileMenuOpen = false"
			:open="mobileMenuOpen"
		>
			<div class="fixed inset-0 z-10" />
			<DialogPanel
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<img
							class="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt=""
						/>
					</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
						@click="mobileMenuOpen = false"
					>
						<span class="sr-only">Close menu</span>
						<XMarkIcon class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
			</DialogPanel>
		</Dialog>
	</header>
</template>

<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
	{ name: 'About', href: '/about' },
	// { name: 'Articles', href: '/blog' },
	// { name: 'Projects', href: '/projects' },
];

const mobileMenuOpen = ref(false);
</script>
