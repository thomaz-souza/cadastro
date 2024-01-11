// Importação do React
import React from 'react'

//Importação do logotipo da empresa
import logo from './logo.png';

//Importação de estilo
import './App.css';

// Importação do componente de formulário
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-image">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </header>

      <RegisterForm />

      <footer className="footer">
        <div className="logo-image">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </footer>
    </div >
  );
}

export default App;