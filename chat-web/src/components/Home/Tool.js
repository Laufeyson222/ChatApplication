import { WechatWorkOutlined } from '@ant-design/icons'
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiUserListBold } from "react-icons/pi";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Avatar } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Tool() {
const [isHovered, setHovered] = useState(false);
const [isHovered1, setHovered1] = useState(false);
const [isHovered2, setHovered2] = useState(false);
const [isHovered3, setHovered3] = useState(false);
const [isHovered4, setHovered4] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleMouseEnter1 = () => {
    setHovered1(true);
  };
  const handleMouseLeave1 = () => {
    setHovered1(false);
  };
  const handleMouseEnter2 = () => {
    setHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setHovered2(false);
  };
  const handleMouseEnter3 = () => {
    setHovered3(true);
  };
  const handleMouseLeave3 = () => {
    setHovered3(false);
  };
  const handleMouseEnter4 = () => {
    setHovered4(true);
  };
  const handleMouseLeave4 = () => {
    setHovered4(false);
  };
  const navigate = useNavigate();
  return (
    <div style={{ background:'#24786D',height:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
        <Avatar style={{width:48,height:48,border: '2px solid white'}} src={require('./image/avt.jpg')} />
        <div style={{width:60,height:60,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',background: isHovered ? '#014452' : 'transparent'}}  
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <BiMessageSquareDetail style={{fontSize:30}}/>
        </div>
        <div style={{width:60,height:60,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',background: isHovered1 ? '#014452' : 'transparent'}}  
            onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <PiUserListBold style={{fontSize:30}} onClick={()=> navigate('/optionlist')} />
            
        </div>
        <div style={{width:60,height:60,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',background: isHovered2 ? '#014452' : 'transparent'}}  
            onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <IoIosInformationCircleOutline style={{fontSize:30}}/>
        </div>
        <div style={{width:60,height:60,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',background: isHovered3 ? '#014452' : 'transparent'}}  
            onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
            <IoSettingsOutline style={{fontSize:30}}/>
        </div>
        <div style={{width:60,height:60,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',background: isHovered4 ? '#014452' : 'transparent'}}  
            onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
            <HiOutlineLogout style={{fontSize:30}}/>
        </div>
    </div>
  )
}