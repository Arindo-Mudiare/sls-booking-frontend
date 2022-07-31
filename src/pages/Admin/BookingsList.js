import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/alertsSlice";
import { Table } from "antd";
import moment from "moment";
import * as dayjs from "dayjs";

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
      filters: [
        {
          text: "Bus",
          value: "busBooking",
        },
        {
          text: "Bike",
          value: "BikeBooking",
        },
        {
          text: "Truck",
          value: "truckBooking",
        },
        {
          text: "Interstate",
          value: "interstateDispatch",
        },
      ],
      onFilter: (value, record) => record.bookingType.indexOf(value) === 0,
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
      sorter: (a, b) => a.inputOffer - b.inputOffer,
    },
    {
      title: "Date of Booking",
      dataIndex: "bookingDate",
      sorter: (a, b) => a.bookingDate - b.bookingDate,
      // render: (record, dataIndex) =>
      //   dayjs(record.dataIndex).format("DD-MMMM-YYYY"),
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
      {bookings.map((booking) =>
        console.log(dayjs(booking.bookingDate).format("DD-MMMM-YYYY"))
      )}

      <h1 className="page-header">Bookings List</h1>
      <hr />
      <Table columns={columns} dataSource={bookings} size="small" />
    </Layout>
  );
}

export default BookingsList;
