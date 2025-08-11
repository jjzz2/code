<template>
    <!-- 1. 使用 <header> 作为根元素，更具语义化 -->
    <header class="header-content">
        <div class="header-left">
            <div class="header-title">
                <!-- Logo 可以是一个 SVG 或图片 -->
                <img src="https://vuejs.org/images/logo.png" class="header-icon" alt="logo"/>
                <!-- 接收父组件传递的 title prop -->
                <h1>{{ title }}</h1>
            </div>
        </div>

        <div class="header-right">
            <!-- 汉堡按钮，用于切换侧边栏 -->
            <div class="header-sideBar">
                <!-- 2. 正确使用 emit 函数来触发事件 -->
                <button @click="emit('toggleSidebar')">
                    <i class="fas fa-bars"></i> <!-- 确保你已引入 Font Awesome 图标库 -->
                </button>
            </div>

            <!-- 用户信息区域 -->
            <div class="header-user">
                <div class="user-info">
                    <!-- 3. 使用 @click 绑定事件 -->
                    <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar" @click="toggleMenu">
                    
                    <!-- 4. 使用 v-if 控制下拉菜单的显示/隐藏 -->
                    <div v-if="isMenuOpen" class="user-menu-container">
                        <!-- 5. 使用 v-for 动态渲染菜单项 -->
                        <ul class="user-menu">
                            <li v-for="item in menuItems" :key="item.text">
                                <a :href="item.link">{{ item.text }}</a>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- 6. 使用 computed 属性显示用户名 -->
                    <span class="user-name">{{ fullName }}</span>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, computed } from 'vue';
// defineProps 和 defineEmits 无需手动导入，它们是编译器宏
// import { defineProps, defineEmits } from 'vue';

// --- 练习点 1: props 传递 ---
defineProps({
    title: {
        type: String,
        default: 'Fusion Dashboard'
    }
});

// --- 练习点 2: emit 事件传递 ---
// defineEmits 返回一个 emit 函数
const emit = defineEmits(['toggleSidebar']);

// --- 练习点 3: 状态管理与 v-for/computed ---

// 用户信息对象
const user = ref({
    firstName: 'John',
    lastName: 'Doe',
});

// 使用 computed 拼接姓名
const fullName = computed(() => {
    return `${user.value.firstName} ${user.value.lastName}`;
});

// 控制下拉菜单的显示状态
const isMenuOpen = ref(false);

// 切换菜单显示状态的函数
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// 用户下拉菜单的数据
const menuItems = ref([
    { text: 'Profile', link: '#' },
    { text: 'Settings', link: '#' },
    { text: 'Logout', link: '#' },
]);

</script>

<style scoped> /* 使用 scoped 来防止样式污染全局 */
.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #f8f9fa;
    border-bottom: 1px solid #e7e7e7;
}

.header-left, .header-right {
    display: flex;
    align-items: center;
    gap: 20px; /* 使用 gap 属性简化间距设置 */
}

.header-title {
    display: flex;
    align-items: center;
    gap: 10px;
}

.header-title h1 {
    margin: 0;
    font-size: 24px;
}

.header-icon {
    width: 32px;
    height: 32px;
}

.header-sideBar button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #333;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 10px;
    /* 7. 添加 position: relative; 以便下拉菜单正确定位 */
    position: relative; 
}

.user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
}

.user-name {
    font-weight: bold;
}

.user-menu-container {
    position: absolute;
    top: 50px; /* 相对于 user-info 的顶部向下 50px */
    right: 0;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    z-index: 100; /* 确保菜单在最上层 */
    width: 150px;
}

.user-menu {
    list-style: none;
    padding: 0;
    margin: 0;
}

.user-menu li a {
    display: block;
    padding: 10px 15px;
    color: #333;
    text-decoration: none;
    transition: background-color 0.2s;
}

.user-menu li a:hover {
    background-color: #f0f0f0;
}
</style>
