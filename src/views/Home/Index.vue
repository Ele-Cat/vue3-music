<template>
  <div class="home">
    <div class="search-box">
      <el-input v-model="searchText"></el-input>
      <el-button @click="search">搜索</el-button>
    </div>
    <div class="ctrl-box">
      <el-text size="large">播放列表</el-text>
      <div>
        <el-button type="warning">搜索</el-button>
        <el-button type="warning">导入歌单</el-button>
      </div>
    </div>
    <el-table :data="searchList" size="small" stripe height="600">
      <el-table-column type="index" width="50" align="center" />
      <el-table-column prop="address" label="封面" width="100" align="center">
        <template #default="scoped">
          <el-image :src="scoped.row.pic" fit="fill" lazy
            style="width:36px;height:36px;display:block;margin:0 auto;border-radius:8px;">
            <template #error>
              <div class="image-slot">
                <el-icon>
                  <Picture />
                </el-icon>
              </div>
            </template>
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="歌曲" />
      <el-table-column prop="artist" label="歌手" />
      <el-table-column prop="address" label="操作" width="100" align="center">
        <template #default="scoped">
          <el-button type="text">播放</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import axios from 'axios';
import md5 from 'js-md5';
import { musicList } from '@/utils/enums'

const searchText = ref("")
const searchList = ref(musicList)

const search = () => {
  const keyword = searchText.value
  const timestamp = Math.floor(Date.now() / 1000);
  const key = 'QQhhlqilongzhu.cnTest';
  const sign = md5(`${key}${timestamp}${keyword}${key}`);
  const sign_new = md5(`${key}${sign}${timestamp}${keyword}${key}`);
  const url = `https://www.hhlqilongzhu.cn/ziyuan/Music/API/QQ_Search.php?msg=${keyword}&timestamp=${timestamp}&signature=${sign_new}`
  axios.get(url).then(res => {
    searchList.value = res.data.data || []
  })
}
</script>

<style lang="scss">
.home {
  padding: 20px;
  display: flex;
  flex-direction: column;

  .ctrl-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background: var(--ep-fill-color-light);
    color: var(--ep-text-color-secondary);
    font-size: 18px;
  }
}
</style>