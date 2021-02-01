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
import contentSizeQuery from "helpers/contentSizeQuery";
import {
  Instagram,
  GitHub,
  LinkedIn,
  Twitter,
  ArrowDropDown,
} from "@material-ui/icons";
const ParticlesSection = dynamic(() => import("components/ParticlesSection"), {
  ssr: false,
});

const transition = "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";

const StyledContainer = styled(Box)`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(static/header-background.jpg) center center no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Hero = styled(Box)`
  padding-top: 80px;
  text-align: center;
  ${contentSizeQuery("small-only")`
    {
      padding-top: 16px;
    }`}
`;

const Title = styled(Typography).attrs({
  variant: "h1",
})`
  && {
    font-weight: 700;
    color: #ffffff;
  }
`;

const StyledLinkBox = styled(Box).attrs({
  component: ButtonBase,
})`
  align-self: center;
  justify-self: center;
  transition: transform ${transition}, top ${transition};

  &:hover {
    cursor: pointer;
    transform: scale(1.25) rotate(3deg);
  }
`;

const Subtitle = styled(Typography).attrs({
  variant: "h3",
  component: "h4",
})`
  && {
    color: #ffffff;
    span {
      font-size: 0.8em;
    }
  }
`;

const Header = () => (
  <StyledContainer>
    <ParticlesSection />
    <Container style={{ position: "relative" }}>
      <Hero display="flex" flexDirection="column" textAlign="center">
        <Box marginBottom={2}>
          <Title>Melchior Bengtsson</Title>
          <Subtitle>
            <span>Developer Fuul Stack</span>
          </Subtitle>
        </Box>
        <Box marginY={6} style={{ marginTop: "3vh" }}>
          <Typography variant="body1" gutterBottom style={{ color: "#ffffff" }}>
            (Node.js, React, next, React Natif)
          </Typography>
          <Typography variant="body1" gutterBottom style={{ color: "#ffffff" }}>
            I love working to serve an objective who make sense to me, bring my
            opinion on the project and bring my own point of view.
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
          style={{ width: "60%", margin: "0 auto", height: "100%" }}
        >
          <Grid item md={3} xs={6}>
            <StyledLinkBox>
              <Link target="_blank" href="https://github.com/Sakala85">
                <GitHub style={{ fontSize: 40, color: "white" }} />
              </Link>
            </StyledLinkBox>
          </Grid>
          <Grid item md={3} xs={6}>
            <StyledLinkBox>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/melchior-bengtsson-961349162/"
              >
                <LinkedIn style={{ fontSize: 40, color: "white" }} />
              </Link>
            </StyledLinkBox>
          </Grid>
          <Grid item md={3} xs={6}>
            <StyledLinkBox>
              <Link target="_blank" href="https://twitter.com/melchiobengts">
                <Twitter style={{ fontSize: 40, color: "white" }} />
              </Link>
            </StyledLinkBox>
          </Grid>
          <Grid item md={3} xs={6}>
            <StyledLinkBox>
              <Link
                target="_blank"
                href="https://www.instagram.com/melchiorbengtsson"
              >
                <Instagram style={{ fontSize: 40, color: "white" }} />
              </Link>
            </StyledLinkBox>
          </Grid>
          <Grid item md={12} style={{ bottom: 0 }}>
            <StyledLinkBox style={{ bottom: 0 }}>
              <Link
                target="_blank"
                href="https://www.instagram.com/melchiorbengtsson"
              >
                <ArrowDropDown
                  style={{ fontSize: 70, color: "white", marginTop: "15vh" }}
                />
              </Link>
            </StyledLinkBox>
          </Grid>
        </Grid>
      </Hero>
    </Container>
  </StyledContainer>
);

export default Header;
