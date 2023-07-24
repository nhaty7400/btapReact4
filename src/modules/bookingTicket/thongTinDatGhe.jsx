import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheCreator } from "../../redux/bookingTicket/bookingTicket.action";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5 d-flex flex-column">
          <div className="text-left">
            <button className="gheDuocChon"></button>
            <span className="text-light" style={{ fontSize: 30 }}>
              Ghế đã đặt
            </span>
          </div>
          <div className="text-left">
            <button className="gheDangChon"></button>
            <span className="text-light" style={{ fontSize: 30 }}>
              Ghế đang chọn
            </span>
          </div>
          <div className="text-left">
            <button style={{ marginLeft: 0 }} className="ghe"></button>
            <span className="text-light" style={{ fontSize: 30 }}>
              Ghế chưa đặt
            </span>
          </div>
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: 25 }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr
                    className="text-warning"
                    style={{ fontSize: 25 }}
                    key={index}
                  >
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => {
                        this.props.dispatch(huyGheCreator(gheDangDat.soGhe));
                      }}
                    >
                      Hủy
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr  style={{fontSize:25}}>
                <td className="text-light">Tổng tiền</td>
                <td className="text-warning">
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.bookingTicketReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
