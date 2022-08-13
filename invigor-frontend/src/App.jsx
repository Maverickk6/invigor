import Layout from "./components/account/Layout";
import { Routes, Route } from "react-router-dom";
import { APIContextProvider } from "./contexts/apiContext";
// import axios from 'axios';
import Dashboard from "./pages/dashboardLayout/Dashboard";

function App() {
  return (
    <>
      <APIContextProvider>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="Dashboard" element={<Dashboard />} />
        </Routes>
      </APIContextProvider>
    </>
  );
}

export default App;
