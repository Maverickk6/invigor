import Layout from "./components/account/Layout";
import { Routes, Route } from "react-router-dom";
import { APIContextProvider } from "./contexts/apiContext";
// import axios from 'axios';
import DashboardLayout from "./pages/dashboardLayout/DashboardLayout";

function App() {
  return (
    <>
    <APIContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/DashboardLayout" element={<DashboardLayout />} />
      </Routes>
      </APIContextProvider>
    </>
  );
}

export default App;
