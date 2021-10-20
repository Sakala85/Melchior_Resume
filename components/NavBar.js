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
import { School, Info, Work, Home, Favorite } from "@material-ui/icons";

const transition = "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";

const StyledContainer = styled(Container)`
  position: fixed;
  right: 0;
  width: 50px;
  z-index: 1;
  height: 30px;
  margin-bottom: 0vh;
  text-align: center;
  color: #ffcc00;
`;

const StyledLinkBox = styled(Box).attrs({
  component: ButtonBase,
})`
  transition: transform ${transition}, top ${transition};

  &:hover {
    cursor: pointer;
    transform: scale(1.25) rotate(1deg);
  }
`;

const NavBar = ({ page }) => {
  return (
    <StyledContainer>
      <Grid container>
        <Grid item xs={12}>
          <StyledLinkBox>
            <ScrollLink to="home" spy={true} smooth={true} duration={500}>
              <Home
                style={{
                  fontSize: 30,
                  color: "#ffcc00",
                  float: "right",
                }}
              />
            </ScrollLink>
          </StyledLinkBox>
        </Grid>
        <Grid item xs={12}>
          <StyledLinkBox>
            <ScrollLink to="about" spy={true} smooth={true} duration={500}>
              <Info
                style={{
                  fontSize: 30,
                  color: "#ffcc00",
                  float: "right",
                }}
              />
            </ScrollLink>
          </StyledLinkBox>
        </Grid>
        <Grid item xs={12}>
          <StyledLinkBox>
            <ScrollLink
              to="experiences"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Work
                style={{
                  fontSize: 30,
                  color: "#ffcc00",
                  float: "right",
                }}
              />
            </ScrollLink>
          </StyledLinkBox>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default NavBar;
