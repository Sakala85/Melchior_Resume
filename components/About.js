import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Container,
  Dialog,
  Grid,
  Link,
  Typography,
  ButtonBase,
  Modal,
  Chip,
  Slide,
} from "@material-ui/core";
import styled from "styled-components";
import { Element } from "react-scroll";
import {
  Visibility,
  GetApp,
  LocationOn,
  Mail,
  Phone,
} from "@material-ui/icons";
import Countdown from "react-countdown";
import StyledCountdown from "components/StyledCountdown";

const transition = "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SKILLS = [
  "Project management",
  "Team management",
  "Design",
  "UI/UX",
  "Node.js",
  "React",
  "Flutter",
  "Dart",
  "next",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "Excel",
  "PowerPoint",
  "iMovie",
  "gitHub",
  "SQL",
  "MongoDB",
  "C",
  "HTML",
  "CSS",
  "PHP",
  "React Natif",
  "Netlify",
  "AWS",
];

const StyledContainer = styled(Element)`
  height: 100%;
  background: #333333;
  h1 {
    color: #ecb7bf;
    font-weight: 70;
    font-size: 20px;
    text-align: center;
  }
`;

const StyledModalBox = styled(Box)`
  width: 500px;
  margin: 0 auto;
  img {
    width: 500px;
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    width: 300px;
    img {
      margin: 0 auto;
      width: 300px;
    }
  }
`;

const StyledLinkBox = styled(Box).attrs({
  component: ButtonBase,
})`
  border: 1px solid #ecb7bf;
  border-radius: 50%;
  width: 80px;
  transition: transform ${transition}, top ${transition};

  &:hover {
    cursor: pointer;
    transform: scale(1.25) rotate(1deg);
  }
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

const About = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledContainer name="about" className="element">
      <Grid container spacing={1}>
        <Grid item md={3} sm={4} xs={7} style={{ display: "flex" }}>
          <Box>
            <StyledBox>
              <img src="static/profile.jpg" overflow="hidden" />
            </StyledBox>
          </Box>
        </Grid>
        <Grid item md={2} sm={8} xs={5}>
          <h1>Melchior's Resume</h1>
          <Grid container spacing={2} direction="column">
            <Grid
              item
              md={12}
              xs={12}
              style={{ margin: "4vh auto", display: "block", width: "80px" }}
            >
              <Link onClick={handleOpen}>
                <StyledLinkBox>
                  <Visibility style={{ fontSize: 40, color: "#ecb7bf" }} />
                </StyledLinkBox>
              </Link>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              style={{ margin: "1vh auto", display: "block", width: "80px" }}
            >
              <Link
                target="_blank"
                href="https://github.com/Sakala85/Melchior_Resume/raw/master/public/files/Melchior's%20Resume.pdf"
              >
                <StyledLinkBox>
                  <GetApp style={{ fontSize: 40, color: "#ecb7bf" }} />
                </StyledLinkBox>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12} style={{ marginBottom: "2vh" }}>
          <Countdown
            date={Date.UTC("2021", "12", "30", "00", "00", "00")}
            renderer={StyledCountdown}
            daysInHours={false}
          />
          <Grid
            container
            spacing={2}
            direction="row"
            style={{ marginTop: "3vh" }}
          >
            <Grid item xs={4} alignContent="center">
              <LocationOn
                style={{
                  fontSize: 30,
                  color: "#ecb7bf",
                  float: "right",
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" style={{ color: "#ecb7bf" }}>
                Paris, France
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row">
            <Grid item xs={4}>
              <Mail
                style={{
                  fontSize: 30,
                  color: "#ecb7bf",
                  float: "right",
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <Link
                to="mailto:melchiorbengtsson@gmail.com"
                style={{ color: "#ecb7bf" }}
              >
                melchiorbengtsson@gmail.com
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row">
            <Grid item xs={4} alignContent="center">
              <Phone
                style={{
                  fontSize: 30,
                  color: "#ecb7bf",
                  float: "right",
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <Link href="tel:+33662014864" style={{ color: "#ecb7bf" }}>
                +33 6 62 01 48 64
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} sm={12} xs={12} style={{}}>
          <h1>Skills</h1>
          <Box style={{ width: "100%" }}>
            {SKILLS.map((skill) => {
              return (
                <Chip
                  label={skill}
                  style={{
                    margin: "0 3px",
                    backgroundColor: "#ecb7bf",
                  }}
                />
              );
            })}
          </Box>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <StyledModalBox style={{ width: "500px", margin: "0 auto" }}>
          <img src="static/melchior-resume.png" />
        </StyledModalBox>
      </Dialog>
    </StyledContainer>
  );
};

export default About;
