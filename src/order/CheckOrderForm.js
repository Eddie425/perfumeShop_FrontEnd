import React from "react";
import Typography from "@material-ui/core/Typography";
import ProductOrderDetails from "./ProductOrderDetails";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        確認訂單內容
      </Typography>
      <ProductOrderDetails />
    </React.Fragment>
  );
}
