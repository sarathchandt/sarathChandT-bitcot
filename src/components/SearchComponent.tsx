import React, { useState } from 'react'

type SearchComponentProps = {
    onChange:(text:string) => void
}

const SearchComponent = ({onChange}:SearchComponentProps) => {

    const [value,setValue] = useState('')

    const onChangeFunction = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }


  return (
   <input type="text" className='outline-none px-4 py-1 rounded-[10px]' placeholder='Search contact' value={value} onChange={onChangeFunction} />
  )
}

export default SearchComponent