import React from 'react';
import logo from '../img/Hyper.svg'
import { Link, useNavigate } from 'react-router-dom';
import './css/Onboarding.css';

const Onboarding = () => {
    const navigate = useNavigate();
    
    return (
        <div className="diagonalBackground">
           
        <div style={{justifyContent: "center",alignItems:'center'}}>
                <div style={{display:'flex',justifyContent: "center",alignItems:'center',height:50}}>
                <img style={{display:'flex',justifyContent: "center",alignItems:'center',width:'100%',height:220,position:'absolute'}} src={logo}/>
                </div>
            <div style={{ position: 'relative',width:400 }}>
                <h1 style={{ fontSize: 40, fontWeight: 'bolder', textAlign: "center" }}>Connect friends easily & quickly</h1>
                <p style={{ color: "black", width: 400, textAlign: 'center' }}>  Our chat app is the perfect way to stay connected with friends and family.</p>

            </div>

            <form >
<<<<<<< HEAD
                <div style={{ width: 400, height: 200, justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius:10 ,border: '2px solid #222831',backgroundColor:'white' }}>
                   
                   
=======
                <div style={{ width: 400, height: 400, justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius:5 ,border: '2px solid black' }}>
                    <div style={{ height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <i class="big facebook square icon"></i> {' '}
                        <i class="large google icon"></i>
                        <i class="big apple icon"></i>

                    </div>
                    <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'lighter', color: '##797C7B' }}> <span style={{}}>Or</span> </h2>

                   
>>>>>>> 02e8de678cd39a66e25e95075819bdcdc87a8ff7
                    <div   style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 30 }}>
                        <button className="loginButton" 
                            onClick={() => navigate('/register')}
                        > <span style={{  fontWeight: 'bold' }}>Đăng ký</span> </button>
                    </div>
                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex',marginTop:30}} >
<<<<<<< HEAD
                        <p>Đã có tài khoản?  <span> <Link to='Login' style={{ color:'#76ABAE', fontWeight: 'inherit' }} href='#'>Đăng nhập</Link></span></p>
=======
                        <p>Existing account?  <span> <Link to='Login' style={{ color: 'black', fontWeight: 'inherit' }} href='#'>Login</Link></span></p>
                       
>>>>>>> 02e8de678cd39a66e25e95075819bdcdc87a8ff7
                    </div>
                </div>


            </form>
        </div>


    </div>

    )
}

export default Onboarding