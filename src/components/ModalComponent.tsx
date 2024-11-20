import React from "react";

type ModalComponentProp = {
  onClose: () => void;
  children: React.ReactNode;
};

const ModalComponent = ({ onClose,children }: ModalComponentProp) => {
  const onCloseFunction = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="absolute top-0  z-20 w-screen h-screen ">
      <div className="w-full h-full relative">
        <div className="  w-full h-full bg-black bg-opacity-50 z-10" />
        <div
          className=" absolute top-0 left-0 z-20 w-full h-full  flex justify-center items-center "
          onClick={onCloseFunction}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
