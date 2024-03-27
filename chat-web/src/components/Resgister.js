import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const Resgister = () => {
    const navigate = useNavigate();
    const [isFocused, setIsFocused] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown => !passwordShown);
    };
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const [birthday, setBirthday] = useState('');



    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = { userName, password, fullname, email, phoneNumber, birthday };

        console.log('Sending:', JSON.stringify(userData)); // In dữ liệu gửi đi để debug

        try {
            const response = await fetch('http://localhost:5000/api/user/register/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Đăng ký thành công:', data);
                navigate('/verify', { state: { email: email } });
            } else {
                alert('Đăng ký thất bại:', data.message);
            }
        } catch (error) {
            console.error('Lỗi đăng ký:', error);
        }
    };

    return (
        <div className="diagonalBackground">
            <div style={{}}>
                <div style={{ position: 'relative', }}>
                    <h1 style={{ fontSize: 40, fontWeight: 'bolder', textAlign: "center" }}>Đăng ký tài khoản</h1>
                    <p style={{ width: 400, textAlign: 'center' }}>  Get chatting with friends and family today by signing up for our chat app!</p>

                </div>

                <form onSubmit={handleSubmit}>
                    <div className={`formRegiserStyle ${isFocused ? 'shadow' : ''}`}>
                        <div style={{ height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                            <i class="big facebook square icon"></i> {' '}
                            <i class="large google icon"></i>
                            <i class="big apple icon"></i>

                        </div>
                        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'lighter', color: '##797C7B' }}> <span style={{}}>Or</span> </h2>

                        <div >
                            <div>
                                <label>Tài khoản</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

                                    <input

                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        required
                                        onFocus={handleFocus} onBlur={handleBlur} style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }} type='text' ></input>
                                </div>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <label >Mật khẩu</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex',position:'relative' }}>
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}

                                        requiredonFocus={handleFocus} onBlur={handleBlur} style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }} type={passwordShown ? 'text' : 'password'} ></input>
                                    <FontAwesomeIcon
                                        icon={passwordShown ? faEyeSlash : faEye}
                                        onClick={togglePasswordVisiblity}
                                        style={{ position: 'absolute', right: 10, cursor: 'pointer' }}
                                    />
                                </div>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <label>Họ tên</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <input
                                        value={fullname}
                                        onChange={(e) => setFullName(e.target.value)}

                                        required
                                        onFocus={handleFocus} onBlur={handleBlur} style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }} type='text' ></input>
                                </div>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <label >Email</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        onFocus={handleFocus} onBlur={handleBlur} style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }} type='email' ></input>
                                </div>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <label >Số điện thoại</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <input
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}

                                        required
                                        onFocus={handleFocus} onBlur={handleBlur} style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }} type='tel' ></input>
                                </div>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <label htmlFor="birthday">Ngày sinh</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <input
                                        type="date"
                                        id="birthday"
                                        name="birthday"
                                        value={birthday}

                                        onChange={(e) => setBirthday(e.target.value)}

                                        required
                                        onFocus={handleFocus} onBlur={handleBlur} style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }}  ></input>
                                </div>
                            </div>
                        </div>
                        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 30 }}>
                            <button className="loginButton" type='submit'

                            > <span style={{ fontWeight: 'bold' }}>Create an account</span> </button>
                        </div>

                    </div>


                </form>
            </div>


        </div>
    )
}

export default Resgister