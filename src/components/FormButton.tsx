import React from "react";

type FormButtonProps = {
  style: string;
  title: string;
  onclick: () => void;
};

const FormButton = ({ style, title,onclick }: FormButtonProps) => {
  return (
    <button onClick={onclick} className={` text-white px-3 py-1 rounded-[5px] ${style}`}>
      {title}
    </button>
  );
};

export default FormButton;
