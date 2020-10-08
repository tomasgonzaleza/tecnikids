import React from 'react';
import logo from '../../img/logo-3.png';
import facebook from '../../img/facebook-icon-white.png';
import instagram from '../../img/instagram-icon-white.png';
import whatsapp from '../../img/whatsapp-icon-white.png';

export const MyFooter = () => {
    return(
        <div className="container-fluid my-footer">
            <div className="row mx-0">
                <div className="col-md-4 col-8 my-2 ml-5 ml-md-0 pl-5 pl-md-0">
                    <img className="my-footer-logo" src={logo} alt="Tecnikids"/>
                </div>
                <div className="col-12 row tc-white">
                     <div className="col-md-3 col-12">
                         <div className="col-12 m-3">
                            <h5 className="">Ubicación</h5>
                            <p className="f-weigth-200 f-size-16">
                                Caracas, Venezuela.
                            </p>
                            <h6>Contacto</h6>
                            <a className="f-weigth-200 f-size-16 my-1 my-footer-link d-inline-block" href="tel:+584122381919">+(58) 412 238 1919</a>
                            <a className="f-weigth-200 f-size-16 my-1 my-footer-link d-inline-block" href="mailto:atencionalclientetk@gmail.com">atencionalclientetk@tecnikidsve.com</a>
                            <a className="f-weigth-200 f-size-16 my-1 my-footer-link" href="/">www.tecnikidsve.com</a>
                         </div>
                     </div>
                     <div className="col-md-3 col-12">
                         <div className="col-12 m-3">
                            <h5>Enlaces Útiles</h5>
                            <a href="/company-view" className="f-weigth-200 f-size-16 my-footer-link d-block my-1">Sobre Nosotros</a>
                            <a href="/company-view/#clases_de_informatica" className="f-weigth-200 f-size-16 my-footer-link d-block my-1">Clases de Informática</a>
                            <a href="/company-view/#clases_de_robotica" className="f-weigth-200 f-size-16 my-footer-link d-block my-1">Clases de Robótica</a>
                            <a href="/company-view/#programa_de_valores" className="f-weigth-200 f-size-16 my-footer-link d-block my-1">Programa de Valores</a>
                            <a href="/company-view/#laboratorios" className="f-weigth-200 f-size-16 my-footer-link d-block my-1">Laboratorios</a>
                         </div>
                     </div>
                     <div className="col-md-3 col-12">
                         <div className="col-12 m-3">
                            <h5>Horario de Trabajo</h5>
                            <p className="f-weigth-200 f-size-16 d-inline-block">
                                Lunes a Viernes: 
                            </p>
                            <p className="f-weight-600 f-size-16 d-inline-block">7:00 a.m. - 4:00 p.m.</p>
                            <p className="f-weigth-200 f-size-16 d-inline-block">
                                Sábado y Domingo
                            </p>
                            <p className="f-weight-600 f-size-16 d-inline-block">: Cerrado</p>
                         </div>
                     </div>
                     <div className="col-12 col-md-3">
                         <div className="col-12 m-3">
                            <h5>Cobertura</h5>
                            <p className="f-weigth-200 f-size-16 my-1">Venezuela</p>
                            <p className="f-weigth-200 f-size-16 my-1">Guatemala</p>
                            <p className="f-weigth-200 f-size-16 my-1">Honduras</p>
                            <p className="f-weigth-200 f-size-16 my-1">El Salvador</p>
                            <p className="f-weigth-200 f-size-16 my-1">Costa Rica</p>
                            <p className="f-weigth-200 f-size-16 my-1">México</p>
                         </div>
                     </div>
                </div>
                <div className="col-12">
                    <div className="col-md-2 col-8 my-footer-logo mb-3 mt-0 p-0">
                        <a href="https://www.facebook.com/pages/category/Education/Tecnikids-Venezuela-108507517466126/"><img className="col-4 p-2 my-footer-sm-logo my-footer-sm" src={facebook} alt="Facebook"/></a>
                        <a href="https://www.instagram.com/tecnikidsve/?hl=es-la"><img className="col-4 p-2 my-footer-sm-logo my-footer-sm" src={instagram} alt="instagram"/></a>
                        <a href="https://wa.me/message/HV23HURXLTNVN1"><img className="col-4 p-2 my-footer-sm-logo my-footer-sm" src={whatsapp} alt="whatsapp"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
