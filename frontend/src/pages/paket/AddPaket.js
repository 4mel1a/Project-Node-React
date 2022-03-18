import React from "react"
import Navbar from "../../component/Navbar"

import { base_url } from "../../config"

// import axios
import axios from "axios"

export default class Paket extends React.Component{
    constructor(){
        super()
        this.state = {
            paket: [],
            token: "",
            action: "",
            jenis_paket: "",
            harga: 0,
            image: "",
            uploadFile: true,
            id_paket: ""
        }

        /* logika if-else --> untuk mengecek apakah user yg mengakses telah melakukan
           login sebagai admin atau belum
        */
           if (localStorage.getItem("token")) {
            this.state.token = localStorage.getItem("token")
        } else {
            window.location = "/login"
        }
        this.headerConfig.bind(this)
    }

    // header config -> untuk memberikan header berupa 'beare token' sebagai request API
    // sebelum mengakses data
    headerConfig = () => {
        let header = {
            headers: { Authorization: `Bearer ${this.state.token}`}
        }
        return header
    }

    // function add -> untuk memberikan inisialisasi data dan menampilkan modal untuk menambah data
    Add = () => {
        this.setState({
            // action: "insert",
            id_paket: 0,
            jenis_paket: "",
            harga: 0,
            image: null,
            uploadFile: true
        })
    }

    // function savePaket -> untuk menyimpan data pada db dengan mngakses API
    savePaket = event => {
        event.preventDefault()
        let form = new FormData()
        form.append("id_paket", this.state.id_paket)
        form.append("jenis_paket", this.state.jenis_paket)
        form.append("harga", this.state.harga)

        if (this.state.uploadFile) {
            form.append("image", this.state.image)
        }

        let url = base_url + "/paket"
        // if (this.state.action === "insert") {
            axios.post(url, form, this.headerConfig())
            .then(response => {
                window.alert(response.data.message)
                this.props.history.push("/paket")
            })
            .catch(error => console.log(error))
        // }
    }

  render(){
    return(
      <>
      <Navbar />
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-7 mt-3">
                  <div style={{"font-family": "Poppins"}} className="card p-4 shadow-lg border-0 my-4">
                    <h4 className='py-3 text-center'>Add Data Paket</h4>
                    <form onSubmit={ev => this.savePaket(ev)}>
                        Jenis Paket
                        <input type="text" className="form-control rounded-pill mb-1"
                            placeholder="jenis paket"
                            value={this.state.jenis_paket}
                            onChange={ev => this.setState({jenis_paket: ev.target.value})}
                            required
                        />

                        Harga
                        <input type="number" className="form-control rounded-pill mb-1"
                            placeholder="harga"
                            value={this.state.harga}
                            onChange={ev => this.setState({harga: ev.target.value})}
                            required
                        />

                        {this.state.action === "update" && this.state.uploadFile === false ? (
                            <button className="btn btn-sm rounded-pill btn-dark mb-1 btn-block"
                                onClick={() => this.setState({uploadFile: true})}>
                                Change Paket Image
                            </button>
                        ) : (
                            <div>
                                Paket Image
                                <input type="file" className="form-control rounded-pill mb-1"
                                    onChange={ev => this.setState({image: ev.target.files[0]})}
                                    required
                                />
                            </div>
                        )}

                        <button type="submit" style={{"float":"right"}} className="btn rounded-pill btn-success">
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