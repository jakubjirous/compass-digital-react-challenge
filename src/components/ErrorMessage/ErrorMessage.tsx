import { Alert, AlertTitle, Button } from "@mui/material";
import React from "react";

interface Props {
  message: string;
  onRetry: () => void;
}

export default function ErrorMessage({ message, onRetry }: Props) {
  return (
    <Alert
      severity="error"
      action={
        <Button color="inherit" onClick={onRetry}>
          Retry
        </Button>
      }
    >
      <AlertTitle>Oops! Something went wrong:</AlertTitle>
      {message}
    </Alert>
  );
}
