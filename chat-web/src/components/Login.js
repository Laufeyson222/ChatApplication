import React from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100vh", backgroundImage: "linear-gradient(90deg, rgba(9,121,56,1) 36%, rgba(1,68,82,1) 100%)" }}>
            <div style={{}}>
                <div style={{ position: 'relative', }}>
                    <h1 style={{ fontSize: 40, fontWeight: 'bolder', textAlign: "center" }}><span style={{ fontWeight: 'normal' }}>Login to </span> Hyper Chat</h1>
                    <p style={{ color: "white", width: 400, textAlign: 'center' }}>  Welcome back! Sign in using your social account or email to continue us</p>

                </div>

                <form>
                    <div style={{ width: 400, height: 400, backgroundColor: "white", justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 2 }}>
                        <div style={{ height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                            <i class="big facebook square icon"></i> {' '}
                            <i class="large google icon"></i>
                            <i class="big apple icon"></i>

                        </div>
                        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'lighter', color: '##797C7B' }}> <span style={{}}>Or</span> </h2>

                        <div >
                            <div>
                                <label style={{ color: '#24786D' }}>Số Điện Thoại</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

                                    <input style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }} type='text' placeholder='Số Điện Thoại'></input>
                                </div>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <label style={{ color: '#24786D' }}>Mật Khẩu</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <input style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }} type='password' placeholder='Mật Khẩu'></input>
                                </div>
                            </div>
                        </div>
                        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 30 }}>
                            <button style={{ width: 380, height: 40, backgroundColor: '#24786D', border: 'none', borderRadius: 9 }}
                                onClick={() => navigate('/home')}
                            > <span style={{ color: 'white', fontWeight: 'bold' }}>Đăng Nhập</span> </button>
                        </div>
                        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' ,marginTop:10}} >
                            <a style={{ color: '#24786D', fontWeight: 'inherit' }} href='#'>Quên mật khẩu?</a>
                        </div>
                    </div>


                </form>
            </div>


        </div>
    )
}

export default Login