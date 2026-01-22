<script setup lang="ts">
const { footer } = useAppConfig();

const colorMode = useColorMode();
const eaDigitalSrc = computed(() =>
  colorMode.value === "dark"
    ? "/ea-digital-bonw-80sq.png"
    : "/ea-digital-wong-80sq.png",
);

const aboriginalFlag = "/Aboriginal-flag.png";
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center w-2/3 sm:w-full">
      <div class="mr-3 w-[100px] h-auto">
        <img :src="aboriginalFlag" />
      </div>
      <div>
        {{ footer.credits }}
      </div>
    </div>

    <div v-if="footer?.links">
      <UButton
        :avatar="{
          src: eaDigitalSrc,
        }"
        to="https://eadigital.com.au/"
        target="_blank"
        size="xl"
        color="neutral"
        variant="ghost"
      />
      <UButton
        v-for="(link, index) of footer?.links"
        :key="index"
        v-bind="{ size: 'xl', color: 'neutral', variant: 'ghost', ...link }"
      />
    </div>
  </div>

  <div class="text-center mt-8 mb-8">
    {{ `© ${new Date().getFullYear()} ` }}
  </div>
</template>
