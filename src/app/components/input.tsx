import React, { ChangeEvent, FC } from 'react'

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
    <div>
        <label>{title}</label>
        <input name={title} onChange={(e) => handleChange(e)} type={type}/>
    </div>
  )
}

export default Input