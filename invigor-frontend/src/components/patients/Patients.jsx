import React from "react";
import { useAPI } from "../../contexts/apiContext";

import { useParams } from "react-router-dom";

function Patients() {
  const { patients } = useAPI();

  let { practice_id } = useParams();

  let specific = patients.filter(
    (patient) => patient.practice_id === useParams().practice_id
  );

  return (
    <>
      {specific.map((spec) => (
        <div className="mx-2 flex w-72 p-2 gap-2 bg-[#eee]">
          <p>{spec.first_name}</p>
          <p>{spec.last_name}</p>
          <p>{spec.practice_id}</p>
        </div>
      ))}
    </>
  );
}

export default Patients;
