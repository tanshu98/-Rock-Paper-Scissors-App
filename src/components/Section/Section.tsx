import React from "react";
import { SectionStyles } from "./SectionStyles";
import { Box, Typography } from "@mui/material";
import paper1 from "../../assets/Images/paper1.jpg";
import paper2 from "../../assets/Images/paper2.jpg";
import rock1 from "../../assets/Images/rock1.jpg";
import rock2 from "../../assets/Images/rock2.jpg";

function Section() {
  return (
    <>
      <Box sx={SectionStyles.mainContainer}>
        <Box>
          <Box>
            <Typography sx={{ fontSize: "1.8rem" }}>Round</Typography>
          </Box>
          <Box>
            <Typography variant="h2">9</Typography>
          </Box>
        </Box>
        <Box
          sx={SectionStyles.handIcons}
        >
          <Box>
            <img src={rock2} width={380} height={180} alt="" />
          </Box>
          <Box>
            <img src={paper1} width={380} height={180} alt="" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Section;
