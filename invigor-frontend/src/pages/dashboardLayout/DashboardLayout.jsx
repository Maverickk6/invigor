import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useAPI } from "../../contexts/apiContext";


export default function DashboardLayout() {
  const { practices } = useAPI();

  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col p-4">
          {practices.map((p, key) => (
            <li > {p.name}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
