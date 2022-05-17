import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/menu'>Thực Đơn Alacarte</SidebarLink>
        <SidebarLink to='/menutiec'>Thực Đơn Tiệc</SidebarLink>
        <SidebarLink to='/menudoan'>Khách Đoàn</SidebarLink>
        <SidebarLink to='/event'>Sự Kiện</SidebarLink>
        <SidebarLink to='/vip'> Phòng Vip</SidebarLink>
        <SidebarLink to='/tuyendung'> Tuyển Dụng</SidebarLink>
        <SidebarLink to='/contact'> Liên Hệ</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
