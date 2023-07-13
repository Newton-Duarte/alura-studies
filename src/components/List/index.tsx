import style from './List.module.scss';

const tasks = [
  {
    id: 1,
    tarefa: 'React',
    tempo:  '02:00:00'
  },
  {
    id: 2,
    tarefa: 'JavaScript',
    tempo:  '01:00:00'
  },
  {
    id: 3,
    tarefa: 'TypeScript',
    tempo:  '03:00:00'
  },
]

export function List() {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={style.item}>
            <h3>{task.tarefa}</h3>
            <span>{task.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
