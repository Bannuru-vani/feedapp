import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Hero from "./Hero";
function Navbar() {
  return (
    <div>
      <AppBar
        sx={{
          alignItems: "center",
          display: {
            xs: "block",

            sm: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          },
        }}
      >
        <Toolbar>Feed</Toolbar>

        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            width: "400px",
            height: "56px",

            display: { xs: "flex", sm: "block" },
          }}
        />
        <Button style={{ display: "block" }}>
          <AccountCircleIcon style={{ color: "white" }} />
          <br />
          <Typography sx={{ color: "white" }}>Logout</Typography>
        </Button>
      </AppBar>
      <Box sx={{ marginTop: { xs: "200px", sm: "100px" } }}>
        <Hero />
      </Box>
    </div>
  );
}

export default Navbar;
