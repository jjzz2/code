import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Header.css'; // 我们将样式放在一个单独的 CSS 文件中

const Header = ({ title, onToggleSidebar }) => {
    // 使用 useState 来管理用户下拉菜单的开关状态
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const userMenuRef = useRef(null); // 用于检测菜单外部的点击

    // 点击外部区域关闭菜单的逻辑
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuMRef.current.contains(event.target)) {
                setUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // 菜单项数据
    const menuItems = [
        { text: '个人中心', link: '#', icon: 'fas fa-user-circle' },
        { text: '系统设置', link: '#', icon: 'fas fa-cog' },
        { text: '退出登录', link: '#', icon: 'fas fa-sign-out-alt' },
    ];

    const user = {
        fullName: 'John Doe',
        avatar: 'https://i.pravatar.cc/40',
        role: 'Administrator',
    };

    return (
        <header className="header-content">
            {/* 左侧区域：Logo 和标题 */}
            <div className="header-left">
                <img src="https://reactjs.org/logo-og.png" className="header-logo" alt="logo"/>
                <h1 className="header-title">{title}</h1>
            </div>

            {/* 右侧区域：操作和用户信息 */}
            <div className="header-right">
                {/* 侧边栏切换按钮，通过 props 调用父组件的函数 */}
                <button className="icon-button" onClick={onToggleSidebar} aria-label="Toggle Sidebar">
                    <i className="fas fa-bars"></i>
                </button>

                {/* 用户信息及下拉菜单 */}
                <div className="user-profile" ref={userMenuRef}>
                    <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="user-avatar"
                        onClick={() => setUserMenuOpen(!isUserMenuOpen)}
                    />
                    <span className="user-name">{user.fullName}</span>

                    {/* 下拉菜单：使用 CSS transition 实现动画 */}
                    <div className={`user-menu ${isUserMenuOpen ? 'active' : ''}`}>
                        <div className="menu-header">
                            <strong>{user.fullName}</strong>
                            <small>{user.role}</small>
                        </div>
                        <ul>
                            {menuItems.map((item) => (
                                <li key={item.text}>
                                    <a href={item.link}>
                                        <i className={item.icon}></i>
                                        <span>{item.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

// 使用 PropTypes 定义 props 的类型和默认值
Header.propTypes = {
    title: PropTypes.string,
    onToggleSidebar: PropTypes.func.isRequired,
};

Header.defaultProps = {
    title: 'Fusion Dashboard',
};

export default Header;
