import { Route, Routes } from "react-router";
import { DiagnosingDataIssues } from "./pages/DiagnosingDataIssues";
import { PythonSetup } from "./pages/PythonSetup";
import { TableauOverview } from "./pages/TableauOverview";
import { VBAInExcel } from "./pages/VBAInExcel";

export const RoutesCmp = () => {
  return (<Routes>
    <Route path="cola_data_resource_portal">
      <Route path="diagnosing-data-issues" element={<DiagnosingDataIssues />} /> 
      <Route path="python-setup" element={<PythonSetup />} /> 
      <Route path="tableau-overview" element={<TableauOverview />} /> 
      <Route path="vba-in-excel" element={<VBAInExcel />} /> 
    </Route>
  </Routes>)
};