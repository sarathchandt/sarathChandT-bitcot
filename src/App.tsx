import React, { useEffect, useState } from "react";
import SearchComponent from "./components/SearchComponent";
import SingleContactComponent from "./components/SingleContactComponent";
import axios from "axios";
import { Contact } from "./types/types";
import ModalComponent from "./components/ModalComponent";

function App() {
  const [contacts, setContacts] = useState([]);
  const [showModal,setShowModal] = useState(false)

  // function to fetch contacts from the api
  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json"
      );

      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="relative">
      <div className="h-screen w-screen bg-white md:p-12 p-6 z-10">
        <div className="h-full md:w-6/12 lg:w-4/12  w-full bg-black rounded-[30px]  md:py-10 py-4 flex flex-col  ">
          <div className="px-4">
            <button className="bg-initialButton w-full md:text-3xl text-xl font-semibold text-white md:py-3 py-1 rounded-[10px] "
            onClick={()=>{setShowModal(true)}}
            >
              All contact
            </button>
          </div>
          <div className="flex justify-center  mt-4 px-4 ">
            <SearchComponent
              onChange={(text) => {
                console.log(text);
              }}
            />
          </div>
          <div className=" flex flex-1  mt-4  overflow-y-auto ">
            <div className="w-full h-full  ">
              {contacts.map((data: Contact) => {
                return <SingleContactComponent data={data} key={data.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
     {showModal &&  <ModalComponent onClose={()=>{setShowModal(false)}} children={<div className="w-10 h-10 bg-white" >hai</div>} />}
    </div>
  );
}

export default App;
