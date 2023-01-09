import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { BillingAddress, CartItem } from "../../../../@types/product";

interface Props {
  billing: BillingAddress | null;
}

const CheckoutClientSummary = ({ billing }: Props) => {
  console.log({ billing });

  const { receiver, addressType, fullAddress, phone } = billing!;
  return (
    <Box
      gap={1}
      display="flex"
      flexDirection={"column"}
      my={3}
      sx={{ border: "2px solid black", padding: 2, borderRadius: 1 }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography variant="h6" textAlign={"start"}>
          Receiver:
        </Typography>
        <Typography variant="h6">{receiver}</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography variant="h6" textAlign={"start"}>
          Address:
        </Typography>
        <Typography variant="subtitle1" ml={2} alignSelf={"end"}>
          {fullAddress}
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography variant="h6">Phone:</Typography>
        <Typography variant="subtitle1"> {phone}</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography variant="h6" textAlign={"start"}>
          Address Type:
        </Typography>
        <Typography variant="subtitle1">{addressType}</Typography>
      </Box>
    </Box>
  );
};

export default CheckoutClientSummary;
