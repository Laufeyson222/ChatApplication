import { WechatWorkOutlined } from '@ant-design/icons'
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
        <div style={{width:64,height:64,display:'flex',alignItems:'center',justifyContent:'center',background: isHovered ? '#014452' : 'transparent'}}  
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <WechatWorkOutlined style={{fontSize:50}}/>
        </div>
       <div style={{width:64,height:64,display:'flex',alignItems:'center',justifyContent:'center',background: isHovered1 ? '#014452' : 'transparent'}}  
            onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <WechatWorkOutlined style={{fontSize:50}} onClick={()=> navigate('/optionlist')} />
            
        </div>
       <div style={{width:64,height:64,display:'flex',alignItems:'center',justifyContent:'center',background: isHovered2 ? '#014452' : 'transparent'}}  
            onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <WechatWorkOutlined style={{fontSize:50}}/>
        </div>
       <div style={{width:64,height:64,display:'flex',alignItems:'center',justifyContent:'center',background: isHovered3 ? '#014452' : 'transparent'}}  
            onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
            <WechatWorkOutlined style={{fontSize:50}}/>
        </div>
       <div style={{width:64,height:64,display:'flex',alignItems:'center',justifyContent:'center',background: isHovered4 ? '#014452' : 'transparent'}}  
            onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
            <WechatWorkOutlined style={{fontSize:50}}/>
        </div>
    </div>
  )
}
