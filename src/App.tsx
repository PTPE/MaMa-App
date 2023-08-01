import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Hompage from "./pages/Hompage";
import { AppNav } from "./components/AppNav";
import ClientList from "./pages/ClientList";
import CreateSchedule from "./pages/CreateSchedule";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Hompage />} path="/"></Route>
        <Route element={<AppNav />} path="app">
          <Route index element={<Navigate to="list" replace />} />
          <Route element={<ClientList />} path="list"></Route>
          <Route element={<CreateSchedule />} path="create"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
