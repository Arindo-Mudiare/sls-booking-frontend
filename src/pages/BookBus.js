import React from "react";
import Layout from "../components/Layout";
import FormTemplate from "../components/FormTemplate";

function BookBus() {
  return (
    <Layout>
      <h1 className="card-title fade-title">Book Bus Service</h1>
      <hr />
      <FormTemplate isTruck={false} />
    </Layout>
  );
}

export default BookBus;
