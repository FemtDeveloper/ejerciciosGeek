// next
import { useRouter } from "next/router";
// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Button,
  Divider,
  Typography,
  Stack,
  DialogProps,
} from "@mui/material";
// redux
import { useDispatch, useSelector } from "../../../../redux/store";
import { resetCart } from "../../../../redux/slices/product";
// routes
import { PATH_DASHBOARD } from "../../../../routes/paths";
// components
import Iconify from "../../../../components/Iconify";
import { DialogAnimate } from "../../../../components/animate";
// assets
import { OrderCompleteIllustration } from "../../../../assets";
import { Grid } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import style from "../../../overview/extra/map/zoom-to-bounds/map-style";
import CheckoutResume from "./CheckoutResume";
import CheckoutClientSummary from "./CheckoutClientSummary";

// ----------------------------------------------------------------------

const DialogStyle = styled(DialogAnimate)(({ theme }) => ({
  "& .MuiDialog-paper": {
    margin: 0,
    [theme.breakpoints.up("md")]: {
      maxWidth: "calc(100% - 48px)",
      maxHeight: "calc(100% - 48px)",
    },
  },
}));

// ----------------------------------------------------------------------

export default function CheckoutOrderComplete({ open }: DialogProps) {
  const { push } = useRouter();
  const { checkout } = useSelector((state) => state.product);
  const { cart, total, billing, invoiceDate, invoiceId } = checkout;

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

  console.log({ date });

  let totalItems = 0;
  cart.map((el) => {
    totalItems = totalItems + el.quantity;
  });

  const dispatch = useDispatch();

  console.log({ cart });

  const handleResetStep = () => {
    dispatch(resetCart());
    push(PATH_DASHBOARD.eCommerce.shop);
  };

  return (
    <DialogStyle fullScreen open={open}>
      <Box sx={{ p: 4, maxWidth: { xs: 480, sm: 660 }, margin: "auto" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" paragraph>
            Thank you for your purchase!
          </Typography>

          <OrderCompleteIllustration sx={{ height: 260, my: 10 }} />

          <Typography align="left" paragraph>
            Invoice ID: &nbsp;
            <Link href="#">{invoiceId}</Link>
          </Typography>
          <Typography variant="subtitle2" mb={4} textAlign="end">
            Invoice Date: &nbsp; {date}
          </Typography>

          <CheckoutClientSummary billing={billing} />
          {/* <Typography align="left" paragraph>
            Thanks for placing order &nbsp;
            <Link href="#">{invoiceId}</Link>
          </Typography> */}
          <CheckoutResume cart={cart} />
          <Box
            gap={1}
            display="flex"
            flexDirection={"column"}
            my={3}
            sx={{ border: "1px solid grey", padding: 2, borderRadius: 1 }}
          >
            <Typography variant="h6" textAlign={"end"}>
              Total items: {totalItems}
            </Typography>
            <Typography variant="h6" textAlign={"end"}>
              Total value: ${total.toFixed(2)}
            </Typography>
          </Box>

          <Typography align="left" sx={{ color: "text.secondary" }}>
            We will send you a notification within 5 days when it ships.
            <br /> <br /> If you have any question or queries then fell to get
            in contact us. <br /> <br /> All the best,
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          justifyContent="space-between"
          spacing={2}
        >
          <Button
            color="inherit"
            onClick={handleResetStep}
            startIcon={<Iconify icon={"eva:arrow-ios-back-fill"} />}
          >
            Continue Shopping
          </Button>
          <Button
            variant="contained"
            startIcon={<Iconify icon={"ant-design:file-pdf-filled"} />}
            onClick={handleResetStep}
          >
            Download as PDF
          </Button>
        </Stack>
      </Box>
    </DialogStyle>
  );
}
