import React from 'react';
import Navbar from '../../component/Navbar';
import axios from 'axios';
import { base_url } from "../../config"
import $ from "jquery"

export default class AddTransaksi extends React.Component {
  constructor(){
    super()
    this.state = {
        token: "",
        transaksi: [],
        members: [],
        users: [],
        id_member: "",
        tgl: "",
        batas_waktu: "",
        tgl_bayar: "",
        status: "",
        dibayar: false,
        id_user: "",
        id_transaksi: "",
        detail_transaksi: [],
        pakets: [],
        id_paket: "",
        qty: 0,
        action: "",
        selectedItem: null
    }

    /* logika if-else --> untuk mengecek apakah user yg mengakses telah melakukan
       login sebagai admin atau belum
    */
       if (localStorage.getItem("token")) {
        this.state.token = localStorage.getItem("token")
    } else {
        window.location = "/login"
    }
  }

  // untuk tambah transaksi
  Add = () => {
    $("#modal_transaksi").modal("show")
    // ---------------------
    this.setState({
        action: "insert",
        id_transaksi: 0,
        id_member: this.state.members[0].id_member,
        tgl: "",
        batas_waktu: "",
        status: "",
        dibayar: "",
        id_user: this.state.users[0].id_user,
        id_paket: "",
        qty: 0,
        detail_transaksi: []
    })
}

// function saveTransaksi -> untuk menyimpan data transaksi yang telah ditambahkan
saveTransaksi = (event) => {
    event.preventDefault()
    $("#modal_transaksi").modal("hide")
        // menampung data pada detail transaksi
        let detail = {
            id_paket: this.state.id_paket,
            qty: this.state.qty,                
        }

        //ambil array detail_transaksi
        let temp = this.state.detail_transaksi
        temp.push(detail)
        this.setState({ detail_transaksi: temp })

    // menampung data transaksi
    let newTransaksi = {
        id_transaksi: this.state.id_transaksi,
        id_member: this.state.id_member,
        tgl: this.state.tgl,
        batas_waktu: this.state.batas_waktu,
        status: this.state.status,
        dibayar: this.state.dibayar,
        id_user: this.state.id_user,
        detail_transaksi: this.state.detail_transaksi
    }
    
    let url = base_url + "/transaksi"
    if (this.state.action === "insert") {
        axios.post(url, newTransaksi, this.headerConfig())

        .then( response => {
            window.alert(response.data.message)
            this.props.history.push("/transaksi")
        })
        .catch(error => console.log(error))
    }
  }

  render() {
    return(
      <>
      <Navbar />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7 mt-3'>
              <div style={{"font-family": "Poppins"}} className='card p-4 shadow-lg border-0 my-4'>
                <h4 className='py-3 text-center'>Add Transaction</h4>
                <form onSubmit={(e) => this.saveTransaksi(e)}>
                    Nama Member
                    <select className="form-control mb-2"
                      value={this.state.id_member}
                      onChange={e => this.setState({ id_member: e.target.value })}>
                        <option value="">Pilih Nama</option>
                        {this.state.members.map(member => (
                          <option value={member.id_member}>
                              {member.nama_member}
                          </option>
                        ))}
                    </select>
                                        
                    Tanggal
                    <input type="date" className="form-control mb-1" 
                      value={this.state.tgl}
                      onChange={ev => this.setState({tgl: ev.target.value})}
                    />

                    Batas Waktu
                    <input type="date" className="form-control mb-1" 
                      value={this.state.batas_waktu}
                      onChange={ev => this.setState({batas_waktu: ev.target.value})}
                    />

                    Status Paket
                    <div className="form-group">
                      <select name="status" id_status="status" className="form-control"
                        onChange={ev => this.setState({status: ev.target.value})}
                        id="exampleFormControlSelect1" value={this.state.status}>
                          <option>--- Pilih Status Paket ---</option>     
                          <option value="1">
                            Baru
                          </option>
                          <option value="2">
                            Proses
                          </option>
                          <option value="3">
                            Selesai
                          </option>
                          <option value="4">
                            Diambil
                          </option>
                      </select>
                    </div>

                    Status Bayar
                    <div className="form-group">
                      <select name="bayar" id_bayar="bayar" className="form-control"
                        onChange={ev => this.setState({dibayar: ev.target.value})}
                        id="exampleFormControlSelect1" value={this.state.dibayar}>
                          <option>--- Pilih Status Bayar ---</option>     
                          <option value="0">
                            Belum Bayar
                          </option>
                          <option value="1">
                            Sudah Bayar
                          </option>
                      </select>
                    </div>

                    Nama User
                    <select className="form-control mb-2"
                      value={this.state.id_user}
                      onChange={e => this.setState({ id_user: e.target.value })}>
                        <option value="">Pilih Nama</option>
                        {this.state.users.map(user => (
                          <option value={user.id_user}>
                            {user.nama_user}
                          </option>
                        ))}
                    </select>
                                        
                                        Jenis Paket
                                        <select className="form-control mb-2"
                                            value={this.state.id_paket}
                                            onChange={e => this.setState({ id_paket: e.target.value })}>
                                            <option value="">Pilih Paket</option>
                                            {this.state.pakets.map(paket => (
                                                <option value={paket.id_paket}>
                                                    {paket.jenis_paket}
                                                </option>
                                            ))}
                                        </select>

                                        Jumlah (Qty)
                                        <input type="number" className="form-control mb-2"
                                            value={this.state.qty}
                                            onChange={e => this.setState({ qty: e.target.value })} />

                                        <button type="submit" className="btn btn-success">
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