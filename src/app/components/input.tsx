import React, { ChangeEvent, FC } from 'react'
import styles from "@/app/styles/authenticationForm.module.css"
type InputType = {
    title: string;
    setData: any;
    type: string;
}

const Input: FC<InputType> = ({title, setData, type}) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setData((prevState: any) => ({
            ...prevState,
            [name]: value
        }))
    }

  return (
    <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>{title}</label>
        <input name={title} onChange={(e) => handleChange(e)} type={type} className={styles.inputField}/>
    </div>
  )
}

export default Input