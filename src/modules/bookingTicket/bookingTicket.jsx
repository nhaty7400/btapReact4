import React, { Component, Fragment } from "react";
import "./style.css";
import ThongTinDatGhe from "./thongTinDatGhe";
import danhSachGhe from "../../data/danhSachGhe.json";
import HangGhe from "./hangGhe";

export default class BookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <Fragment key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </Fragment>
      );
    });
  };
  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./image/bookingTicket/bgmovie.jpg')",
          backgroundSize: "100%",
          overflow:"scroll",
        }}
        className="bookingMovie"
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            position: "fixed",
            width: "100%",
            height: "100%",
            overflow:"scroll",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4">
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                <div className="mt-3 text-light" style={{ fontSize: 25 }}>
                  Màn hình
                </div>
                <div className="d-flex flex-row justify-content-center mt-1">
                  <div className="screen"></div>
                </div>
                <div style={{ marginLeft: 100 }}>{this.renderHangGhe()}</div>
              </div>
              <div className="col-4 text-center">
                <div style={{ fontSize: 35 }} className="mt-2 text-warning">
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>

                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
