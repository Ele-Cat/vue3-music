import { defineStore } from "pinia";
import axios from 'axios';
import { toast } from "@/utils/feedback";
import { version } from "@/utils/utils";
import _ from "lodash";

const settings = {
  title: "",
  lang: "zh_CN",
  wallpaper: {
    // 输出分类id[36(4K专区)|6(美女模特)|30(爱情美图)|9(风景大片)|15(小清新)|26(动漫卡通)|11(明星风尚)|14(萌宠动物)|5(游戏壁纸)|12(汽车天下)|10(炫酷时尚)|29(月历壁纸)|7(影视剧照)|13(节日美图)|22(军事天地)|16(劲爆体育)|18(BABY秀)|35(文字控)]
    url: "https://bing.img.run/rand.php",
    mask: 8,
    blur: 4,
  }
};

export const useSystemStore = defineStore("musicSystem", {
  state: () => {
    return {
      settings,
      platform: "win",
      activeNav: "home", // 当前聚焦的工具栏目
      version: version,
    };
  },
  actions: {
    changeTitle(title) {
      this.settings.title = title;
    },
    changeNav(nav) {
      this.activeNav = nav
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
      this.getPlatform()
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
