import React from 'react'
import LoginImage from '../../images/login-image.png'
import Logo from '../../images/logo-login.png'
import Key from '../../images/key.svg';
import Person from '../../images/user.svg'


export default function Login() {

    const onLogin = (e) => {
            e.preventDefault();
            alert('HA HA HA')
    }

    return (
        <div className="login flex" >
            <div className="login-container flex container">
                <div className="login-container-left flex ai-center jc-end">
                    <div className="login-container-left-content flex ">
                        <img src={LoginImage} className="img-res" alt="" />
                    </div>
                </div>
                <div className="login-container-right flex fd-column  ai-end">
                    <div className="flex" >
                        <img src={Logo} alt="Logo" className="img-res" />
                    </div>

                    <form className="login-container-right-form flex fd-column ai-end" onSubmit={onLogin}>

                        <div className="login-container-right-form-inputs flex ai-center ">
                            <div className="login-container-right-form-inputs-logo flex ai-center jc-center">
                                 <img src={Person} alt="" />
                            </div>
                            <input type="text" placeholder="Username..." />
                        </div>
                        <div className="login-container-right-form-inputs flex ai-center">
                            <div className="login-container-right-form-inputs-logo flex ai-center jc-center">
                                 <img src={Key} alt="" />
                            </div>
                            <input type="password" placeholder="Password..." />
                        </div>
                        <div className="login-container-right-form-buttons">
                                <button className="submit-btn fs-17 fw-regular" >Kyçu</button>

                        </div>

                    </form>


                    <div className="social-links">
                        <a className="social-links-link fs-16 fw-regular" href="https://www.youtube.com/">Facebook</a>
                        <a className="social-links-link fs-16 fw-regular" href="https://www.youtube.com/">Instagram</a>
                        <a className="social-links-link fs-16 fw-regular" href="https://www.youtube.com/">Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
