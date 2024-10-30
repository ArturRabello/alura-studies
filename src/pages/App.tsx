import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import { Itarefa } from '../types/Itarefa';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
