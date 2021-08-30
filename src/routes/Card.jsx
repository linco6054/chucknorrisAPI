import React from "react";
import { useHistory } from "react-router-dom";

function Card({ cat }) {
  const history = useHistory();

  return (
    <div
      onClick={() => history.push(`/${cat}`)}
      className="container bg-white h-24 w-32 flex mx-2 items-center shadow-sm hover:shadow-2xl
     justify-center rounded-md cursor-pointer mt-4 "
    >
      <h1 className="text-indigo-800 text-lg font-normal ">{cat}</h1>
    </div>
  );
}

export default Card;
