import { BrowserRouter, Routes, Route } from "react-router-dom";
import AkunList from "./components/akun/AkunList";
import AddAkun from "./components/akun/AddAkun";
import EditAkun from "./components/akun/EditAkun";
import MainLayout from "./components/views/main-layout";
// import Navbar from "./components/views/nav";
import AkunTable from "./components/akun/AkunTable";
import SideBar from "./components/views/sidebar";
import Menu from "./components/menu/MenuList";
import AddMenu from "./components/menu/AddMenu";
import EditMenu from "./components/menu/EditMenu";

import PesananList from "./components/pesanan/PesananList";
import AddPesanan from "./components/pesanan/AddPesanan";
import EditPesanan from "./components/pesanan/EditPesanan";


function App() {

  return (

    <BrowserRouter>

      <div class="border-end bg-white">
        <div class="row d-flex">
          <div class="col-md-auto text-left">
            <SideBar />
          </div>
          <div class="col-sm-10">
            <Routes>
              {/* <Route path="SideBar" element={<SideBar />} /> */}
              <Route path="/" element={<MainLayout />} />
              <Route path="akun" element={<AkunList />} />
              <Route path="akun/add" element={<AddAkun />} />
              <Route path="akuntable/edit/:id" element={<EditAkun />} />
              <Route path="akuntable" element={<AkunTable />} />

              <Route path="menu" element={<Menu />} />
              <Route path="menu/add" element={<AddMenu />} />
              <Route path="menu/edit/:id" element={<EditMenu />} />

              <Route path="pesanan" element={<PesananList />} />
              <Route path="pesanan/add" element={<AddPesanan />} />
              <Route path="pesanan/edit/:id" element={<EditPesanan />} />

            </Routes>
          </div>
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
