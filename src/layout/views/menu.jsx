import React from 'react';
import { Link } from 'react-router';

const NavLink = props => (<Link {...props} activeClassName="activated" />);

const Menu = () => (
  <aside className="menu">
    <ul>
      <li><NavLink to="data-source-management">数据源管理</NavLink></li>
      <li><NavLink to="collect-plan-management">采集方案管理</NavLink></li>
      <li><NavLink to="collect-task-management">采集任务管理</NavLink></li>
      <li><NavLink to="system-configuration">系统设置</NavLink></li>
    </ul>
  </aside>
);


export default Menu;
