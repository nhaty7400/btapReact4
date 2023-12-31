import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheCreator } from "../../redux/bookingTicket/bookingTicket.action";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat='gheDangChon'
      }
      
      return (
        <button
        onClick={()=>{
          this.props.dispatch(datGheCreator(ghe))
        }}
          disabled={disabled}
          className={`${cssGheDaDat} ${cssGheDangDat} ghe`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <span style={{ display: "inline-block" }} className=" rowNumber">
          {hang.soGhe}
        </span>
      );
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-5">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div
        className=" text-left ml-5 mt-3"
        style={{ fontSize: 30, color: "yellow" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.bookingTicketReducer.danhSachGheDangDat,
  };
};



export default connect(mapStateToProps)(HangGhe);
