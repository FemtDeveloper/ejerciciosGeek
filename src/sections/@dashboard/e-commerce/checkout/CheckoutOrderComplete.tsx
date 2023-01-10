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

// pdf
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
// assets
import { OrderCompleteIllustration } from "../../../../assets";

import PdfInvoice from "./PdfInvoice";
import ProductInvoice from "./ProductInvoice";

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
          <ProductInvoice
            cart={cart}
            billing={billing!}
            invoiceDate={invoiceDate!}
            invoiceId={invoiceId!}
          />
          {/* <PdfInvoice
            cart={cart}
            billing={billing!}
            invoiceDate={invoiceDate!}
            invoiceId={invoiceId!}
            total={total}
          /> */}

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
          <PDFDownloadLink
            document={
              <PdfInvoice
                cart={cart}
                billing={billing!}
                invoiceDate={invoiceDate!}
                invoiceId={invoiceId!}
                total={total}
              />
            }
            fileName={`invoice: ${invoiceId}.pdf`}
          >
            <button
              style={{
                backgroundColor: "#00AB55",
                color: "white",
                fontWeight: "bold",
                padding: "8px 10px",
                border: "none",
                borderRadius: 5,
              }}
              onClick={handleResetStep}
            >
              Download as PDF
            </button>
          </PDFDownloadLink>
        </Stack>
      </Box>
    </DialogStyle>
  );
}
