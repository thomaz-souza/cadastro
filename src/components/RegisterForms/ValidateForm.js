import React from "react";

class ValidateForm extends React.Component {

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
            let input = {};

            input["name"] = "";
            input["e-mail"] = "";
            input["password"] = "";
            input["confirm_password"] = "";
            this.setState({ input: input });
            alert("Cadastro Realizado! \n" + this.state.input['name'] + this.state.input['e-mail']);
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
            alert(errors["password"]);
        }
        //Verifica se há uma senha no campo de confirmar senha
        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Por favor, confirme a sua senha.";
            alert(errors["confirm_password"]);
        }
        //Verifica se a senha tem no mínimo 6 dígitos
        if (typeof input["password"] !== "undefined") {
            if (input["password"].length < 6) {
                isValid = false;
                errors["password"] = "Mímimo de 6 caracteres.";
                alert(errors["password"]);
            }
        }
        if (
            //Valida se os campos não estão vazios
            typeof input["password"] !== "undefined" &&
            typeof input["confirm_password"] !== "undefined"
        ) {
            //Valida se os campos de senha são diferentes
            if (input["password"] !== input["confirm_password"]) {
                isValid = false;
                errors["confirm_password"] = "As senhas não são iguais!";
                alert(errors["confirm_password"]);
            }
        }
        this.setState({
            errors: errors
        });

        //Retorna uma saída de erro
        return isValid;
    }

}

export default ValidateForm;