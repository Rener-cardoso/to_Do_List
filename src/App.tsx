import styles from './App.module.css';

import { ChangeEvent, useState } from 'react';

import clipboard from './assets/clipboard.svg';

import { Header } from './components/Header';
import { Button } from './components/Button';
import { Task } from './components/Task';

import './global.css'

export interface TaskProps {
  id: string;
  content: string;
  isChecked?: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [newTask, setNewTask] = useState({} as TaskProps);

  let uuid = self.crypto.randomUUID()

  

  const numberOfTasks = tasks.length;
  
  const taskComplete = tasks.filter(task => task.isChecked == true).length

  function handleCreateTask() {
    setTasks([...tasks, newTask])

    setNewTask({content: ""} as TaskProps)
  }

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    return setNewTask({
      id: uuid,
      content: event.target.value,
      isChecked: false
    })
  }

  function handleToggleTaskById(taskid: string) {
    const toggleTask = tasks.map(task => {
      if (task.id === taskid) {
        return {
          ...task,
          isChecked: !task.isChecked
        }
      }
      return task
    })
    setTasks(toggleTask)
  }

  function handleRemoveTask(taskid: string) {
    
    const removeTask = tasks.filter(task => task.id !== taskid)

    setTasks(removeTask)
  }
    
  return (

   <div className={styles.app}>

      <Header />


    <main>
      <div className={styles.addList}>

        <input
          placeholder='Adicione uma nova tarefa'
          onChange={handleOnChange}
          value={newTask.content || ""}
          required 
        />

        <Button onClick={handleCreateTask}/>

      </div>

        <div className={styles.headerList}>
          <strong>Tarefas criadas<span>{numberOfTasks}</span></strong>
          <strong>Concluídas<span>{taskComplete} de {numberOfTasks}</span></strong>
        </div>

        {
          tasks.map(task => {
            return <Task key={task.id} task={task} handleToggleTask={handleToggleTaskById} handleRemoveTask={handleRemoveTask}/>
          })
        }

        <div className={styles.bodyList}>
          <img src={clipboard} alt="" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    </main>

   </div>  
  )
}