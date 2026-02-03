import { Outlet, Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
      <Header />

      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/employees">Employees</Link> |{" "}
        <Link to="/organization">Organization</Link>
      </nav>

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
