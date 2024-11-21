import React, { useEffect, useState } from "react";
import SearchComponent from "./components/SearchComponent";
import SingleContactComponent from "./components/SingleContactComponent";
import axios from "axios";
import { Contact } from "./types/types";
import ModalComponent from "./components/ModalComponent";
import { toast, ToastContainer } from "react-toastify";
import ContactDetailsComponent from "./components/ContactDetailsComponent";
import AddNUpdateContactComponent from "./components/AddNUpdateContactComponent";
import DeleteComponent from "./components/DeleteComponent";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [tempContacts, setTempContacts] = useState<Contact[]>([]);
  const [showViewDetailsModal, setShowViewDetailsModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact>();
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [modalName, setModalName] = useState("");

  // store the contacts in two states to get the original data when the search performed
  const contactUpdation = (data: Contact[]) => {
    setTempContacts(data);
    setContacts(data);
  };

  // function to fetch contacts from the api
  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json"
      );
      contactUpdation(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // function to add new contact
  const addContact = (
    name: string,
    email: string,
    mobile: string,
    address: string
  ) => {
    const newContact: Contact = {
      id: contacts.length + "frontend",
      name,
      email,
      mobile,
      address,
    };
    contactUpdation([...tempContacts, newContact]);
    setShowModal(false);

    // show the toast message
    toast.success("contact added sucessfuly", {
      position: "bottom-center",
    });
  };

  // function to search the contact
  const searchContact = (text: string) => {
    if (text === "") {
      setContacts(tempContacts);
      return;
    }

    // check if the entered text is number or string
    if (!/^\d+$/.test(text)) {
      const filteredData = tempContacts.filter((data) => {
        return data.name.toLowerCase().includes(text.toLowerCase());
      });
      setContacts(filteredData);
    } else {
      const filteredData = tempContacts.filter((data) => {
        return data.mobile.includes(text);
      });
      setContacts(filteredData);
    }
  };

  const selectAContact = (contact: Contact) => {
    setSelectedContact(contact);
    setShowViewDetailsModal(true);
    setModalName('view')
  };

  const onEditContact = (contact: Contact, index: number) => {
    setSelectedContact({ ...contact, index });
    setShowEditModal(true);
    setModalName('edit')
  };

  // edit function
  const editContact = (
    name: string,
    email: string,
    mobile: string,
    address: string,
    index?: number | null | undefined
  ) => {
    const id = contacts[index!].id;

    if (index! >= 0) {
      const updatedContact = {
        id,
        name,
        email,
        mobile,
        address,
      };
      const temp = [...contacts];
      temp[index!] = updatedContact;
      setContacts(temp);

      // update the tempContacts state as a backup data for search, especially when user update the contact after finding the contact by search
      setTempContacts((pre) => {
        const temp = [...pre];
        const index = temp.findIndex((data) => data.id == id);
        temp[index] = updatedContact;

        return temp;
      });
      setShowEditModal(false);
      toast.success("contact Edited sucessfuly", {
        position: "bottom-center",
      });
    }
  };

  const onDeleteContact = (contact: Contact, index: number) => {
    setSelectedContact({ ...contact, index });
    setShowDeleteModal(true);
    setModalName('delete')
  };

  // delete function
  const deleteContact = () => {
    const id = selectedContact!.id;
    const index = selectedContact!.index;
    if (index! >= 0) {
      const temp = [...contacts];

      // deleted the data from the state contacts
      temp.splice(index!, 1);
      setContacts(temp);

      // update the tempContacts state as a backup data for search, especially when user delete the contact after finding the contact by search
      setTempContacts((pre) => {
        const temp = [...pre];
        const index = temp.findIndex((data) => data.id == id);
        temp.splice(index, 1);
        return temp;
      });
      setShowDeleteModal(false);
      toast.success("contact deleted sucessfuly", {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="relative">
      <ToastContainer />
      <div className="h-screen w-screen bg-white md:p-12 p-6 z-10">
        <div className="h-full md:w-8/12 lg:w-4/12  w-full bg-black rounded-[30px]  md:py-10 py-4 flex flex-col  ">
          <div className="px-4">
            <button
              className="bg-initialButton w-full  md:py-3 py-1 rounded-[10px] flex flex-row justify-center gap-4 "
              onClick={() => {
                setShowModal(true);
                setModalName('add')
              }}
            >
              <p className="md:text-3xl text-xl font-semibold text-white my-auto">
                All contact
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                className="size-10 my-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center  mt-4 px-4 ">
            <SearchComponent onChange={searchContact} />
          </div>
          <div className=" flex flex-1  mt-4  overflow-y-auto ">
            <div className="w-full h-full  " key={contacts.length}>
              {contacts.map((data: Contact, i: number) => {
                return (
                  <SingleContactComponent
                    onDeleteClick={() => {
                      onDeleteContact(data, i);
                    }}
                    onEditClick={() => onEditContact(data, i)}
                    onDetailsClick={() => selectAContact(data)}
                    data={data}
                    indexNum={i + 1}
                    key={data.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalComponent
          onClose={() => {
            setShowModal(false);
          }}
          children={
            <AddNUpdateContactComponent
              constactData={{
                name: "",
                email: "",
                mobile: "",
                address: "",
              }}
              onClose={() => {
                setShowModal(false);
              }}
              onSubmit={addContact}
            />
          }
        />
      )}
      {showViewDetailsModal && (
        <ModalComponent
          onClose={() => {
            setShowViewDetailsModal(false);
          }}
          children={
            <ContactDetailsComponent
              contact={selectedContact!}
              onClose={() => {
                setShowViewDetailsModal(false);
              }}
            />
          }
        />
      )}

      {showEditModal && (
        <ModalComponent
          onClose={() => {
            setShowEditModal(false);
          }}
          children={
            <AddNUpdateContactComponent
              constactData={selectedContact}
              onClose={() => {
                setShowEditModal(false);
              }}
              onSubmit={editContact}
            />
          }
        />
      )}
      {showDeleteModal && (
        <ModalComponent
          onClose={() => {
            setShowDeleteModal(false);
          }}
          children={
            <DeleteComponent
              constactData={selectedContact}
              onClose={() => {
                setShowDeleteModal(false);
              }}
              onSubmit={deleteContact}
            />
          }
        />
      )}
    </div>
  );
}

export default App;
