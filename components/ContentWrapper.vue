<script setup lang="ts">
const props = withDefaults(defineProps<{
  fullWidth?: boolean
}>(), {
  fullWidth: false
});
</script>

<template>
  <main :class="{
    'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8': !props.fullWidth,
    'w-full': props.fullWidth,
  }">
    <slot/>
  </main>
</template>
