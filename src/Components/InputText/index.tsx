'use client'
import React, { useState } from 'react'

export const InputText = ({ label, id, defaultValue = '' }: { label: string; id: string; defaultValue?: string }) => {
  const [value, setValue] = useState<string>(defaultValue)
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <br />
      <input type='text' id={id} onChange={e => setValue(e.target.value)} />
    </>
  )
}

export default InputText
