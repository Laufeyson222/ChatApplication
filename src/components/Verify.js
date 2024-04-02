<<<<<<< HEAD
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
            navigate('/resetpassword'); 
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
=======
import React, { useState, createRef, useEffect, useRef } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import './css/Onboarding.css';
const Verify = () => {
    const navigate = useNavigate();
    const [isFocused, setIsFocused] = useState(false);
    const location = useLocation(); 
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputsRef = useRef(otp.map(() => createRef()));

    const email = location.state?.email; // Lấy email từ state truyền qua

    useEffect(() => {
      inputsRef.current[0].current.focus();
    }, []);
  
    const handleChange = (element, index) => {
      const value = element.value;
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      if (value.length === 1 && index < otp.length - 1) {
        inputsRef.current[index + 1].current.focus();
      }
  
      if (value.length === 0 && index > 0) {
        inputsRef.current[index - 1].current.focus();
      }
    };
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const otpValue = otp.join(''); // Nối các phần tử của mảng OTP thành một chuỗi
      
        try {
          const response = await fetch('http://localhost:5000/api/user/register/verifyOTP', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, otp: otpValue }),
          });
      
          const data = await response.json();
      
          if (response.ok) {
            // Xử lý sau khi xác thực OTP thành công
            console.log('Xác thực OTP thành công:', data);
            navigate('/home'); // Chuyển hướng người dùng đến trang chủ hoặc trang thích hợp
          } else {
            // Xử lý lỗi từ phía server, ví dụ: OTP không đúng
            console.log('Xác thực OTP thất bại:', data.message);
          }
        } catch (error) {
          console.error('Lỗi xác thực OTP:', error);
        }
      };
    return (
        <div className="diagonalBackground">
            <div style={{}}>
                <div style={{ position: 'relative', }}>
                    <h1 style={{ fontSize: 40, fontWeight: 'bolder', textAlign: "center" }}>Nhập OTP</h1>


                </div>

                <form onSubmit={handleSubmit}>
                    <div className={`formStyle ${isFocused ? 'shadow' : ''}`}>


                        <div >
                            <div>
                                <label>Mã Otp</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

                                    {otp.map((data, index) => (
                                        <input
                                            onFocus={handleFocus} onBlur={handleBlur}
                                            key={index}
                                            ref={inputsRef.current[index]}
                                            type="text"
                                            value={data}
                                            maxLength="1"
                                            onChange={(e) => handleChange(e.target, index)}
                                            style={{ width: 50,height:50, marginRight: "8px", fontSize:25,fontWeight:'bold',borderRadius:5}}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 30 }}>
                            <button className="loginButton"
                                
                            > <span style={{ fontWeight: 'bold' }}>Xác nhận</span> </button>
                        </div>

                    </div>


                </form>
            </div>


        </div>
    )
}

export default Verify
>>>>>>> 02e8de678cd39a66e25e95075819bdcdc87a8ff7
