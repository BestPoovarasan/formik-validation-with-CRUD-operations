import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar.jsx';
import Topbar from './topbar.jsx';
import Dashboard from "./Dashboard.jsx";
import User from "./User.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './products';
import Createuser from './createuser';

// import '../public/sb-admin-2.min.css';

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
        <Route path="/" element={<Dashboard/>} />
        <Route path="/users" element={<User/>} />
        <Route path="/users/createuser" element={<Createuser/>} />
        <Route path="/products" element={<Products/>} />
        </Routes>
        
      </div>
      </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
