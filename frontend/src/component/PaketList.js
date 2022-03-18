import React from "react";
// untuk menampilkan icon
import * as FaIcons from "react-icons/fa"
import * as BiIcons from "react-icons/bi"

export default class PaketList extends React.Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-12 col-md-6 mt-2">
                <div className="card border-dark rounded">
                    <div className="card-body row">
                        {/* manampilkan gambar */}
                        <div className="card-img-top text-center">
                            <img src={this.props.image} className="img" height="200" width="200" alt={this.props.jenis_paket} />
                        </div>

                        {/* menampilkan deskripsi */}
                        <div className="col mt-3">
                            <h6 className="text-dark text-center">
                                Jenis Paket : {this.props.jenis_paket}
                            </h6>
                            <h6 className="text-danger text-center">
                                Harga : {this.props.harga}
                            </h6>

                            {/* button untuk mengedit */}
                            <center>
                                <button className="btn btn-sm btn-primary m-1">
                                    <FaIcons.FaEdit onClick={this.props.onEdit} />
                                </button>

                                {/* button untuk menghapus */}
                                <button className="btn btn-sm btn-danger m-1">
                                    <FaIcons.FaTrashAlt onClick={this.props.onDrop} />
                                </button>
                            </center>
                        </div>
                    </div>
                </div>                    
            </div> 
        )
    }
}