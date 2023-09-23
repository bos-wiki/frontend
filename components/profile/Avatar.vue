<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = withDefaults(
  defineProps<{
    firstName: string;
    lastName: string;
    backgroundColor: string;
  }>(),
  {
    backgroundColor: '#ddd'
  }
);

const initials = computed(() => `${props.firstName[0]}${props.lastName[0]}`);
</script>

<template>
  <svg viewBox="0 0 100 100" class="avatar">
    <circle cx="50" cy="50" r="48" :fill="backgroundColor"/>
    <text x="50" y="65" font-size="40" text-anchor="middle" fill="textColor">
      {{ initials }}
    </text>
  </svg>
</template>
