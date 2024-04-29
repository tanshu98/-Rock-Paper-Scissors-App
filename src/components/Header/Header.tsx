import React, { useContext, useState } from "react";
import { HeaderStyles } from "./HeaderStyles";
import { Box, Paper, Typography } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { MainContext } from "../../context/context";

function Header() {
  const { mode, setMode } = useContext(MainContext);
  console.log(mode);

  return (
    <Box sx={HeaderStyles.mainContainer}>
      <Box>
        <AutorenewIcon sx={HeaderStyles.icons} />
      </Box>
      <Box sx={HeaderStyles.scoreCardContainer}>
        <Paper sx={HeaderStyles.paperContainer}>
          <Typography sx={HeaderStyles.scoreStatus}>Win</Typography>
          <Typography sx={HeaderStyles.scoreValue}>0</Typography>
        </Paper>
        <Paper sx={HeaderStyles.paperContainer}>
          <Typography sx={HeaderStyles.scoreStatus}>Equal</Typography>
          <Typography sx={HeaderStyles.scoreValue}>0</Typography>
        </Paper>
        <Paper sx={HeaderStyles.paperContainer}>
          <Typography sx={HeaderStyles.scoreStatus}>Win</Typography>
          <Typography sx={HeaderStyles.scoreValue}>0</Typography>
        </Paper>
      </Box>
      <Box>
        {mode === "light" ? (
          <LightModeIcon sx={HeaderStyles.icons} />
        ) : (
          <NightlightIcon sx={HeaderStyles.icons} />
        )}
      </Box>
    </Box>
  );
}

export default Header;
