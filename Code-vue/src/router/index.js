import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import UserProfile from '../views/UserProfile.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user/:id',
        name: 'User',
        component: User,
        children: [
            {
                path: 'profile',
                component:UserProfile,
            }
        ],
        beforeEnter: (to, from, next) => {
            // 在进入用户页面之前，可以进行一些验证或数据加载
            if(to.params.id) {
                next();
            } else {
                next({ name: 'Home' }); // 如果没有用户ID，重定向到首页
            }
        }
    }
]
// 这里可以添加更多的路由配置，例如关于页面、登录页面等
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router