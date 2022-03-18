import React from 'react';
// import Navbar from '../component/Navbar';
import { Link } from 'react-router-dom';

import { base_url } from '../config';

import axios from 'axios';

export default class Register extends React.Component {
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
  }

  // header config -> untuk memberikan header berupa 'beare token' sebagai request API
  // sebelum mengakses data
  headerConfig = () => {
      let header = {
          headers: { Authorization: `Bearer ${this.state.token}`}
      }
      return header
  }

  componentDidMount() {
    this.Add()
  }

  // function add -> untuk memberikan inisialisasi data dan untuk menambah data
  Add = () => {
    this.setState({
        // action: "insert",
        // action: "register",
        id_user: 0,
        nama_user: "",
        username: "",
        password: "",
        role: "",
        fillPassword: true
    })
  }

  // function saveUser -> untuk menyimpan data pada db dengan mngakses API
  saveUser = event => {
    event.preventDefault()
    // console.log(this.state.action)
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
        axios.post(url, form, this.headerConfig())
          .then(response => {
              window.alert(response.data.message)
              window.location = "/login"
              this.props.history.push("/login")
          })
          .catch(error => console.log(error))
  }

  render() {
    return(
      <>
      {/* <Navbar /> */}
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7 mt-3'>
              <div style={{"font-family": "Poppins"}} className='card p-4 shadow-lg border-0 my-4'>
                <h4 className='py-3 text-center'>Register Account User</h4>
                <form onSubmit={ev => this.saveUser(ev)}>
                    Nama User
                    <input 
                      type="text" 
                      className="form-control rounded-pill mb-3"
                      placeholder='Your Name'
                      value={this.state.nama_user}
                      onChange={ev => this.setState({nama_user: ev.target.value})} 
                      required
                    />

                    Role
                    <div className="form-group">
                        <select name="role" id_role="role" 
                          className="form-control rounded-pill"
                          onChange={ev => this.setState({role: ev.target.value})}
                          id="exampleFormControlSelect1" 
                          value={this.state.role}
                        >
                            <option value="">--- Pilih ---</option>     
                            <option value="Admin">
                                Admin
                            </option>
                            <option value="Kasir">
                                Kasir
                            </option>
                            <option value="Owner">
                                Owner
                            </option>
                        </select>
                    </div>

                    Username
                    <input 
                      type="text" 
                      className="form-control rounded-pill mb-3"
                      placeholder='username'
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
                          <input 
                            type="password" 
                            className="form-control rounded-pill mb-1"
                            placeholder='***'
                            value={this.state.password}
                            onChange={ev => this.setState({password: ev.target.value})}
                            required
                          />
                        </div>
                    ) }
                    
                    <Link to={"/login"} style={{"float":"right"}} className="btn rounded-pill btn-danger mt-4 mx-2">
                        Cancel
                    </Link>
                    <button type="submit" style={{"float":"right"}} className="btn rounded-pill btn-success mt-4">
                        Simpan
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}