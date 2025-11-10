import Navbar from "./components/navigation/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "70px" }}>
        <Outlet />
      </div>
    </>
  );
}
