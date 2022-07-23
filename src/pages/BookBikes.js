import React from "react";
import Layout from "../components/Layout";
import FormTemplate from "../components/FormTemplate";

function BookBikes() {
  return (
    <Layout>
      <h1 className="card-title fade-title">Book Bike Service</h1>
      <hr />
      <FormTemplate isTruck={false} />
    </Layout>
  );
}

export default BookBikes;
