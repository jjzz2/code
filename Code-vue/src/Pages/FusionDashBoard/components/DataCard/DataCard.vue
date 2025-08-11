<template>
  <div class="data-card">
    <!-- 图标区域：图标和颜色都可以动态传入 -->
    <div class="data-card__icon" :style="{ backgroundColor: color }">
      <i :class="icon"></i>
    </div>
    
    <!-- 内容区域 -->
    <div class="data-card__content">
      <div class="data-card__title">{{ title }}</div>
      <div class="data-card__value">{{ value }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'; // 我们将使用 computed 来动态设置样式

// 1. 直接定义清晰的、独立的 props，而不是一个大的 data 对象
// 这样组件的 API 更清晰，也更容易进行类型检查和设置默认值
const props = defineProps({
  // 图标：使用 Font Awesome class
  icon: {
    type: String,
    default: 'fas fa-chart-bar', // 提供一个默认图标
  },
  // 标题
  title: {
    type: String,
    required: true, // 标题是必需的
  },
  // 数值
  value: {
    type: [String, Number], // 数值可以是字符串或数字
    required: true,
  },
  // 主题颜色
  color: {
    type: String,
    default: '#3b82f6', // 提供一个默认的蓝色
  },
});

// (可选) 如果你想根据颜色动态计算文本颜色，可以使用 computed
// const textColor = computed(() => { ... });
</script>

<style scoped>
/* 使用 scoped 确保样式只作用于当前组件 */
.data-card {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  gap: 20px; /* 图标和内容之间的间距 */
}

.data-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.data-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: #ffffff;
  font-size: 24px;
  flex-shrink: 0; /* 防止图标被压缩 */
}

.data-card__content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.data-card__title {
  font-size: 16px;
  color: #6b7280; /* 次要文字颜色 */
  font-weight: 500;
}

.data-card__value {
  font-size: 28px;
  font-weight: 700;
  color: #1f2937; /* 主要文字颜色 */
}
</style>
