import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { CartItem } from "../../../../@types/product";

interface Props {
  cart: CartItem[];
}

const CheckoutResume = ({ cart }: Props) => {
  return (
    <Box gap={2} display="flex" flexDirection={"column"}>
      {cart.map((item) => (
        <Grid
          justifyContent={"space-between"}
          alignItems="center"
          display={"flex"}
          width="100%"
          key={item.id}
        >
          <img
            src={item.cover}
            alt={item.name}
            style={{ width: "60px", height: "60px", borderRadius: "5px" }}
          />
          <Box justifyContent={"start"} width="100%" paddingX={2}>
            <Typography variant="subtitle2" textAlign={"start"}>
              {item.name}
            </Typography>
            <Box display={"flex"} flexDirection="row" alignItems={"center"}>
              <p> Color: </p>
              <p
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: `${item.color}`,
                  border: "2px solid #e1e1e1",
                  borderRadius: "5px",
                  marginLeft: 10,
                }}
              />
            </Box>
            <Typography variant="subtitle2" textAlign={"start"}>
              Cantidad: {item.quantity}
            </Typography>
          </Box>
          <Typography variant="subtitle2">
            ${item.subtotal.toFixed(2)}
          </Typography>
        </Grid>
      ))}
    </Box>
  );
};

export default CheckoutResume;
