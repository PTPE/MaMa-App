import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Hompage from "./pages/Hompage";
import { AppNav } from "./components/AppNav";
import ClientDataDisplay from "./pages/ClientDataDisplay";
import CreateSchedule from "./pages/CreateSchedule";
import { ClientDataProvider } from "./context/ClientData";
export default function App() {
  return (
    <ClientDataProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Hompage />} path="/"></Route>
          <Route element={<AppNav />} path="app">
            <Route index element={<Navigate to="clientData" replace />} />
            <Route element={<ClientDataDisplay />} path="clientData"></Route>
            <Route element={<CreateSchedule />} path="create"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ClientDataProvider>
  );
}
