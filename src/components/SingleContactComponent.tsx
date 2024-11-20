import React from 'react'
import { Contact } from '../types/types'

type SingleContactComponentProps = {
    data:Contact
}

const SingleContactComponent = ({data}:SingleContactComponentProps) => {
  return (
    <div className="mb-1 px-4">

    <div className='bg-white rounded-[10px] flex flex-row justify-between ' >
        <div className="md:w-2/12 w-1/12  flex justify-center items-center">
            <p>{data?.id}</p>
        </div>
        <div className="md:w-6/12 w-7/12 flex py-2 flex-row gap-4">
        <div className="md:h-10 h-6 md:w-10 w-6 my-auto bg-blue-500"></div>
        <div className="">
            <p>{data?.name}</p>
            <p>{data?.mobile}</p>
        </div>
        </div>
        <div className="w-4/12 flex flex-row md:gap-4 gap-3">
        <div className="md:h-7 h-4 md:w-7 w-4 my-auto bg-blue-500"></div>
        <div className="md:h-7 h-4 md:w-7 w-4 my-auto bg-blue-400"></div>
        <div className="md:h-7 h-4 md:w-7 w-4 my-auto bg-blue-300"></div>

        </div>
    </div>
    </div>
  )
}

export default SingleContactComponent