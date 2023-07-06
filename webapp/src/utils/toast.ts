import { enqueueSnackbar } from "notistack";

export const toast = {
  success: (msg: string) => {
    enqueueSnackbar(msg, { variant: "success" });
  },
  error: (msg: string) => {
    enqueueSnackbar(msg, { variant: "error" });
  }
};
