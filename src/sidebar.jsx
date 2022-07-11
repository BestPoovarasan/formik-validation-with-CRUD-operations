import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          Admin Panel
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/users">
          <i class="fa-solid fa-users"></i>
          <span>Users & validation</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/products">
          <i class="fa-solid fa-store"></i>
          <span>Products</span>
        </Link>
      </li>



      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      <div className="sidebar-card d-none d-lg-flex">
        <i class="fa-solid fa-lock"></i>
        <p className="text-center mb-2">
          <strong>SB Admin Pro</strong> is packed with premium features,
          components, and more!
        </p>
        <a
          className="btn btn-success btn-sm"
          href="https://startbootstrap.com/theme/sb-admin-pro"
        >
          Upgrade to Pro!
        </a>
      </div>
    </ul>
  );
}

export default Sidebar;
