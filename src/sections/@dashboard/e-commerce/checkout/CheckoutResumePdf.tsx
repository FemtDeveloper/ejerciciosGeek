import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { CartItem } from "../../../../@types/product";
import { Image, View, Text, Image as PdfImage } from "@react-pdf/renderer";
import InvoiceHeader from "./InvoiceHeader";
import ProductsHeader from "./ProductsHeader";

interface Props {
  cart: CartItem[];
}

const CheckoutResumePdf = ({ cart }: Props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 100,
        marginBottom: 60,
      }}
    >
      <ProductsHeader />
      {cart.map((item) => (
        <View
          key={item.id}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100px",
            padding: "5px",
          }}
        >
          <PdfImage
            src={item.cover}
            style={{
              width: "30px",
              height: "50px",
              borderRadius: 20,
              flex: 1,
              paddingHorizontal: 5,
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flex: 3,
            }}
          >
            <Text
              style={{
                color: "#101010",
                fontSize: "16px",
                fontWeight: "extrabold",
              }}
            >
              {item.name}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#101010",
                  fontSize: "14px",
                  fontWeight: "extrabold",
                }}
              >
                Color:{" "}
              </Text>
              <View
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: `${item.color}`,
                  border: "2px solid #e1e1e1",
                  borderRadius: "5px",
                  marginLeft: 10,
                }}
              />
            </View>
            <Text
              style={{
                color: "#101010",
                fontSize: "14px",
                fontWeight: "extrabold",
              }}
            >
              Cantidad: {item.quantity}
            </Text>
          </View>
          <Text
            style={{
              flex: 1,
              color: "#101010",
              fontSize: "16px",
              fontWeight: "extrabold",
              textAlign: "right",
            }}
          >
            ${item.subtotal.toFixed(2)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default CheckoutResumePdf;
