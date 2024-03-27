<script setup lang="ts">
import {defineEmits, defineExpose, defineProps, ref} from "vue";
import {useResumeStore} from "@/stores/fresh/resume";
import {storeToRefs} from "pinia";

const resumeStore = useResumeStore()
const{changeVisible} = resumeStore
const {visible} = storeToRefs(resumeStore)

defineProps({})

// 选择简历
const resumeData = ref(1)


const emit = defineEmits(["confirm"])
const closeBoxChild = () => {
  emit("confirm")
  changeVisible(false)
}
</script>

<template>
  <el-dialog class="modal-cover" v-model="visible" width="500" title="选择简历附件">
    <div class="modal">
      <div class="modal-top">
        <span class="model-top-left">选择简历附件</span>
        <span class="model-top-right">前往管理简历附件</span>
      </div>
      <div class="resume-list">
        <el-radio-group v-model="resumeData" class="group">
          <el-radio :value="1">Option A<a>点击查看</a></el-radio>
          <el-radio :value="2">Option B<a>点击查看</a></el-radio>
          <el-radio :value="3">Option C<a>点击查看</a></el-radio>
          <el-radio :value="4">Option D<a>点击查看</a></el-radio>
          <el-radio :value="5">Option E<a>点击查看</a></el-radio>
        </el-radio-group>
      </div>
      <el-button @click="closeBoxChild">关闭</el-button>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
// 投递弹窗
.group {
  flex-direction: column;
}
</style>
