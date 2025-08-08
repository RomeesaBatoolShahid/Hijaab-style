// src/Layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./NAvbar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
