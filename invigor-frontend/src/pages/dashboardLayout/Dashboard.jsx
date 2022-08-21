import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useAPI } from "../../contexts/apiContext";
import Patients from "../../components/patients/Patients";

import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  const { practices } = useAPI();

  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar practices={practices} />
        <div className="flex flex-row p-4 gap-2">
          <div className="flex flex-col mx-4 gap-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
