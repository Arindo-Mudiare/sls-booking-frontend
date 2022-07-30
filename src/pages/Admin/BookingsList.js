import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/alertsSlice";
import { Table } from "antd";
import moment from "moment";

function BookingsList() {
  const [bookings, setBookings] = useState([]);
  const dispatch = useDispatch();

  const getBookingsData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get("/api/admin/get-all-bookings", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(hideLoading());
      if (response.data.success) {
        setBookings(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getBookingsData();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Type of Booking",
      dataIndex: "bookingType",
    },
    {
      title: "Pick up Address",
      dataIndex: "pickUpFrom",
    },
    {
      title: "Delivery Address",
      dataIndex: "deliverTo",
    },
    {
      title: "Sender's Phone no",
      dataIndex: "sphoneNumber",
    },
    {
      title: "Receiver's Phone no",
      dataIndex: "rphoneNumber",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },

    {
      title: "Additional Information",
      dataIndex: "additionalInfo",
    },

    {
      title: "Input Offer",
      dataIndex: "inputOffer",
    },
    {
      title: "Date of Booking",
      dataIndex: "bookingDate",
      render: (record, text) => moment(record.bookingDate).format("DD-MM-YYYY"),
    },
    {
      title: "Status of Booking",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" && <h1 className="anchor">Approve</h1>}
          {record.status === "approved" && <h1 className="anchor">Reject</h1>}
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <h1 className="page-header">Bookings List</h1>
      <hr />
      <Table columns={columns} dataSource={bookings} />
    </Layout>
  );
}

export default BookingsList;
