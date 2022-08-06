import React from "react";
import { FormTemplate, LayoutStrip } from "../components";

function BookBikes() {
  return (
    <LayoutStrip>
      <h1 className="card-title fade-title">Book Bike Service</h1>
      <hr />
      <FormTemplate isTruck={false} />
    </LayoutStrip>
  );
}

export default BookBikes;
