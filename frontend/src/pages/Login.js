import React from "react"
import { Link } from "react-router-dom"

// import Navbar from "../component/Navbar"
import "../css/login.css"
// import styled from "styled-components"

// import axios
import axios from "axios"

// import base_url dari file config.js
import { base_url } from "../config"

// const Row = styled.div`
//     background: rgb(8, 59, 134);
//     border-radius: 30px;
//     box-shadow: 12px 12px 22px grey;
// `;

export default class Login extends React.Component{
    constructor(){
        super()
        // tambah state sesuai kebutuhan
        this.state = {
            username: "",
            password: "",
            // role: "",
            message: "",
            logged: true
        }
    }

    // arrow function -> untuk menjalankan fungsi login
    Login = event => {
        event.preventDefault()
        // if(this.state.role === "Admin") {
            let sendData = {
                username: this.state.username,
                password: this.state.password,
                // role: this.state.role
            }
    
            let url = base_url + "/auth"
    
            axios.post(url, sendData)
            .then(res => {
                this.setState({logged: res.data.logged})
                if (this.state.logged) {
                    let user = res.data.data
                    let token = res.data.token
                    localStorage.setItem("user", JSON.stringify(user))
                    localStorage.setItem("token", token)
                    this.props.history.push("/")
                } else {
                    this.setState({message: res.data.message})
                }
            })
            .catch(error => console.log(error))
        // } 
    }

    render(){
        return(
            <div>
                {/* <Navbar /> */}
                <div style={{"font-family": "Poppins"}} className="Form my-4 mx-5">
                    <div style={{"justifyContent": "center", "padding": "10px 50px 0px 120px"}} className="container">
                        <div style={{"background": "rgb(8, 59, 134)", "borderRadius": "30px", "boxShadow": "12px 12px 22px grey", "width": "900px"}} className="row no-gutters justify-content-center bg-secondary">
                            <div className="col-lg-5">
                                <img src="image/room.jpg" style={{"borderTopLeftRadius": "30px", "borderBottomLeftRadius": "30px", "maxWidth": "100%", "height": "auto"}} className="img-fluid"/>
                            </div>
                            <div className="col-lg-7 px-5 pt-5">
                                { !this.state.logged ? 
                                (
                                    <div className="alert alert-danger mt-1">
                                        { this.state.message }
                                    </div>
                                ) : null }
                                <h1 className="text-white font-weight-bold py-3">Login</h1>
                                <h4 className="text-white">Sign into your account</h4>
                                <form onSubmit={ev => this.Login(ev)}>
                                    {/* username */}
                                    <div className="form-row">
                                        <div className="col-lg-7">
                                            <input type="text" placeholder="username" className="form-control my-3 p-4 mb-1" value={this.state.username}
                                            onChange={ev => this.setState({username: ev.target.value})} />
                                        </div>
                                    </div>

                                    {/* password */}
                                    <div className="form-row">
                                        <div className="col-lg-7">
                                            <input type="password" placeholder="***" className="form-control my-3 p-4 mb-1" value={this.state.password}
                                            onChange={ev => this.setState({password: ev.target.value})}
                                            autoComplete="false" />
                                        </div>
                                    </div>

                                    {/* role */}
                                    <div className="form-row">
                                        <div className="col-lg-12">
                                            {/* admin */}
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" className="custom-control-input" id="customRadio" name="example" 
                                                value={this.state.role} onChange={ev => this.setState({level: ev.target.value})}/>
                                                <label className="custom-control-label" htmlFor="customRadio">Admin</label>
                                            </div>
                                            {/* kasir */}
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" className="custom-control-input" id="customRadio2" name="example" 
                                                value={this.state.role} onChange={ev => this.setState({level: ev.target.value})}/>
                                                <label className="custom-control-label" htmlFor="customRadio2">Kasir</label>
                                            </div>
                                            {/* Owner */}
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" className="custom-control-input" id="customRadio2" name="example" 
                                                value={this.state.role} onChange={ev => this.setState({level: ev.target.value})}/>
                                                <label className="custom-control-label" htmlFor="customRadio2">Owner</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-lg-7">
                                            <button type="submit" className="btn1 mt-3 mb-5"> Sign In </button>
                                        </div>
                                    </div>
                                    <p className="text-white">Don't have an account ? <Link to="/daftar" style={{"textDecoration":"none"}} className="text-dark font-weight-bold pull-right">Register Here !</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            // <div className="container d-flex h-100 justify-content-center align-items-center">
            //     <div className="col-sm-8 card my-5">
            //         <div className="card-header bg-primary text-white text-center">
            //             <h4>Laundry</h4>
            //             <strong className="text-warning">Admin Sign In</strong>
            //         </div>
            //         <div className="card-body">
            //             { !this.state.logged ? 
            //             (
            //                 <div className="alert alert-danger mt-1">
            //                     { this.state.message }
            //                 </div>
            //             ) : null }
            //             <form onSubmit={ev => this.Login(ev)}>
            //                 {/* username */}
            //                 <div className="form-group row">
            //                     <label className="col-sm-2 col-form-label">Username</label>
            //                     <div className="col-sm-10">
            //                         <input type="text" className="form-control mb-1" value={this.state.username}
            //                         onChange={ev => this.setState({username: ev.target.value})} />
            //                     </div>
            //                 </div>

            //                 {/* password */}
            //                 <div className="form-group row">
            //                     <label className="col-sm-2 col-form-label">Password</label>
            //                     <div className="col-sm-10">
            //                         <input type="password" className="form-control mb-1" value={this.state.password}
            //                         onChange={ev => this.setState({password: ev.target.value})}
            //                         autoComplete="false" />
            //                     </div>
            //                 </div>

            //                 <button className="btn btn-block btn-primary mb-1" type="submit">
            //                     Sign In
            //                 </button>

            //                 <a href="" className="small text-right">Daftar Akun</a>
            //             </form>
            //         </div>
            //     </div>
            // </div>
        )
    }
}