import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ practices }) {
  return (
    <div className=" h-full w-48 flex flex-col gap-4 px-4 m-4">
      {practices.map((p, key) => (
        <Link className="ml-4 bg-blue-800" key={key} to={`Dashboard/patient/${p.practice_id}`}>
          <p>
            
            Practice Name: {p.name}. ID: {p.practice_id}{" "}
          </p>
        </Link>
      ))}
    </div>
  );
}
