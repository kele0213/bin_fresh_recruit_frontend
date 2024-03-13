import Vue from 'vue'
import type { Message } from 'element-plus'
declare module '@vue/runtime-core' {
  // 扩展全局变量的接口内容，需要扩展ComponentCustomProperties这个接口，不要乱改成别的
  interface ComponentCustomProperties {
    $filter: {
      formatUTCtoTime: (time: string) => string
    }
  }
}
