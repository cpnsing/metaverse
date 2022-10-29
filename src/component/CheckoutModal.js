import {
  Box,
  Button,
  Dialog,
  DialogContent,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({}));

export default function CheckoutModal({ open, setOpen }) {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
      <DialogContent>
        <Box>
          <Typography>Checkout</Typography>
          <Typography>
            You are about to purchase New Land @ from0x2514..251
          </Typography>
          <TextField placeholder="0.006" fullWidth />
          <label>Price</label>
        </Box>
        <Button variant="contained" color="primary">
          Proceed to payment
        </Button>
        <Button variant="contained" color="primary">
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
}
