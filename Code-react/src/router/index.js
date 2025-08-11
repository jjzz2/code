import { BrowserRouter, Routes, Route, useParams, Link, Outlet } from 'react-router-dom';
import Home from '../views/Home';
import UserProfile from '../views/UserProfile';

// User 组件应独立定义，而不是嵌套在 Router 组件内部
function User() {
  const { id } = useParams(); // 现在可以正确获取参数
  return (
    <div>
      <h2>用户ID: {id}</h2>
      <Link to="profile">查看资料</Link>
      <Outlet /> {/* 嵌套路由的渲染出口 */}
    </div>
  );
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />}>
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;