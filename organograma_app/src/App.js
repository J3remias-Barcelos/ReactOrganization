import { useState } from 'react';
import Banner from './componenetes/Banner/Banner.js'
import Formulario from './componenetes/Formulario/Formulario.js';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />

      <Formulario aoColoboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
    
    </div>
  );
}

export default App;
