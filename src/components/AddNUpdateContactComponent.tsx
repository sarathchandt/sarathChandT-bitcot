import React, { useState } from "react";
import InputComponent from "./InputComponent";
import FormButton from "./FormButton";
import { toast } from "react-toastify";
import { validateForm } from "../validation/validations";
import ModalHeader from "./ModalHeader";

type AddNUpdateContactComponentProps = {
  onSubmit: (
    name: string,
    email: string,
    phone: string,
    address: string,
    index?: number | null
  ) => void;
  onClose: () => void;
  constactData: any;
};

const AddNUpdateContactComponent = ({
  onClose,
  onSubmit,
  constactData,
}: AddNUpdateContactComponentProps) => {
  const [name, setName] = useState(constactData.name);
  const [email, setEmail] = useState(constactData.email);
  const [phone, setPhone] = useState(constactData.mobile);
  const [address, setAddress] = useState(constactData.address);

  // function for submit the form
  const onSubmitFunction = () => {
    // check the validation of the input fields
    const isValidate = validateForm({ name, email, phone, address });

    if (isValidate.isValidate) {
      onSubmit(name, email, phone, address, constactData.index);
    } else {
      toast.error(isValidate.error, {
        position: "bottom-center",
      });
    }
  };

  // function for reset the input fields
  const resetFunction = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="bg-white lg:w-4/12 md:w-6/12 w-10/12   rounded-[20px] md:p-10 p-4">
  
      <ModalHeader onClose={onClose} title="Add Contact" />
      <div className="mb-4">
        <InputComponent
          label="Name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          placeholder="Enter the name"
          type="text"
          value={name}
        />
      </div>
      <div className="mb-4">
        <InputComponent
          label="Email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter the email"
          type="email"
          value={email}
        />
      </div>
      <div className="mb-4">
        <InputComponent
          label="Phone"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPhone(e.target.value);
          }}
          placeholder="Enter contact number"
          type="number"
          value={phone}
        />
      </div>
      <div className="mb-4">
        <InputComponent
          label="Address"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setAddress(e.target.value);
          }}
          placeholder="Enter the address"
          type="text"
          value={address}
        />
      </div>
      <div className="flex flex-row gap-4">
        <FormButton
          onclick={onSubmitFunction}
          style="bg-formButtonBlue"
          title="Submit"
        />
        <FormButton onclick={resetFunction} style="bg-black" title="Reset" />
      </div>
    </div>
  );
};

export default AddNUpdateContactComponent;
