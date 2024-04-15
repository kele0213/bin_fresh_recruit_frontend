<script setup lang="ts">
import {defineExpose, ref} from "vue";
import {showBox, showMsg} from "@/utils/message";
import {defineEmits} from "vue";
import {useCommonStore} from "@/stores/common/common";
import {storeToRefs} from "pinia";

const store = useCommonStore()
const {getdict} = store
const {dictData} =  storeToRefs(store)

const dialogVisible = ref(false)
defineExpose({
  getVisible() {
    dialogVisible.value = true
  }
})
const emits = defineEmits(['batchAdd'])
const fileList = ref(null)
// 批量新增
const batchAddFn = (file: any) => {
  console.log(file)
  // 判断类型和大小
  const typeArry = ['.xlsx', '.xls']
  // 上传前检查
  const fileSize = file.size
  const fileName = file.name
  const type = fileName.substring(fileName.lastIndexOf('.'))
  const isFile = typeArry.indexOf(type) > -1
  // 最大1MB
  if (fileSize / 1024 / 1204 > 10) {
    showBox('上传失败', '图片最大仅支持10MB，请重新上传')
    return
  } else if (!isFile) {
    showBox('上传失败', '文件仅支持Excel类型')
    return
  }
  fileList.value = file
}
const confirmUpload = () => {
  if (fileList.value != null) {
    emits('batchAdd', fileList)
    dialogVisible.value = false
  } else {
    showMsg("上传文件为空，请选择文件", "error")
  }
}
const cancel = () => {
  fileList.value = null
}
const cancelDialog = () => {
  cancel()
  dialogVisible.value = false
}
const downloadTemplate = async ()=>{
  await getdict(8)
  if (dictData.value.length != 0){
    await window.open(dictData.value[0])
  }
}
</script>

<template>
  <el-dialog v-model="dialogVisible" title="批量新增" width="40%" align-center @close="cancel">
    <div class="content">
      <div class="content-top"><span>请按照模板上传</span><span class="download" @click="downloadTemplate">点击下载模板</span></div>
      <div class="content-center">
        <el-upload :on-change="batchAddFn" drag action :auto-upload="false" :on-remove="cancel" :limit="1">
          <el-icon class="el-icon--upload">
            <upload-filled/>
          </el-icon>
          <div class="el-upload__text">
            拖动文件到这里 <em>点击上传</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              仅支持Excel文件类型，文件大小最大为10MB
            </div>
          </template>
        </el-upload>
      </div>
      <div class="content-bottom">
        <el-button @click="cancelDialog" class="cancel">取消</el-button>
        <el-button @click="confirmUpload" class="confirm" type="success">确定</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.content-top {
  width: 100%;
  display: flex;
  font-weight: bolder;
  font-size: 16px;
  margin: 5px 0;
  align-items: flex-end;
}

.download {
  margin-left: 10px;
  color: #dd4040;
  font-size: 14px;
}
.download:hover{
  cursor: pointer;
}
.content-center{
  width: 100%;
  margin: 10px 0;
}
.content-bottom{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.cancel{
  margin-right: 20px;
}
.cancel,.confirm{
  width: 20%;
  height: 38px;
}
:deep(.el-button>span){
  letter-spacing: 4px;
}
</style>
