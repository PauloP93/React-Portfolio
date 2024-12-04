import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import "./Root.css";

function RootLayout() {
  return (
    <>
      <Header />
      <main className="w-full h-full root-layout">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default RootLayout;
