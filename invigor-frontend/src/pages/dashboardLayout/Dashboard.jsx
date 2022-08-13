import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useAPI } from "../../contexts/apiContext";

export default function Dashboard() {
  const { practices } = useAPI();

  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col p-4">
          {practices.map((p, key) => (
            <li>
              Practice Name: {p.name}. ID: {p.practice_id}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
