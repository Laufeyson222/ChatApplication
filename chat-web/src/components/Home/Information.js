import { Avatar } from 'antd'
import React from 'react'

export default function Information() {
  return (
    <div>
      <div style={{width:384,height:60,borderBottom:'1px solid #CCCCCC',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <h3>Thông Tin Hội Thoại</h3>
      </div>
      <div style={{width:384,height:635,display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Avatar style={{background:'red',marginBottom:-1,marginTop:30,width:50,height:50,border: '2px solid white'}} src={require('./image/avt.jpg')} />
        <h3>Thịnh Nè</h3>
      </div>
    </div>
  )
}
