<script setup lang="ts">
import {} from 'vue'
import Header from '@/components/base/header'
</script>

<template>
  <div class="Fresh">
    <div class="header">
      <Header />
    </div>
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
