import { Outlet } from "react-router-dom";
export function AppNav() {
  return (
    <div>
      <div>Nav</div>
      <Outlet />
    </div>
  );
}
