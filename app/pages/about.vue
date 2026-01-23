<script setup lang="ts">
const { data: page } = await useAsyncData("about", () => {
  return queryCollection("about").first();
});
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

const { global } = useAppConfig();

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description,
});
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center !pb-4',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start',
      }"
    />

    <Motion
      :initial="{
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)',
      }"
      :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
      }"
      :transition="{
        duration: 0.6,
        delay: 0.1,
      }"
    >
      <div class="flex max-w-2xl justify-center mt-6 mb-6">
        <NuxtImg
          :src="global.picture?.light"
          class="rounded-full w-1/3 sm:max-w-[200px]"
        />
      </div>
    </Motion>

    <UPageSection
      :ui="{
        container: '!pt-0',
      }"
    >
      <div class="max-w-2xl">
        <MDC :value="page.content" />
      </div>
      <div
        class="flex flex-row justify-center items-center py-10 space-x-[-2rem]"
      >
        <PolaroidItem
          v-for="(image, index) in page.images"
          :key="index"
          :image="image"
          :index
        />
      </div>
    </UPageSection>
  </UPage>
</template>
