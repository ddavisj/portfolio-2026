<script setup lang="ts">
import type { container } from "#build/ui";

const { data: page } = await useAsyncData("projects-page", () => {
  return queryCollection("pages").path("/projects").first();
});
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

const { data: projects } = await useAsyncData("projects", () => {
  return queryCollection("projects").all();
});

// Sort by date in desc order
const projectsSorted = projects.value.sort(
  (a, b) => new Date(b.date).getFullYear() - new Date(a.date).getFullYear(),
);

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description,
});
</script>

<template>
  <UPage v-if="page">
    <!-- :links="page.links"       -->
    <UPageHero
      :title="page.title"
      :description="page.description"
      :ui="{
        container: '!pb-12',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start',
      }"
    >
      <template #links>
        <div v-if="page.links" class="flex items-center gap-2">
          <UButton
            icon="i-mdi-github"
            to="https://github.com/ddavisj"
            v-bind="page.links[0]"
            target="_blank"
          />
        </div>
      </template>
    </UPageHero>

    <UPageSection
      :ui="{
        container: '!pt-0',
      }"
    >
      <Motion
        v-for="(project, index) in projectsSorted"
        :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
      >
        <UPageCard
          :title="project.title"
          :description="project.description"
          :to="project.url"
          orientation="horizontal"
          variant="naked"
          :reverse="index % 2 === 1"
          class="group"
          :class="index + 1 === projectsSorted.length ? '' : 'mb-4 sm:mb-0'"
          :ui="{
            wrapper: 'max-sm:order-last',
          }"
          target="_blank"
        >
          <template #leading>
            <span class="text-md text-muted">
              {{ new Date(project.date).getFullYear() }}
            </span>
          </template>
          <template #footer>
            <ULink
              :to="project.url"
              class="text-md text-primary flex items-center"
            >
              View Project
              <UIcon
                name="i-lucide-arrow-right"
                class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </ULink>
          </template>
          <img
            :src="project.image"
            :alt="project.title"
            class="object-cover w-full h-48 rounded-lg"
          />
        </UPageCard>
      </Motion>
    </UPageSection>
  </UPage>
</template>
