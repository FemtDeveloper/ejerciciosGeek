import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { BillingAddress, CartItem } from "../../../../@types/product";
import { Document, Text, View, Page } from "@react-pdf/renderer";

interface Props {
  billing: BillingAddress | null;
}

const CheckoutClientSummaryPdf = ({ billing }: Props) => {
  console.log({ billing });

  const { receiver, addressType, fullAddress, phone } = billing!;
  return (
    <View
      style={{
        border: "2px solid black",
        padding: 10,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#404040", fontSize: "14px" }}>Receiver:</Text>
        <Text
          style={{
            color: "#101010",
            fontSize: "16px",
            fontWeight: "extrabold",
          }}
        >
          {receiver}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#404040", fontSize: "14px" }}>Address:</Text>
        <Text
          style={{
            color: "#101010",
            fontSize: "16px",
            fontWeight: "extrabold",
          }}
        >
          {fullAddress}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "#404040", fontSize: "14px" }}>Phone:</Text>
        <Text
          style={{
            color: "#101010",
            fontSize: "16px",
            fontWeight: "extrabold",
          }}
        >
          {" "}
          {phone}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "#404040", fontSize: "14px" }}>
          Address Type:
        </Text>
        <Text
          style={{
            color: "#101010",
            fontSize: "16px",
            fontWeight: "extrabold",
          }}
        >
          {addressType}
        </Text>
      </View>
    </View>
  );
};

export default CheckoutClientSummaryPdf;
