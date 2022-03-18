import React from 'react';
import Navbar from "../../component/Navbar"

// import base_url dari file config.js
import { base_url } from "../../config"

// import axios
import axios from "axios"


export default class AddMember extends React.Component {
  constructor(){
    super()
    // siapkan state --> untuk pembuatan halaman customer
    this.state = {
        member: [],
        token: "",
        action: "",
        nama_member: "",
        tlp: "",
        alamat: "",
        jenis_kelamin: "",
        id_member: ""
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
          headers: { Authorization: `Bearer ${this.state.token}` }
      }
      return header
  }

  // function add -> untuk memberikan inisialisasi data dan menampilkan modal untuk menambah data
  Add = () => {
    this.setState({
        action: "insert",
        id_member: 0,
        nama_member: "",
        alamat: "",
        jenis_kelamin: "",
        tlp: ""
    })
  }

  //function saveMember -> untuk menyimpan data pada db dengan mngakses API
    saveMember = event => {
        event.preventDefault()
        let form = {
            id_member: this.state.id_member,
            nama_member: this.state.nama_member,
            alamat: this.state.alamat,
            jenis_kelamin: this.state.jenis_kelamin,
            tlp: this.state.tlp
        }

        let url = base_url + "/member"
            axios.post(url, form, this.headerConfig())
            .then(response => {
                window.alert(response.data.message)
                this.props.history.push("/member")
            })
            .catch(error => console.log(error))
    }
  render() {
    return(
      <>
      <Navbar />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7 mt-3'>
              <div style={{"font-family": "Poppins"}} className='card p-4 shadow-lg border-0 my-4'>
                <h4 className='py-3 text-center'>Add Data Member</h4>
                <form onSubmit={ev => this.saveMember(ev)}>
                  Member Name
                  <input type="text" className="form-control rounded-pill mb-3"
                    placeholder='Nama Member'
                    value={this.state.nama_member}
                    onChange={ev => this.setState({nama_member: ev.target.value})}
                    required
                  />

                  Member Address
                  <input type="text" className="form-control rounded-pill mb-3"
                    placeholder='Alamat Member'
                    value={this.state.alamat}
                    onChange={ev => this.setState({alamat: ev.target.value})}
                    required
                  />

                  Jenis Kelamin
                  <div className="form-group">
                    <select name="jenis_kelamin" id_jenis="jenis_kelamin" className="form-control rounded-pill"
                      onChange={ev => this.setState({jenis_kelamin: ev.target.value})}
                      id="exampleFormControlSelect1" value={this.state.jenis_kelamin}>
                        <option>--- Pilih ---</option>     
                        <option value="Laki-Laki">
                          Laki-Laki
                        </option>
                        <option value="Perempuan">
                          Perempuan
                        </option>
                    </select>
                  </div>

                  Member Phone
                  <input type="text" className="form-control rounded-pill mb-1"
                    placeholder='No.Telepon'
                    value={this.state.tlp}
                    onChange={ev => this.setState({tlp: ev.target.value})}
                    required
                  />

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