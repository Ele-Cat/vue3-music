<template>
  <el-icon :size="20">
    <Setting class="icon" @click="settingsVisible = true" />
  </el-icon>
  <el-drawer v-model="settingsVisible" :title="$t('settings.settings')" direction="rtl" append-to-body lock-scroll class="settings-drawer">
    <el-text size="large" tag="p">{{ $t("settings.general") }}</el-text>

    <el-form :model="form" label-width="100px" style="max-width: 600px">
      <el-form-item :label="$t('settings.theme') + ' :'">
        <el-tooltip
          :content="isDark ? $t('settings.switchToLightMode') : $t('settings.switchToDarkMode')"
          placement="top-start"
        >
          <el-switch v-model="isDark" style="margin-right:6px;"></el-switch>
        </el-tooltip>
        {{ isDark ? $t('settings.dark') : $t('settings.light') }}
      </el-form-item>
      <el-form-item :label="$t('settings.language') + ' :'">
        <el-select v-model="lang" placeholder="请选择" @change="changeLang" style="max-width: 200px;">
          <el-option :label="language.label" :value="language.value" v-for="language in languages" :key="language.value" />
        </el-select>
      </el-form-item>
    </el-form>

    <el-divider />

    <el-text size="large" tag="p">{{ $t("settings.shortCuts") }}</el-text>

    <el-form :model="formState" label-width="100px">
      <el-form-item label="播放/暂停"> <span>Space</span> </el-form-item>
      <el-form-item label="上一首">
        <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span class="key">←</span>
      </el-form-item>
      <el-form-item label="下一首">
        <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span class="key">→</span>
      </el-form-item>
      <el-form-item label="增加音量">
        <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span class="key">↑</span>
      </el-form-item>
      <el-form-item label="降低音量">
        <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span class="key">↓</span>
      </el-form-item>
      <el-form-item label="打开搜索">
        <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span class="key">M</span>
      </el-form-item>
      <el-form-item label="关闭歌词"> <span>Esc</span> </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script setup>
import { getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";
import useStore from "@/store";
const { useSystemStore } = useStore();
const { proxy } = getCurrentInstance();
import { isDark } from "@/hooks/theme";
import { languages } from "@/utils/enums"

const settingsVisible = ref(true)

const lang = ref(useSystemStore.settings.lang || "zh_CN");

const changeLang = (e) => {
  proxy.$i18n.locale = e;
  useSystemStore.settings.lang = e;
};
</script>

<style lang="scss">
.icon {
  cursor: pointer;
  transition: all .3s;

  &:hover {
    color: var(--ep-color-primary);
  }
}

.ep-text {
  margin-bottom: 20px;
}

.settings-drawer {
  width: 40% !important;
}

@media screen and (max-width: 768px) {
  .settings-drawer {
    width: 100% !important;
  }
}
</style>