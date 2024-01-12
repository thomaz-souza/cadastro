// Importação do React
import React from "react";

//Importação dos estilos Tailwind
import "../../../src/output.css"

// Importação de classe que valida informações
import ValidateForm from "./ValidateForm";

//Importação do logotipo 2 da empresa
import logo2 from '../../images/logo192.png'

//Importação do logotipo 2 da empresa
import empresa from '../../images/empresarios-trabalhando.jpg'

const Validate = new ValidateForm();

class RegisterForm2 extends React.Component {

    //Renderiza e retorna a view
    render() {
        return (
            <section className=" bg-gray-100 text-gray-900 flex justify-center ">
                <div className="max-w-screen-xl  sm:m-20 bg-white shadow sm:rounded-lg flex justify-center ">
                    <div className="lg:w-1/2 sm:p-12 p-6 ">
                        <div>
                            <img className="w-10 mx-auto" src={logo2} alt="logo" />
                        </div>
                        <div className=" flex flex-col items-center">
                            <h1 className="text-2xl font-extrabold">
                                Cadastre-se na Bilgi
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="mx-auto max-w-xs">
                                    <form onSubmit={Validate.handleSubmit}>
                                        <div>
                                            <label htmlFor="name" className="block  text-sm font-medium text-gray-900 mt-2">Nome </label>
                                            <input
                                                className="w-full px-8 py-4 mb-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                name="name" id="name" type="text" placeholder="Nome" value={Validate.state.input.name}
                                                onChange={Validate.handleChange} required />
                                        </div>

                                        <div>
                                            <label htmlFor="e-mail" className="block  text-sm font-medium text-gray-900 mt-2">Email</label>
                                            <input
                                                className="w-full px-8 py-4 mb-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                type="email" name="e-mail" id="e-mail" placeholder="exemplo@exemplo.com"
                                                value={Validate.state.input.email} onChange={Validate.handleChange} required />
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-900 mt-2">Senha</label>
                                            <input
                                                className="w-full px-8 py-4 mb-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                type="password" name="password" id="password" placeholder="••••••••"
                                                value={Validate.state.input.password} onChange={Validate.handleChange} required />
                                        </div>

                                        <div>
                                            <label htmlFor="confirm_password"
                                                className="block  text-sm font-medium text-gray-900w mt-2">Confirmar Senha</label>
                                            <input
                                                className="w-full px-8 py-4 mb-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                type="password" name="confirm_password" id="confirm_password" placeholder="••••••••"
                                                value={Validate.state.input.confirm_password} onChange={Validate.handleChange} required />
                                        </div>

                                        <button type="submit" value="Submit"
                                            className="mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-4 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-3">
                                                Cadastre-se
                                            </span>
                                        </button>
                                        <button type="reset" value="Reset"
                                            className="mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-4 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <span className="ml-3">
                                                Cancelar
                                            </span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" text-center hidden lg:flex">
                        <img src={empresa} alt="logo" style={{ width: "550px", height: "740px" }} />
                    </div>
                </div>
            </section >
        );
    }
}
export default RegisterForm2;