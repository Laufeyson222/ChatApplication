import { WechatWorkOutlined } from '@ant-design/icons'
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiUserListBold } from "react-icons/pi";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Avatar } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Tool.css';

export default function Tool() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Xóa thông tin đăng nhập từ local storage
    localStorage.removeItem('isLoggedIn');
    // Chuyển hướng người dùng đến trang đăng nhập hoặc trang chính của ứng dụng
    window.location.href = '/login'; // Thay '/login' bằng đường dẫn đến trang đăng nhập của bạn
};
  return (
    <div className="tool-container">
        <Avatar style={{width:48,height:48,border: '2px solid white'}} src={require('./image/avt.jpg')} />
        <div className='wrapper'>
            <BiMessageSquareDetail className="icon" style={{fontSize:30}}/>
        </div>
        <div className='wrapper'>
            <PiUserListBold className="icon" style={{fontSize:30}} onClick={()=> navigate('/optionlist')} />
            
        </div>
        <div className='wrapper'>
            <IoIosInformationCircleOutline className="icon info" style={{fontSize:30}}/>
        </div>
        <div className='wrapper'>
            <IoSettingsOutline className="icon" style={{fontSize:30}}/>
        </div>
        <div className='wrapper'>
            <HiOutlineLogout onClick={handleLogout} className="icon" style={{fontSize:30}}/>
        </div>
    </div>
  )
}