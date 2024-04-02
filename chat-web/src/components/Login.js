import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const navigate = useNavigate();
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown => !passwordShown);
    };
    const handleLogin = async (event) => {
        event.preventDefault(); // Ngăn form submit theo cách truyền thống

        try {
            const response = await fetch('http://localhost:5000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    account: account,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {

                navigate('/home'); // Điều hướng đến trang chủ sau khi đăng nhập thành công
            } else {
                // Xử lý lỗi, ví dụ: thông báo đăng nhập thất bại
                alert('Đăng nhập thất bại: ' + data.message);
            }
        } catch (error) {
            console.error('Đăng nhập thất bại:', error);
        }
    };
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100vh", backgroundColor: "#fdfdfdfd", }}>
            <div style={{}}>
                <div style={{ position: 'relative', }}>
                    <h1 style={{ fontSize: 40, fontWeight: 'bolder', textAlign: "center" }}><span style={{ fontWeight: 'normal' }}>Login to </span> Hyper Chat</h1>
                    <p style={{ color: "black", width: 400, textAlign: 'center' }}>  Welcome back! Sign in using your social account or email to continue us</p>

                </div>

                <form onSubmit={handleLogin} >
                    <div className={`formStyle ${isFocused ? 'shadow' : ''}`}>
                        <div style={{ height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                            <i class="big facebook square icon"></i> {' '}
                            <i class="large google icon"></i>
                            <i class="big apple icon"></i>

                        </div>
                        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'lighter', color: '##797C7B' }}> <span style={{}}>Or</span> </h2>

                        <div >
                            <div>
                                <label style={{ color: 'black' }}>Số Điện Thoại</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

                                    <input
                                        value={account}
                                        onChange={(e) => setAccount(e.target.value)}
                                        onFocus={handleFocus} onBlur={handleBlur} style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }} type='text' placeholder='Số Điện Thoại'></input>
                                </div>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <label style={{ color: 'black' }}>Mật Khẩu</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex',position:'relative' }}>
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onFocus={handleFocus} onBlur={handleBlur} style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }} type={passwordShown ? 'text' : 'password'} placeholder='Mật Khẩu'></input>
                                    <FontAwesomeIcon
                                        icon={passwordShown ? faEyeSlash : faEye}
                                        onClick={togglePasswordVisiblity}
                                        style={{ position: 'absolute', right:10,cursor: 'pointer' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 30 }}>
                            <button type="submit" className="loginButton"

                            > <span style={{ fontWeight: 'bold' }}>Đăng Nhập</span> </button>
                        </div>
                        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 10 }} >
                            <a style={{ color: 'black', fontWeight: 'inherit' }} href='#'>Quên mật khẩu?</a>
                        </div>
                    </div>


                </form>
            </div>


        </div>
    )
}

export default Login