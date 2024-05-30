<template>
  <el-icon :size="20">
    <Setting class="icon" @click="settingsVisible = true" />
  </el-icon>
  <el-drawer v-model="settingsVisible" :title="$t('settings.settings')" direction="rtl" append-to-body lock-scroll
    class="settings-drawer">
    <el-text size="large" tag="b">{{ $t("settings.general") }}</el-text>

    <el-form label-width="140px" style="max-width: 600px">
      <el-form-item :label="$t('settings.theme') + ' :'">
        <el-tooltip :content="isDark ? $t('settings.switchToLightMode') : $t('settings.switchToDarkMode')"
          placement="top-start">
          <el-switch v-model="isDark" style="margin-right:10px;">
            <template #active-action>
              <i class="ifishfont ifish-dark"></i>
            </template>
            <template #inactive-action>
              <i class="ifishfont ifish-light"></i>
            </template>
          </el-switch>
        </el-tooltip>
        {{ isDark ? $t('settings.dark') : $t('settings.light') }}
      </el-form-item>
      <el-form-item :label="$t('settings.language') + ' :'">
        <el-select v-model="lang" placeholder="请选择" @change="changeLang" style="max-width: 200px;">
          <el-option :label="language.label" :value="language.value" v-for="language in languages"
            :key="language.value" />
        </el-select>
      </el-form-item>
    </el-form>

    <el-divider />

    <el-text size="large" tag="b">{{ $t("settings.shortCuts") }}</el-text>

    <ShortCuts />

    <el-divider />

    <el-text size="large" tag="b">{{ $t("settings.info") }}</el-text>

    <el-form label-width="140px" style="max-width: 600px">
      <el-form-item label="MyFreeMP3 :">
        {{ packageJson.version }}
      </el-form-item>
      <el-form-item label="Vue :">
        3.4.27
      </el-form-item>
      <el-form-item :label="$t('settings.originCode') + ' :'">
        <a href="https://github.com/Ele-Cat/vue3-music" target="_blank">{{ $t('settings.jump') }}</a>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script setup>
import { getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";
import ShortCuts from '../ShortCuts/Index.vue'
import useStore from "@/store";
const { useSystemStore } = useStore();
const { proxy } = getCurrentInstance();
import { isDark } from "@/hooks/theme";
import { languages } from "@/utils/enums";
import packageJson from '../../../package.json';

const settingsVisible = ref(false)

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
  display: block;
  margin-bottom: 20px;
}

.settings-drawer {
  width: 480px !important;
}

@media screen and (max-width: 768px) {
  .settings-drawer {
    width: 100% !important;
  }
}
</style>