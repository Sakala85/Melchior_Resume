import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  ButtonBase,
  Modal,
} from "@material-ui/core";
import styled from "styled-components";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {
  Visibility,
  GetApp,
  LocationOn,
  Mail,
  Phone,
} from "@material-ui/icons";

const transition = "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";

const StyledContainer = styled(Container)`
  position: fixed;
  right: 0;
  width: 140px;
  z-index: 1;
  margin-top: auto;
  height: 30px;
  margin-top: 30vh;
  text-align: center;
  color: #ffcc00;
`;

const StyledLinkBox = styled(Box).attrs({
  component: ButtonBase,
})`
  transition: transform ${transition}, top ${transition};

  &:hover {
    cursor: pointer;
    transform: scale(1.25) rotate(3deg);
  }
`;

const NavBar = ({ page }) => {
  return (
    <StyledContainer>
      <Grid container>
        <Grid xs={12}>
          <StyledLinkBox>
            <ScrollLink to="home" spy={true} smooth={true} duration={500}>
              <Typography variant={page === "home" ? "h5" : "body1"}>
                Home
              </Typography>
            </ScrollLink>
          </StyledLinkBox>
        </Grid>
        <Grid xs={12}>
          <StyledLinkBox>
            <ScrollLink to="about" spy={true} smooth={true} duration={500}>
              <Typography variant="body1">About</Typography>
            </ScrollLink>
          </StyledLinkBox>
        </Grid>
        <Grid xs={12}>
          <StyledLinkBox>
            <ScrollLink
              to="experiences"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Typography variant="body1">Experiences</Typography>
            </ScrollLink>
          </StyledLinkBox>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default NavBar;
