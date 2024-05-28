import { defineStore } from "pinia";
import axios from 'axios';
import { toast } from "@/utils/feedback";
import { version } from "@/utils/utils";
import _ from "lodash";

const settings = {
  title: "",
  lang: "zh_CN",
};

export const useSystemStore = defineStore("musicSystem", {
  state: () => {
    return {
      settings,
      activeMenu: "home", // 当前聚焦的工具栏目
    };
  },
  actions: {
    changeTitle(title) {
      this.settings.title = title;
    },
    randomWallpaper() {
      // https://api.lolimi.cn/?action=doc&id=98
      // https://api.lolimi.cn/API/360bz/api.php?type=text
      const action = this.settings.wallpaper.actionList.find(action => action.value === this.settings.wallpaper.action)
      axios.get(action.url).then(res => {
        toast({
          content: "壁纸切换成功！",
        });
        this.settings.wallpaper.url = res.data[action.return];
        this.settings.wallpaper.type = "basic";
      })
    },
    getPlatform() {
      let platform = window.navigator.platform;
      if (platform.toLowerCase().indexOf('win') !== -1) {
        this.platform = "win"
      } else if (platform.toLowerCase().indexOf('mac') !== -1) {
        this.platform = "mac"
      } else {
        console.log('当前操作系统不是 Windows 也不是 macOS');
      }
    },
    ctrlOrCommand() {
      return this.platform === "win" ? "Ctrl" : "⌘";
    },
    reset() {
      console.log('reset', settings);
      this.settings = settings;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});
