<script setup lang="ts">
defineProps<{
  name: string;
  url: string;
  targetBlank?: boolean;
}>();
</script>

<template>
  <Motion
    :initial="{ opacity: 0, transform: 'translateY(10px)' }"
    :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
    :transition="{ delay: 0.2 * 1 }"
    :in-view-options="{ once: true }"
  >
    <div class="mt-4 mb-12 text-center">
      <NuxtLink
        :to="`${url}`"
        :target="targetBlank ? '_blank' : ''"
        class="inline-flex items-center text-muted hover:dark:text-white hover:text-black bg-muted/80 backdrop-blur-sm rounded-full py-2 px-3 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      >
        <UIcon name="i-heroicons-chevron-right" size="1.2em" />
        <span>{{ name }}</span>
      </NuxtLink>
    </div>
  </Motion>
</template>
