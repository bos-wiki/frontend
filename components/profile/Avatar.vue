<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = withDefaults(
  defineProps<{
    firstName?: string;
    lastName?: string;
    name?: string;
    backgroundColor?: string;
  }>(),
  {
    backgroundColor: '#ddd'
  }
);

const initials = computed(() => {
  if (props.name) {
    const nameParts = props.name.split(' ');
    let first, second;

    if (nameParts.length >= 3) {
      first = nameParts[nameParts.length - 2];
      second = nameParts[nameParts.length - 1];
    } else {
      [first, second] = nameParts;
    }

    return `${first ? first[0] : ''}${second ? second[0] : ''}`;
  }

  return `${props.firstName[0]}${props.lastName[0]}`;
});

</script>

<template>
  <svg viewBox="0 0 100 100" class="avatar">
    <circle cx="50" cy="50" r="48" :fill="backgroundColor"/>
    <text x="50" y="65" font-size="40" text-anchor="middle" fill="textColor">
      {{ initials }}
    </text>
  </svg>
</template>
