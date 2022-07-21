import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "../layout.css";
import userMenu2 from "./dynamicMenuList";
import userMenu from "./menuList";

function Layout({ children }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.user);
  const menuToBeRendered = userMenu2;
  return (
    <div className="main">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="sidebar-header">SLS</div>
          <div className="menu">
            {menuToBeRendered.map((menu) => {
              const isActive = location.pathname === menu.path;

              return (
                <div
                  className={`d-flex menu-item ${
                    isActive && "active-menu-item"
                  }`}
                >
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
          </div>
        </div>
        <div className="content">
          <div className="header">
            {collapsed ? (
              <i
                className="ri-menu-2-fill header-action-icon"
                onClick={() => {
                  setCollapsed(false);
                }}
              ></i>
            ) : (
              <i
                className="ri-close-fill header-action-icon"
                onClick={() => {
                  setCollapsed(true);
                }}
              ></i>
            )}
            <div className="d-flex align-items-center">
              <i className="ri-notification-3-line header-action-icon px-2"></i>
              <Link className="anchor px-4" to="/profile">
                {user?.name}
              </Link>
            </div>
          </div>

          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
