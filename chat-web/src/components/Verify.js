import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './css/Onboarding.css';
import axios from 'axios';

const Verify = () => {
    const navigate = useNavigate();
    const { state } = useLocation(); // Lấy email được truyền qua từ trang Register thông qua state
    const [otp, setOtp] = useState("");

    const handleChange = (event) => {
        setOtp(event.target.value.slice(0, 6)); // Giới hạn độ dài của OTP nhập vào là 6 ký tự
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Kiểm tra xem OTP đã được điền đầy đủ 6 ký tự chưa
        if (otp.length !== 6) {
            alert("Vui lòng nhập đủ 6 số OTP.");
            return;
        }

        try {
            // Gửi yêu cầu xác thực OTP tới server
            const response = await axios.post('http://localhost:5000/api/user/register/verifyOTP', {
                email: state.email, // Sử dụng email được truyền qua từ trang Register
                userOTP: otp, // Gửi OTP nhập vào
            });

            // Nếu xác thực thành công, chuyển hướng người dùng đến trang 'home'
            console.log('Xác thực OTP thành công:', response.data);
            navigate('/home'); 
        } catch (error) {
            // Hiển thị lỗi nếu có
            console.error('Lỗi xác thực OTP:', error.response?.data || error.message);
            alert(error.response?.data?.error || "Có lỗi xảy ra khi xác thực OTP.");
        }
    };

    return (
        <div className="diagonalBackground">
            <div>
                <div style={{ position: 'relative' }}>
                    <h1 style={{ fontSize: 40, fontWeight: 'bolder', textAlign: "center" }}>Nhập OTP</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="formStyle">
                      <div>
                        <div>
                            <label style={{fontSize:25,fontWeight:'bolder'}}>Mã Otp</label>
                            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', }}>
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={handleChange}
                                    style={{ width: 380, height: 50, marginRight: "8px", fontSize: 25, fontWeight: 'bold', borderRadius: 5,textAlign:'center' }}
                                />
                            </div>
                        </div>
                        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 30 }}>
                            <button className="loginButton" type="submit">
                                <span style={{ fontWeight: 'bold' }}>Xác nhận</span>
                            </button>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Verify;
