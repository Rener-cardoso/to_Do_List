import styles from './Button.module.css'
import iconButton from '../assets/iconButton.svg'

export function Button({...props}) {
  return (
    <button {...props} className={styles.button}>
      Criar
      <img src={iconButton} alt="" />
    </button>
  )
}