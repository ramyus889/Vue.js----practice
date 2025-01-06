<script setup>
import { TransitionPresets, useTransition } from '@vueuse/core';
import { rand } from '@vueuse/shared';
import { ref } from 'vue';

const duration = 1500;

const baseNumber = ref(0);

const baseVector = ref([0, 0]);

function easeOutElastic(n) {
  return n === 0
    ? 0
    : n === 1
      ? 1
      : 2 ** (-10 * n) * Math.sin((n * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1;
}

const cubicBezierNumber = useTransition(baseNumber, {
  duration,
  transition: [0.75, 0, 0.25, 1]
});

const customFnNumber = useTransition(baseNumber, {
  duration,
  transition: easeOutElastic
});

const vector = useTransition(baseVector, {
  duration,
  transition: TransitionPresets.easeOutExpo
});

function toggle() {
  baseNumber.value = baseNumber.value === 100 ? 0 : 100;
  baseVector.value = [rand(0, 100), rand(0, 100)];
}
</script>

<template>
  <div>
    <v-btn @click="toggle">Transition</v-btn>

    <p class="mt-2">
      Cubic bezier curve: <b>{{ cubicBezierNumber.toFixed(2) }}</b>
    </p>

    <div class="w-full h-4 max-w-xs px-2 my-2 rounded bg-slate-400">
      <div class="relative h-full">
        <div
          class="absolute w-4 h-4 transform -translate-x-1/2 bg-blue-500 rounded-full"
          :style="{ left: `${cubicBezierNumber}%` }"
        />
      </div>
    </div>

    <p class="mt-2">
      Custom function: <b>{{ customFnNumber.toFixed(2) }}</b>
    </p>

    <div class="w-full h-4 max-w-xs px-2 my-2 rounded bg-slate-400">
      <div class="relative h-full">
        <div
          class="absolute w-4 h-4 transform -translate-x-1/2 bg-blue-500 rounded-full"
          :style="{ left: `${customFnNumber}%` }"
        />
      </div>
    </div>

    <p class="mt-2">
      Vector: <b>[{{ vector[0].toFixed(2) }}, {{ vector[1].toFixed(2) }}]</b>
    </p>

    <div class="w-full max-w-xs p-2 rounded bg-slate-400">
      <div class="relative pb-[30%]">
        <div
          class="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full"
          :style="{ left: `${vector[0]}%`, top: `${vector[1]}%` }"
        />
      </div>
    </div>
  </div>
</template>
