import React from 'react'
import styles from './button.module.css'

const Button = ({name,onClick}) => {
  return (
    
      <button onClick={onClick} className={styles.btn} >{name}</button>
    
  )
}

export default Button
