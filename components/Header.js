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
import {
  Link as ScrollLink,
  animateScroll as scroll,
  Element,
} from "react-scroll";

const ParticlesSection = dynamic(() => import("components/ParticlesSection"), {
  ssr: false,
});

const transition = "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";

const StyledContainer = styled(Element)`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
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
  gutterBottom: true,
})`
  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 3rem !important;
  }
  && {
    font-weight: 700;
    color: #ffffff;
  }
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

const Subtitle = styled(Typography).attrs({
  variant: "h3",
  component: "h4",
})`
  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 2.3rem !important;
  }
  && {
    color: #ffffff;
    span {
      font-size: 0.8em;
    }
  }
`;

const Header = () => {
  return (
    <StyledContainer name="home" className="element">
      <ParticlesSection />
      <Container style={{ position: "relative", height: "100%" }}>
        <Hero display="flex" flexDirection="column" textAlign="center">
          <Box marginBottom={2}>
            <Title>Melchior Bengtsson</Title>
            <Subtitle>
              <span>Full Stack Developer</span>
            </Subtitle>
          </Box>
          <Box marginY={6} style={{ marginTop: "3vh" }}>
            <Typography
              variant="body1"
              gutterBottom
              style={{ color: "#ffffff" }}
            >
              (Node.js, React, next, React Natif)
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              style={{
                color: "#ffffff",
                marginTop: "5vh",
                fontStyle: "italic",
              }}
            >
              "I love working to serve a purpose that makes sense and where I
              can contribute to the result of the project."
            </Typography>
          </Box>
          <Grid
            container
            spacing={3}
            style={{
              width: "60%",
              margin: "0 auto",
              marginTop: "5vh",
              height: "100%",
            }}
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
            <Grid
              item
              md={12}
              style={{ margin: "0 auto", marginTop: "5vh" }}
              justify="center"
            >
              <StyledLinkBox>
                <ScrollLink to="about" spy={true} smooth={true} duration={500}>
                  <ArrowDropDown style={{ fontSize: 110, color: "white" }} />
                </ScrollLink>
              </StyledLinkBox>
            </Grid>
          </Grid>
        </Hero>
      </Container>
    </StyledContainer>
  );
};

export default Header;
