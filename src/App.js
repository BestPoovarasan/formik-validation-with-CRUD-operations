import logo from "./logo.svg";
import "./App.css";
import "./sb-admin-2.min.css";
import Sidebar from "./sidebar.jsx";
import Topbar from "./topbar.jsx";
import Dashboard from "./Dashboard.jsx";
import User from "./User.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./products";
import Createuser from "./createuser";
import Viewuser from "./viewuser";
import Useredit from "./useredit";
import { useFormik } from "formik";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="users" element={<User />} />
                <Route path="user/createuser" element={<Createuser />} />
                <Route path="user/view/:id" element={<Viewuser/>} />
                <Route path="user/edit/:id" element={<Useredit/>} />
                <Route path="products" element={<Products />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
