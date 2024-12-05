import { spawn } from 'child_process';
import { Itarefa } from '../../../types/Itarefa';
import style from './Item.module.scss';

interface Props extends Itarefa{
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

export default function Item(
  { 
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa 
  }: Props, ) {
    
  return (
    <li className={`${style.Item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado: ''}`} 
    onClick={() => !completado && selecionaTarefa({
      tarefa,
      tempo,
      selecionado,
      completado,
      id  
    })}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.Concluido}
        aria-label="tarefa completada"></span>}
    </li>
  )
}