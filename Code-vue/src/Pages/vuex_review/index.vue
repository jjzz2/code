<template>
  <div>
    <p>count: {{ $store.state.count }}</p>
    <p>double: {{ $store.getters.doubleCount }}</p>
    <button @click="handleIncrement">+1</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();
const handleIncrement = () => {
    store.commit('increment', 1);
    store.dispatch('fetchUser', 1);
}
</script>