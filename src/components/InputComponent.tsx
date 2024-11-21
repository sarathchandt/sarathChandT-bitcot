import React from "react";

type InputComponentProps = {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error?: string;
};

const InputComponent = ({
  onChange,
  placeholder,
  type,
  value,
  label,
  error=""
}: InputComponentProps) => {
  return (
    <div className="w-full">
      <p>{label}</p>
      <input
        type={type}
        value={value}
        className="outline-none border-[3px] w-full rounded-[10px] px-4 py-1"
        placeholder={placeholder}
        onChange={onChange}
      />
     {error.length != 0 &&  <p className="text-red-600" >this is the error</p>}
    </div>
  );
};

export default InputComponent;
