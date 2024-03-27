<script setup lang="ts">
import {} from 'vue'
import FreshInfo from "@/components/fresh/fresh-info";
</script>

<template>
  <div class="freshInfoResult">
    <div class="result">
      <div class="result-left">
        <div class="result-left-top">
          <FreshInfo></FreshInfo>
        </div>
        <div class="result-left-bottom"></div>
      </div>
      <div class="result-right"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.freshInfoResult {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.result {
  width: 80%;
  margin-top: 20px;
}
.result-left-top{
  width: 70%;
}
</style>