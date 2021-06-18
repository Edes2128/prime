import React from 'react'

export default function ShtoKlient({ closePop }) {

    const shtoKlient = (e) => {
        e.preventDefault();
        alert('Klienti su krijua se sdu un!!!')
    }


    return (
        <div className="shtoklient-pop flex jc-center ai-center" >
            <div className="shtoklient-pop-opa" onClick={closePop}></div>
            <div className="shtoklient-pop-content container flex fd-column">
                <p className="shtoklient-pop-content-title fs-24 fw-semi">Krijo një klient</p>
                <form className="shtoklient-pop-content-form flex jc-spaceb" onSubmit={shtoKlient}>
                    <div className="shtoklient-pop-content-form-left">

                        <div className="shtoklient-pop-content-form-inputs flex fd-column ai-start  ">
                            <label htmlFor="#">Username</label>
                            <input type="text" placeholder="Username" />
                        </div>


                        <div className="shtoklient-pop-content-form-inputs flex fd-column ai-start  ">
                            <label htmlFor="#">Emer</label>
                            <input type="text" placeholder="Emer" />
                        </div>

                        <div className="shtoklient-pop-content-form-inputs flex fd-column ai-start  ">
                            <label htmlFor="#">Mbiemer</label>
                            <input type="text" placeholder="Mbiemer" />
                        </div>

                        <div className="shtoklient-pop-content-form-inputs flex fd-column ai-start  ">
                            <label htmlFor="#">Email</label>
                            <input type="text" placeholder="Email" />
                        </div>

                        <div className="shtoklient-pop-content-form-inputs flex fd-column ai-start  ">
                            <label htmlFor="#">Password</label>
                            <input type="password" placeholder="Password" />
                        </div>

                    </div>
                    <div className="shtoklient-pop-content-form-right">
                        <div className="shtoklient-pop-content-form-inputs flex fd-column ai-start  ">
                            <label htmlFor="#">Telefon</label>
                            <input type="text" placeholder="Telefon" />
                        </div>

                        <div className="shtoklient-pop-content-form-inputs flex fd-column ai-start  ">
                            <label htmlFor="#">Emri i Biznesit</label>
                            <input type="text" placeholder="Emri biznesit" />
                        </div>

                        <div className="shtoklient-pop-content-form-inputs flex fd-column ai-start  ">
                            <label htmlFor="#">Adresa</label>
                            <input type="text" placeholder="Adresa" />
                        </div>
                        <div className="shtoklient-pop-content-form-inputs flex fd-column ai-start  ">
                            <label htmlFor="#">Qyteti</label>
                            <input type="text" placeholder="Qyteti" />
                        </div>
                        <div className="shtoklient-pop-content-form-inputs flex fd-column ai-start  ">
                            <label htmlFor="#">Nipt</label>
                            <input type="text" placeholder="Nipt" />
                        </div>
                        <button className="shtoklient-pop-content-form-submit-btn" >
                            Ruaj
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
