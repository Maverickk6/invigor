import React from "react";

import { useAPI } from "../../contexts/apiContext";

import { useParams } from "react-router-dom";

function PatientsPage() {
  const { patients } = useAPI();

  let { patient_id } = useParams();

  let specific = patients.filter(
    (patient) => patient.patient_id === useParams().patient_id
  );

  return <div>Patients</div>;
}

export default PatientsPage;
