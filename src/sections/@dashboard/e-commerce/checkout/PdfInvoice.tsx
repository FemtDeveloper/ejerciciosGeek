import React from "react";
import { Document, Text, View, Page } from "@react-pdf/renderer";
import { CartItem, BillingAddress } from "../../../../@types/product";
import CheckoutClientSummaryPdf from "./CheckoutClientSummaryPdf";
import CheckoutResumePdf from "./CheckoutResumePdf";
import ProductsHeader from "./ProductsHeader";

interface Props {
  invoiceId?: string;
  invoiceDate?: number;
  cart?: CartItem[];
  billing?: BillingAddress;
  total: number;
}

const PdfInvoice = ({
  invoiceDate,
  invoiceId,
  billing,
  cart,
  total,
}: Props) => {
  let totalItems = 0;
  cart!.map((el) => {
    totalItems = totalItems + el.quantity;
  });
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
    <Document>
      <Page size={"A4"} style={{ padding: "50px 30px" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              color: "#101010",
              fontSize: "16px",
              fontWeight: "extrabold",
              textAlign: "right",
            }}
          >
            Invoice ID: &nbsp;
            {invoiceId}
          </Text>
          <Text
            style={{
              textAlign: "right",
              marginBottom: "30px",
              color: "#404040",
              fontSize: "14px",
            }}
          >
            Date: &nbsp; {date}
          </Text>
          <CheckoutClientSummaryPdf billing={billing!} />
          <CheckoutResumePdf cart={cart!} />
        </View>
        <View
          style={{
            border: "1px solid grey",
            padding: 10,
            borderRadius: 5,
            marginTop: 60,
          }}
        >
          <Text
            style={{
              color: "#101010",
              fontSize: "16px",
              fontWeight: "extrabold",
              textAlign: "right",
            }}
          >
            Total items: {totalItems}
          </Text>
          <Text
            style={{
              color: "#101010",
              fontSize: "16px",
              fontWeight: "extrabold",
              textAlign: "right",
            }}
          >
            Total value: ${total.toFixed(2)}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfInvoice;
