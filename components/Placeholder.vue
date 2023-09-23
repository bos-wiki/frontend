<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="w-full flex justify-center items-center">
    <svg
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="#ddd"/>
      <text
        x="50%"
        y="50%"
        dy=".3em"
        fill="#aaa"
        font-family="Arial, sans-serif"
        font-size="40"
        text-anchor="middle"
      >
        {{ props.text }}
      </text>
    </svg>
  </div>
</template>