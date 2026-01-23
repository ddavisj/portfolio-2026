<script setup lang="ts">
import type { IndexCollectionItem } from "@nuxt/content";

defineProps<{
  page: IndexCollectionItem;
}>();
</script>

<template>
  <!-- <UPageSection
    :title="page.about.title"
    :description="page.about.description"
    :ui="{
      container: '!p-0',
      title: 'text-left text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-md !text-wrap',
    }"
  /> -->
  <MDC :value="page.about.description" />
</template>

<style scoped></style>
