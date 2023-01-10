import React from "react";
import { View, Text } from "@react-pdf/renderer";

const ProductsHeader = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "10px",
      }}
    >
      <Text
        style={{
          flex: 1,
          color: "#101010",
          fontSize: "16px",
          fontWeight: "extrabold",
          textAlign: "left",
        }}
      >
        Photo
      </Text>

      <Text
        style={{
          color: "#101010",
          fontSize: "16px",
          fontWeight: "extrabold",
          flex: 3,
          textAlign: "center",
        }}
      >
        Description
      </Text>
      <Text
        style={{
          flex: 1,
          color: "#101010",
          fontSize: "16px",
          fontWeight: "extrabold",
          textAlign: "right",
        }}
      >
        Subtotal
      </Text>
    </View>
  );
};

export default ProductsHeader;
