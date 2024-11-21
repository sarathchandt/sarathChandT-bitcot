import React from "react";
import { Contact } from "../types/types";
import ModalHeader from "./ModalHeader";
import FormButton from "./FormButton";

type DeleteComponentProps = {
  onClose: () => void;
  constactData: Contact | undefined;
  onSubmit: () => void;
};

const DeleteComponent = ({
  constactData,
  onClose,
  onSubmit,
}: DeleteComponentProps) => {
  return (
    <div className="bg-white lg:w-4/12 md:w-6/12 w-10/12   rounded-[20px] md:p-10 p-4">
      <ModalHeader onClose={onClose} title="Are you sure?" />
      <div className="mb-4">
        <p>Name : {constactData?.name}</p>
        <p>Email : {constactData?.email}</p>
        <p>Phone : {constactData?.mobile}</p>
        <p>Address : {constactData?.address}</p>
      </div>
      <div className="flex flex-row gap-4">
        <FormButton
          onclick={() => onSubmit()}
          style="bg-red-500"
          title="Delete"
        />
        <FormButton onclick={onClose} style="bg-black" title="Cancel" />
      </div>
    </div>
  );
};

export default DeleteComponent;
