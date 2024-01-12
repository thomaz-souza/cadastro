// Importação do React
import React from 'react'

//Importação do logotipo da empresa
import logo from './images/logo.png';

//Importação de estilo
import './App.css';

//Importa um selecionador de desing
import SelectedDesign from './components/SelectDesign';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-image">
          <img src={logo} alt="logo" width={55} height={55} />
        </div>
      </header>

      <SelectedDesign />

      <footer className="footer">
        <div className="logo-image">
          <img src={logo} className="logo" alt="logo" width={55} height={55} />
        </div>
      </footer>
    </div >
  );
}

export default App;