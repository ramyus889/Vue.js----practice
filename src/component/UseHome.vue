<script setup></script>

<template>
  <div class="mt-[100px] mx-[100px]">
    <div class="inline-flex flex-col gap-5">
      <v-btn color="primary" size="large" prependIcon="mdi-account">Primary</v-btn>
      <v-icon class="text-h5 UserBorder" icon="mdi-account" />
      <div class="UserBorder">Frontend</div>
      <v-text-field
        name="name"
        label="label"
        width="300"
        hide-details
        variant="outlined"
        appendInnerIcon="mdi-flash"
      ></v-text-field>
      <UsePrimeButton label="Button" size="large" icon="pi pi-check" />
    </div>
  </div>
</template>
