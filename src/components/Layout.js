import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../layout.css";
import userMenu2 from "./dynamicMenuList";
import userMenu from "./menuList";
import supaAdminMenu from "./supaAdminMenu";

function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.user);
  const menuToBeRendered = user?.isSuperAdmin ? supaAdminMenu : userMenu2;
  console.log(user);
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
            <div
              className={`d-flex menu-item `}
              onClick={() => {
                localStorage.clear();
                window.location.reload(false);
                navigate("/login");
              }}
            >
              <i className="ri-logout-circle-r-line"></i>
              {!collapsed && <Link to="/login">Logout</Link>}
            </div>
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
