import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../../component/Navbar"

// import base_url dari file config.js
import { base_url } from "../../config"

// import axios
import axios from "axios"

// import jquery
import $ from "jquery"

// import modal -> untuk versi bootstrap 5
// import { Modal } from "bootstrap"
// note : jika menggunakan bootstrap 4 tidak ush menambahkan script diatas

export default class User extends React.Component{
    constructor(){
        super()
        this.state = {
            token: "",
            action: "",
            user: [],
            id_user: "",
            nama_user: "",
            username: "",
            password: "",
            role: "",
            fillPassword: true            
        }

        /* logika if-else --> untuk mengecek apakah user yg mengakses telah melakukan
           login sebagai admin atau belum
        */
        if (localStorage.getItem("token")) {
            this.state.token = localStorage.getItem("item")
        } else {
            window.location = "/login"
        }
    }

    // header config -> untuk memberikan header berupa 'beare token' sebagai request API
    // sebelum mengakses data
    headerConfig = () => {
        let header = {
            headers: { Authorization: `Bearer ${this.state.token}`}
        }
        return header
    }

    // getUser -> untuk mengakses API get user
    getUser = () => {
        let url = base_url + "/user"
        axios.get(url, this.headerConfig())
        .then(response => {
            this.setState({user: response.data})
        })
        .catch(error => {
            if (error.response) {
                if (error.response.status) {
                    window.alert(error.response.data.message)
                    this.props.history.push("/login")
                }
            } else {
                console.log(error);
            }
        })
    }

    componentDidMount() {
        this.getUser()
    }

    // function edit -> untuk memberikan inisialisasi data dan menampilkan modal untuk mengedit data
    Edit = selectedItem => {
        // menampilkan modal versi bootstrap 5
        // let myModal = new Modal (document.getElementById("modal_user"))
        // myModal.show()
        // --------------------
        // Note : versi bootstrap 4
        $("#modal_user").modal("show")
        // ---------------------
        this.setState({
            action: "update",
            id_user: selectedItem.id_user,
            nama_user: selectedItem.nama_user,
            username: selectedItem.username,
            password: "",
            role: selectedItem.role,
            fillPassword: false
        })
    }

    // function saveUser -> untuk menyimpan data pada db dengan mngakses API
    saveUser = event => {
        event.preventDefault()
        $("#modal_user").modal("hide")
        let form = {
            id_user: this.state.id_user,
            nama_user: this.state.nama_user,
            role: this.state.role,
            username: this.state.username
        }
        
        if (this.state.fillPassword) {
            form.password =  this.state.password
        }

        let url = base_url + "/user"
        if (this.state.action === "insert") {
            axios.post(url, form, this.headerConfig())
            .then(response => {
                window.alert(response.data.message)
                this.getUser()
            })
            .catch(error => console.log(error))
        } else if(this.state.action === "update") {
            axios.put(url, form, this.headerConfig())
            .then(response => {
                window.alert(response.data.message)
                this.getUser()
            })
            .catch(error => console.log(error))
        }
    }

    // dropUser -> untuk menghapus data user
    dropUser = selectedItem => {
        if (window.confirm("Yakin mau dihapus ?")) {
            let url = base_url + "/user/" + selectedItem.id_user
            axios.delete(url, this.headerConfig())
            .then(response => {
                window.alert(response.data.message)
                this.getUser()
            })
            .catch(error => console.log(error))
        }
    }

    render(){
        return(
            <div>
                <Navbar />
                <div style={{"font-family": "Poppins"}} className="container">
                    <h2 className="text-bold text-dark text-center mt-3">
                        Daftar User
                    </h2>
                    <center>
                        <Link to="/addUser" className="btn btn-success btn-sm mb-3">Add User</Link>
                    </center>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nama User</th>
                                <th>Username</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.user.map((item, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.nama_user}</td>
                                    <td>{item.username}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-sm btn-info m-1"
                                        onClick={() => this.Edit(item)}>
                                            Edit
                                        </button>

                                        <button className="btn btn-sm btn-info m-1"
                                        onClick={() => this.dropUser(item)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Modal User */}
                    <div className="modal fade" id="modal_user">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header bg-info text-white">
                                    <h4>Form User</h4>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={ev => this.saveUser(ev)}>
                                        Nama User
                                        <input type="text" className="form-control mb-1"
                                        value={this.state.nama_user}
                                        onChange={ev => this.setState({nama_user: ev.target.value})} 
                                        required
                                        />

                                        Role
                                        <div className="form-group">
                                            <select name="role" id_role="role" className="form-control"
                                            onChange={ev => this.setState({role: ev.target.value})}
                                            id="exampleFormControlSelect1" value={this.state.role}>
                                                <option>--- Pilih ---</option>     
                                                <option value="admin">
                                                    Admin
                                                </option>
                                                <option value="kasir">
                                                    Kasir
                                                </option>
                                            </select>
                                        </div>

                                        Username
                                        <input type="text" className="form-control mb-1"
                                        value={this.state.username}
                                        onChange={ev => this.setState({username: ev.target.value})}
                                        required
                                        />

                                        { this.state.action === "update" && this.state.fillPassword === false ? (
                                            <button className="btn btn-sm btn-secondary mb-1 btn-block"
                                            onClick={() => this.setState({fillPassword: true})}>
                                                Change Password
                                            </button>
                                        ) : (
                                            <div>
                                                Password
                                                <input type="password" className="form-control mb-1"
                                                value={this.state.password}
                                                onChange={ev => this.setState({password: ev.target.value})}
                                                required
                                                />
                                            </div>
                                        ) }

                                        <button type="submit" className="btn btn-block btn-success">
                                            Simpan
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}