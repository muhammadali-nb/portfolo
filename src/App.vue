<script setup>
import './assets/styles.css'

</script>

<template>

  <router-view v-slot={Component}>
    <component :is="Component"/>
  </router-view>

</template>

