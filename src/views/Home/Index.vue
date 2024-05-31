<template>
  <div class="home">
    <!-- <el-input v-model="searchText"></el-input>
    <el-button @click="search">搜索</el-button> -->
    <el-text size="large">播放列表</el-text>
    <el-table :data="searchList" stripe>
      <el-table-column type="index" width="50" align="center" />
      <el-table-column prop="address" label="封面" width="100" align="center">
        <template #default="scoped">
          <el-image :src="scoped.row.pic" :fit="fit" style="width: 44px; height: 44px">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
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

// axios.post("/liumingye/m/api/artist/list").then(res => {
//   console.log(res);
// })
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


// https://www.hhlqilongzhu.cn/ziyuan/Music/API/QQ_Search.php?msg=晴天&timestamp=1717126691&signature=680521e16f50c5a54df61ba558b89aa5
</script>

<style lang="scss">
.home {
  padding: 20px;
}
</style>