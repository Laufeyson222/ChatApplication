import React from 'react'
import { useNavigate } from 'react-router-dom';
const Resgister = () => {
    const navigate = useNavigate()
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100vh", backgroundImage: "linear-gradient(90deg, rgba(9,121,56,1) 36%, rgba(1,68,82,1) 100%)" }}>
            <div style={{}}>
                <div style={{ position: 'relative', }}>
                    <h1 style={{ fontSize: 40, fontWeight: 'bolder', textAlign: "center" }}><span style={{ fontWeight: 'normal' }}>Sign up with  </span>Email</h1>
                    <p style={{ color: "white", width: 400, textAlign: 'center' }}>  Get chatting with friends and family today by signing up for our chat app!</p>

                </div>

                <form>
                    <div style={{ width: 400, height: 500, backgroundColor: "white", justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 2 }}>
                        <div style={{ height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                            <i class="big facebook square icon"></i> {' '}
                            <i class="large google icon"></i>
                            <i class="big apple icon"></i>

                        </div>
                        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'lighter', color: '##797C7B' }}> <span style={{}}>Or</span> </h2>

                        <div >
                            <div>
                                <label style={{ color: '#24786D' }}>Your Name</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

                                    <input style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }} type='text' ></input>
                                </div>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <label style={{ color: '#24786D' }}>Your Email</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <input style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }} type='password' ></input>
                                </div>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <label style={{ color: '#24786D' }}>Password</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <input style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }} type='password' ></input>
                                </div>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <label style={{ color: '#24786D' }}>Confirm Password</label>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <input style={{ width: 380, outline: 'none', border: 'none', borderBottom: '1px solid #ccc' }} type='password' ></input>
                                </div>
                            </div>
                        </div>
                        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 30 }}>
                            <button style={{ width: 380, height: 40, backgroundColor: '#24786D', border: 'none', borderRadius: 9 }}
                                onClick={() => navigate('/login')}
                            > <span style={{ color: 'white', fontWeight: 'bold' }}>Create an account</span> </button>
                        </div>
                       
                    </div>


                </form>
            </div>


        </div>
    )
}

export default Resgister