import React from 'react';
import logo from '../img/logo.png'
import { Link, useNavigate } from 'react-router-dom';


const Onboarding = () => {
    const navigate = useNavigate();
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100vh", backgroundImage: "linear-gradient(90deg, rgba(9,121,56,1) 36%, rgba(1,68,82,1) 100%)" }}>
           
        <div style={{justifyContent: "center",alignItems:'center'}}>
                <div style={{display:'flex',justifyContent: "center",alignItems:'center'}}>
                <img src={logo}/>
                </div>
            <div style={{ position: 'relative',width:400 }}>
                <h1 style={{ fontSize: 40, fontWeight: 'bolder', textAlign: "center" }}>Connect friends easily & quickly</h1>
                <p style={{ color: "white", width: 400, textAlign: 'center' }}>  Our chat app is the perfect way to stay connected with friends and family.</p>

            </div>

            <form>
                <div style={{ width: 400, height: 400, justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 2 }}>
                    <div style={{ height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <i class="big facebook square icon"></i> {' '}
                        <i class="large google icon"></i>
                        <i class="big apple icon"></i>

                    </div>
                    <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'lighter', color: '##797C7B' }}> <span style={{}}>Or</span> </h2>

                   
                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 30 }}>
                        <button style={{ width: 380, height: 40, backgroundColor: '#FFF', border: 'none', borderRadius: 9 }}
                            onClick={() => navigate('/register')}
                        > <span style={{  fontWeight: 'bold' }}>Sign up with mail</span> </button>
                    </div>
                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex',marginTop:30}} >
                        <p>Existing account?  <span> <Link to='Login' style={{ color: '#FFF', fontWeight: 'inherit' }} href='#'>Login</Link></span></p>
                       
                    </div>
                </div>


            </form>
        </div>


    </div>

    )
}

export default Onboarding