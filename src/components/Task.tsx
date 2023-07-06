import { Trash, Check } from 'phosphor-react';

import styles from './Task.module.css'

import { TaskProps } from '../App';

interface task {
  task: TaskProps;
  handleToggleTask: (taskid: string) => void;
  handleRemoveTask: (taskid: string) => void
}

export function Task({ task, handleToggleTask, handleRemoveTask }: task) {
  function toggleTask() {
    handleToggleTask(task.id)
  }

  function removeTask() {
    handleRemoveTask(task.id)
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkTask}>
        <button onClick={toggleTask} className={task.isChecked ? styles.buttonChecked : styles.buttonNotChecked}>
          <Check size={20}/>
        </button>

        <p className={task.isChecked ? styles.taskChecked : styles.taskNotChecked}>{task.content}</p>
      </div>  

        <button onClick={removeTask} className={styles.remove}>
          <Trash size={20}/>
        </button>
      
    </div>
  )
}
