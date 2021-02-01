import { useEffect } from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import styled from "styled-components";

const transition = "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";

const StyledContainer = styled(Box)`
  height: 40vh;
  background: #666666;
`;

const StyledBox = styled(Box)`
  img {
    max-width: 100%;
    max-height: 40vh;
    float: left;
    border-top-right-radius: 170px 70%;
    border-bottom-right-radius: 0px 50%;
  }
`;

const DownloadButton = styled(Box).attrs({
  component: ButtonBase,
})`
  box-shadow: none;

  flex-grow: 1;
  display: flex;
  img {
    transition: box-shadow ${transition}, transform ${transition},
      top ${transition};
    &:hover {
      transform: scale(1.05) rotate(1deg);
      top: 0px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 11px -5px,
        rgba(0, 0, 0, 0.14) 0px 18px 28px 2px,
        rgba(0, 0, 0, 0.12) 0px 7px 34px 6px;
    }
    margin-top: 5vh;
    max-width: 200px;
    max-height: 30vh;
  }
`;

const About = () => (
  <StyledContainer>
    <Grid container spacing={1}>
      <Grid item md={4} sm={4} xs={6} style={{ display: "flex" }}>
        <Box>
          <StyledBox>
            <img src="static/profile.jpg" overflow="hidden" height="100%" />
          </StyledBox>
        </Box>
      </Grid>
      <Grid item md={4} sm={4} xs={6}>
        TextProfile
      </Grid>
      <Grid item md={4} sm={4} xs={12}>
        <DownloadButton
          href="https://github.com/Sakala85/Melchior_Resume/raw/master/public/files/Melchior's%20Resume.pdf"
          target="_blank"
          boxShadow={14}
        >
          <img
            src="static/melchior-resume.png"
            alt="Download Melchior Bengtsson's Resume"
          />
        </DownloadButton>
      </Grid>
    </Grid>
  </StyledContainer>
);

export default About;
