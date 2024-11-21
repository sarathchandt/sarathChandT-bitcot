import React from "react";
import { Contact } from "../types/types";
import ModalHeader from "./ModalHeader";

type ContactDetailsComponentProps = {
  contact: Contact;
  onClose: () => void;
};

const ContactDetailsComponent = ({
  contact,
  onClose,
}: ContactDetailsComponentProps) => {
  return (
    <div className="bg-white lg:w-4/12 md:w-6/12 w-10/12   rounded-[20px] md:p-10 p-4">
      <ModalHeader onClose={onClose} title="Contact details" />
      <div className="gap-4 ">
        <p>Name : {contact.name}</p>
        <p>Email : {contact.email}</p>
        <p>Phone : {contact.mobile}</p>
        <p>Address : {contact.address}</p>
      </div>
    </div>
  );
};

export default ContactDetailsComponent;
