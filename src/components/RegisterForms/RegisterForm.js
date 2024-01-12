// Importação do React
import React from "react";


//Importação de estilos
import "./RegisterForm.css";

// Importação de classe que valida informações
import ValidateForm from "./ValidateForm";

//Importação de ícones do FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

//Importação do logotipo 2 da empresa
import logo2 from '../../images/logo2.png'

const Validate = new ValidateForm();

class RegisterForm extends React.Component {

    //Renderiza e retorna a view
    render() {
        return (
            <section className="background">
                <div className="box-wrapper">
                    <div className="box box-left" >

                        <div className="center">
                            <img src={logo2} alt="logo" width={120} height={120} />
                        </div>

                        <div style={{ paddingTop: "0" }}>
                            <ul style={{ color: "#FFF" }} >
                                <li>
                                    Gestão de Processos
                                </li>
                                <li>
                                    Contabilidade
                                </li>
                                <li>
                                    Análise de KPI's
                                </li>
                            </ul>
                        </div>
                        <h2> A solução certa para a sua empresa.</h2>
                    </div>

                    <div className="box box-right">
                        <form onSubmit={Validate.handleSubmit}>
                            <div>
                                <img src={logo2} alt="logo" className="logo-mobile" width={60} height={60} />

                                <h2 style={{ color: "#000", fontWeight: "900" }}>Faça seu cadastro</h2>
                            </div>
                            <div className="div-box">
                                <label value="name">
                                    <input className="input-box" type="text" id="nameField" name="name" placeholder="Nome" value={Validate.state.input.nome} onChange={Validate.handleChange} required />
                                    <FontAwesomeIcon icon={faUser} className='icon' />
                                </label>
                            </div>

                            <div className="div-box">
                                <label value="e-mail">
                                    <input className="input-box" type="email" id="e-mail" name="e-mail" placeholder="Email" value={Validate.state.input.email} onChange={Validate.handleChange} required />
                                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                                </label>
                            </div>

                            <div className="div-box">
                                <label value="senha" htmlFor="password">
                                    <input className="input-box" type="password" id="password" name="password" placeholder="Senha" value={Validate.state.input.password} onChange={Validate.handleChange} required />
                                </label>
                                <FontAwesomeIcon icon={faKey} className='icon' />
                            </div>

                            <div className="div-box">
                                <label value="Confirmar Senha" htmlFor="confirm_password">
                                    <input className="input-box" type="password" name="confirm_password" value={Validate.state.input.confirm_password} onChange={Validate.handleChange} placeholder="Confirme sua senha" id="confirm_password" required />
                                </label>
                                <FontAwesomeIcon icon={faKey} className='icon' />
                            </div>

                            <div className="button-wrap">
                                <button className="action-button" style={{ backgroundColor: "#000" }} type="submit" value="Submit"> Cadastrar </button>

                                <button className="action-button" style={{ backgroundColor: "#000" }} type="reset" value="Reset">Cancelar</button>
                            </div>
                        </form>
                    </div >
                </div >
            </section >
        );
    }
}
export default RegisterForm;