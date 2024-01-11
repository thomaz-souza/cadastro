// Importação do React
import React from "react";

//Importação de ícones do FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

//Importação do logotipo 2 da empresa
import logo2 from '../logo2.png'


class RegisterForm extends React.Component {

    //Construtor para funções e variaveis
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Lida com as mudanças nos campos e insere-as em variaveis
    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        this.setState({
            input
        });
    }

    // Função para submeter as informações caso ela seja validada positivamente
    handleSubmit(event) {
        event.preventDefault();
        if (this.validate()) {
            console.log(this.state);
            let input = {};

            input["password"] = "";
            input["confirm_password"] = "";
            this.setState({ input: input });
            alert("Cadastro Realizado!");
        }
    }
    validate() {
        //Recebe os campos de senha
        let input = this.state.input;

        //Variavel para receber possíveis erros nas senhas
        let errors = {};

        //Variavel que indica que não há erros na senha que pode ser mudada caso contrário
        let isValid = true;

        //Verifica se há uma senha no campo de senha
        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Por favor, entre com sua senha.";
        }
        //Verifica se há uma senha no campo de confirmar senha
        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Por favor, confirme a sua senha.";
        }
        //Verifica se a senha tem no mínimo 6 dígitos
        if (typeof input["password"] !== "undefined") {
            if (input["password"].length < 6) {
                isValid = false;
                errors["password"] = "Mímimo de 6 caracteres.";
            }
        }
        if (
            //Valida se os campos não estão vazios
            typeof input["password"] !== "undefined" &&
            typeof input["confirm_password"] !== "undefined"
        ) {
            //Valida se os campos de senha são diferentes
            if (input["password"] != input["confirm_password"]) {
                isValid = false;
                errors["confirm_password"] = "As senhas não são iguais!";
            }
        }
        this.setState({
            errors: errors
        });
        //Retorna uma saída de erro
        return isValid;
    }


    //Renderiza e retorna a view
    render() {
        return (
            <div className="wrapper">
                <div className="box box-left" >
                    <div className='center'>
                        <img src={logo2} className='logo' alt="logo" width="120" height="120" />
                        <h2> A solução certa para a sua empresa.</h2>
                    </div>
                </div>

                <div className="box box-right">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Faça seu cadastro!</h2>

                        <div className="input-box">
                            <label value="nome">
                                <input type="text" id="nome" name="nome" placeholder="Nome" required />
                                <FontAwesomeIcon icon={faUser} className='icon' />
                            </label>
                        </div>

                        <div className="input-box">
                            <label value="email">
                                <input type="email" id="email" placeholder="Email" required />
                                <FontAwesomeIcon icon={faEnvelope} className='icon' />
                            </label>
                        </div>

                        <div className="input-box">
                            <label value="senha" for="password" />
                            <input type="password"
                                id="password"
                                name="password"
                                placeholder="Senha"
                                value={this.state.input.password}
                                onChange={this.handleChange} required />
                            <FontAwesomeIcon icon={faKey} className='icon' />
                            <div style={{ color: "#FFF" }}>{this.state.errors.password}</div>
                        </div>

                        <div className="input-box">
                            <label value="Confirmar Senha" />
                            <input type="password"
                                name="confirm_password"
                                value={this.state.input.confirm_password}
                                onChange={this.handleChange}
                                class=""
                                placeholder="Confirme sua senha"
                                id="confirm_password" required />
                            <FontAwesomeIcon icon={faKey} className='icon' />
                            <div style={{ color: "#FFF" }}>{this.state.errors.confirm_password}</div>
                        </div>

                        <div className="button-wrap">
                            <button type="submit" value="Submit" style={{ color: "#fff" }}> Cadastrar </button>

                            <button>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default RegisterForm;