import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import model from "@mui/material/model";
import RegisterUserForm from "./Register";
import { useEffect, useState } from "react";
import LoginUserForm from "./Login";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Authmodel({ handleClose, open }) {
  const location = useLocation();
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    if (auth.user) handleClose();
  }, [auth.user]);
  return (
    <>
    <model
      open={open}
      onClose={handleClose}
      aria-labelledby="model-model-title"
      aria-describedby="model-model-description"
      size="large"
    >
      <Box className="rounded-md" sx={style}>
        {location.pathname === "/login" ? (
          <LoginUserForm />
        ) : (
          <RegisterUserForm />
        )}
      </Box>
    </model>
    
    </>
    
  );
}
