import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import React from "react";

function Register() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="authentication">
      <div className="authentication-form card p-4">
        <h1 className="card-title">SLS Bookings Portal</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name">
            <Input placeholder="Enter Username" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="Enter Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="type your password" type="password" />
          </Form.Item>
          <Button className="primary-button my-2" htmlType="submit">
            Register
          </Button>
          <Link to="/login" className="anchor">
            Already Registered? Click here to Login
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
