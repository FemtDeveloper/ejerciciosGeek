import React from "react";

import CheckoutClientSummary from "./CheckoutClientSummary";
import CheckoutResume from "./CheckoutResume";
import { CartItem, BillingAddress } from "../../../../@types/product";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import ProductsHeader from "./ProductsHeader";

interface Props {
  invoiceId?: string;
  invoiceDate?: number;
  cart?: CartItem[];
  billing?: BillingAddress;
}

const ProductInvoice = ({ invoiceDate, invoiceId, billing, cart }: Props) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const date = new Date(invoiceDate!).toLocaleString("en-US", options);
  return (
    <Box>
      <Box flexDirection={"column"} display="flex" justifyContent={"end"}>
        <Typography textAlign={"end"} variant="h6">
          Invoice ID: &nbsp;
          {invoiceId}
        </Typography>
      </Box>
      <Typography textAlign={"end"} mb={5}>
        Date: &nbsp; {date}
      </Typography>
      <CheckoutClientSummary billing={billing!} />
      <ProductsHeader />
      <CheckoutResume cart={cart!} />
    </Box>
  );
};

export default ProductInvoice;
