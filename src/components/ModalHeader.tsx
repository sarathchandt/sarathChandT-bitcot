import React from 'react'

type ModalHeaderProps = {
  onClose: () => void;
  title: string;
}

const ModalHeader = ({onClose,title}:ModalHeaderProps) => {
  return (
    <div className="flex flex-row justify-between border-b-[3px] mb-4">
    <h1 className="my-auto md:text-2xl text-xl font-semibold">
      {title}
    </h1>
    <div className="h-7 w-7  mb-1" onClick={onClose}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  </div>
  )
}

export default ModalHeader