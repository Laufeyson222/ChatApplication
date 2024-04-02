import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
=======
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
>>>>>>> 02e8de678cd39a66e25e95075819bdcdc87a8ff7

const Register = () => {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [birthday, setBirthday] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // State for the confirm password
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

<<<<<<< HEAD
  const togglePasswordVisibility = () => setPasswordShown(!passwordShown);
=======
                <form onSubmit={handleSubmit}>
                    <div className={`formRegiserStyle ${isFocused ? 'shadow' : ''}`}>
                        <div style={{ height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                            <i class="big facebook square icon"></i> {' '}
                            <i class="large google icon"></i>
                            <i class="big apple icon"></i>
>>>>>>> 02e8de678cd39a66e25e95075819bdcdc87a8ff7

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

<<<<<<< HEAD
    if (password !== confirmPassword) {
      setError("Passwords do not match."); // Set error if passwords don't match
      return; // Prevent form submission
    }

    const userData = { userName, password, fullname, email, phoneNumber, birthday };
=======
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
>>>>>>> 02e8de678cd39a66e25e95075819bdcdc87a8ff7

    try {
      const response = await axios.post('http://localhost:5000/api/user/register/send-otp', userData);
      console.log('Registration successful:', response.data);
      navigate('/verify', { state: { email: email } });
    } catch (error) {
      setError(error.response?.data.error || "An unexpected error occurred."); // Set error message from response
    }
  };

  return (
    <div className="diagonalBackground">
      <div>
        <div style={{ position: 'relative' }}>
          <h1 style={{ fontSize: 40, fontWeight: 'bolder', textAlign: 'center',color:'#76ABAE' }}>Đăng ký tài khoản</h1>
          
        </div>
        <div className={`formRegiserStyle ${isFocused ? 'shadow' : ''}`}>
          <form onSubmit={handleSubmit} >
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            {/* Map through each input field */}
            {[
              { label: 'Tài khoản', type: 'text', value: userName, setValue: setUserName },
              { label: 'Họ tên', type: 'text', value: fullname, setValue: setFullName },
              { label: 'Email', type: 'email', value: email, setValue: setEmail },
              { label: 'Số điện thoại', type: 'tel', value: phoneNumber, setValue: setPhoneNumber },
              { label: 'Ngày sinh', type: 'date', value: birthday, setValue: setBirthday, id: 'birthday' },
              { label: 'Mật khẩu', type: passwordShown ? 'text' : 'password', value: password, setValue: setPassword, isPassword: true },
              // Add the confirm password input
              { label: 'Nhập lại mật khẩu', type: passwordShown ? 'text' : 'password', value: confirmPassword, setValue: setConfirmPassword, isPassword: true },
            ].map((input, index) => (
              <div key={index} style={{ marginTop: index ? 20 : 0 }}>
                <label>{input.label}</label>
                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', position: 'relative' }}>
                  <input
                    id={input.id}
                    value={input.value}
                    onChange={(e) => input.setValue(e.target.value)}
                    required
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }}
                    type={input.type}
                  />
                  {input.isPassword && (
                    <FontAwesomeIcon
                      icon={passwordShown ? faEyeSlash : faEye}
                      onClick={togglePasswordVisibility}
                      style={{ position: 'absolute', right: 10, cursor: 'pointer',color:'#76ABAE' }}
                    />
                  )}
                </div>
              </div>
            ))}
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 30 }}>
              <button className="loginButton" type="submit">
                <span style={{ fontWeight: 'bold' }}>Tạo tài khoản</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
