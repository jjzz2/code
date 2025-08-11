<template>
    <div>
        <router-link to="/">首页</router-link>
        <router-link :to="{ names: 'User', params:{id:1}}">关于</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goBack = () => {
  router.back() // 返回上一页
}
const goUser = () => {
  router.push({ name: 'User', params: { id: 2 } })
}
</script>