import React from "react"
import { Route, Switch } from "react-router-dom";
// import Navbar from "./component/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register";
import AddMember from "./pages/member/AddMember";
import Member from "./pages/member/Member";
import EditMember from "./pages/member/EditMember";
import User from "./pages/user/User"
import AddUser from "./pages/user/AddUser";
import EditUser from "./pages/user/EditUser";
import Paket from "./pages/paket/Paket"
import AddPaket from "./pages/paket/AddPaket";
import EditPaket from "./pages/paket/EditPaket";
import Home from "./pages/Home"
import Transaksi from "./pages/transaksi/Transaksi"
import AddTransaksi from "./pages/transaksi/AddTransaksi";

export default class App extends React.Component {
  render() {
    return (
      <>
      {/* <Navbar /> */}
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/daftar" component={Register} />
          <Route path="/member" component={Member} />
          <Route path="/addMember" component={AddMember} />
          <Route path="/editMember" component={EditMember} />
          <Route path="/user" component={User} />
          <Route path="/addUser" component={AddUser} />
          <Route path="/editUser" component={EditUser} />
          <Route path="/paket" component={Paket} />
          <Route path="/addPaket" component={AddPaket} />
          <Route path="/editPaket" component={EditPaket} />
          <Route path="/transaksi" component={Transaksi} />
          <Route path="/addTransaksi" component={AddTransaksi} />
      </Switch>
      </>
    )
  }
}