import React from "react";
import { Button, Col, Form, Input, Row } from "antd";

function FormTemplate(isTruck) {
  const onFinish = (values) => {
    console.log("Success: ", values);
  };
  return (
    <div className="form-container">
      <Form layout="vertical" className="form-effizi" onFinish={onFinish}>
        <h1 className="card-title card-mgy">Kindly Provide Details Below...</h1>
        <Row gutter={20}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Name"
              name="Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Name" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Pick up Address(From)"
              name="pickUpFrom"
              rules={[{ required: true }]}
            >
              <Input placeholder="Pick up Address(From)" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Delivery Address(To)"
              name="deliverTo"
              rules={[{ required: true }]}
            >
              <Input placeholder="Delivery Address(To)" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Sender's Phone number(s)"
              name="sphoneNumber"
              rules={[{ required: true }]}
            >
              <Input placeholder="Sender's Phone number(s)" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Receiver's Phone number(s)"
              name="rphoneNumber"
              rules={[{ required: true }]}
            >
              <Input placeholder="Reciver's Phone number(s)" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Decription of item(s)"
              name="description"
              rules={[{ required: true }]}
            >
              <Input placeholder="Decription of item(s)" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Quantity"
              name="quantity"
              rules={[{ required: true }]}
            >
              <Input placeholder="Quantity" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Additional information"
              name="additionalInfo"
              rules={[{ required: true }]}
            >
              <Input placeholder="Additional information" />
            </Form.Item>
          </Col>
          {isTruck && (
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="Input Offer"
                name="inputOffer"
                rules={[{ required: true }]}
              >
                <Input disabled={true} placeholder="Please Input your Offer" />
              </Form.Item>
            </Col>
          )}
        </Row>

        <div className="d-flex justify-content-end bt-submit">
          <Button className="primary-button" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormTemplate;
