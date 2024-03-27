<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useMainStore} from "@/stores/fresh/main";
import {defineEmits, defineProps, onMounted} from "vue";
import router from "@/router";
import {useJobStore} from "@/stores/fresh/job";
import {useInfoStore} from "@/stores/main/company/info";


defineProps({

})


const emit = defineEmits([""])
const clickFn = (data: any) => {

}


</script>

<template>

</template>

<style lang="scss" scoped>

</style>
