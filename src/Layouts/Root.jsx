import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import "./Root.css";

function RootLayout() {
  return (
    <>
      <Header />
      <main className="w-full h-full root-layout">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
