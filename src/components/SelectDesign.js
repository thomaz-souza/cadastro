// ParentComponent.jsx
import React, { useState } from 'react';

// Importação do componente de formulário
import RegisterForm from './RegisterForms/RegisterForm';
import RegisterForm2 from './RegisterForms/RegisterForm2';

const SelectedDesign = () => {

    //Declara que a constante padrão seja o design1
    const [selectedOption, setSelectedOption] = useState('design1');

    //Muda o valor da variavel de acordo com a opção delecionada
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;

        // Atualiza o estado
        setSelectedOption(selectedValue);
    };

    return (
        <div>
            <div className='wrapper' style={{ backgroundColor: "#000" }}>
                <div className="select-box">
                    <label htmlFor="selectOption" value="Selecione uma opção:"></label>
                    <select id="selectOption" defaultValue={selectedOption} onChange={handleSelectChange}>
                        <option key="design1" value="design1">Design 1</option>
                        <option key="design2" value="design2">Design 2</option>
                    </select>
                </div>
            </div>

            {/* Renderiza o componente de acordo com a opção selecionada */}
            {selectedOption === 'design1' && <RegisterForm />}
            {selectedOption === 'design2' && <RegisterForm2 />}
        </div >
    );
};

export default SelectedDesign;
