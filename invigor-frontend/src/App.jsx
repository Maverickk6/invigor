import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { APIContextProvider } from "./contexts/apiContext";
// import axios from 'axios';
import Dashboard from "./pages/dashboardLayout/Dashboard";
import Patients from "./components/patients/Patients";
import PatientsPage from "./pages/patients/PatientsPage";

function App() {
  return (
    <>
      <APIContextProvider>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="Dashboard" element={<Dashboard />}>
            <Route
              path="Dashboard/patient/:practice_id"
              element={<Patients />}
            />
          </Route>
          <Route path="/patient/:patient_id" element={<PatientsPage />} />
        </Routes>
      </APIContextProvider>
    </>
  );
}

export default App;
