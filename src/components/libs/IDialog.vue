<template>
  <div>
    <el-dialog
      ref="modalRef"
      v-model="open"
      :width="width"
      :mask="mask"
      :centered="centered"
      :destroyOnClose="destroyOnClose"
      :zIndex="zIndex"
      draggable
      :wrap-style="{ overflow: 'hidden' }"
      :wrapClassName="wrapClassName"
      :footer="null"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <slot />
      <template #title>
        <div ref="modalTitleRef" class="modal-title">
          {{ title }}<slot name="titleLink"></slot>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  visible: { type: Boolean, default: false },
  title: { type: String, default: "标题" },
  width: { type: [String, Number], default: 520 },
  mask: { type: Boolean, default: true },
  centered: { type: Boolean, default: false },
  destroyOnClose: { type: Boolean, default: false },
  wrapClassName: { type: String, default: "" },
  zIndex: { type: Number, default: 1000 },
});
const emit = defineEmits(["ok", "cancel"]);

const open = ref(false);
watch(
  () => props.visible,
  (newVal) => {
    if (newVal) {
      open.value = true;
    }
  }
);
</script>

<style lang="scss">
.modal-title {
  display: flex;
  align-items: baseline;
  width: 100%;
  cursor: move;
}
</style>
