import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
// import { IoAddCircleSharp } from "react-icons/io5";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaRegWindowMinimize } from "react-icons/fa";

const question = ({ title, info }) => {
  const [event, setEvent] = useState(false);

  const changeEvent = () => {
    setEvent(!event);
  };
  return (
    <div className="hover:shadow-[1px_5px_15px_rgba(0,0,0,0.2)] my-4 mx-8  rounded-lg  ">
      <header className="   px-6  flex justify-between items-center">
        <h1 className="text-[1.8rem] ">{title}</h1>
        <button className=" text-[1rem] p-6" onClick={changeEvent}>
          {event ? <FaRegWindowMinimize /> : <GrAdd />}
        </button>
      </header>
      <p className="mb-4 mx-5">{event && info}</p>
    </div>
  );
};
export default question;
