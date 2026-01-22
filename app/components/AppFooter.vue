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
  <UFooter class="z-10 bg-default" :ui="{ left: 'text-muted text-md' }">
    <template #left>
      <div class="sm:w-3/4">
        <div class="flex items-center justify-between sm:justify-start">
          <div class="flex items-center">
            <div class="mr-3 w-[100px] h-auto">
              <img :src="aboriginalFlag" />
            </div>
            <div>
              {{ footer.credits }}
            </div>
          </div>

          <div class="ml-6 w-[200px]">
            {{ `© ${new Date().getFullYear()} ` }}
          </div>
        </div>
      </div>
    </template>

    <template #right>
      <template v-if="footer?.links">
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
      </template>
    </template>
  </UFooter>
</template>
