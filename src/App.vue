<!-- <script>
  export default{
    data(){
      return {
        msg:'上海'
      }
    }
  }
</script> -->

<script setup>
import {ref} from 'vue'
// 调用ref函数，定义响应数据
const msg = ref('西安')

import ApiVue from './Api.vue'
import ArticleVue from './Article.vue'

</script>

<template>
  <!-- <h1>{{msg}}</h1>
  <br>
  <ApiVue></ApiVue> -->
  <ArticleVue></ArticleVue>
</template>

<style scoped>
h1{
  color: red;

}
</style>

