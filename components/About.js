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

const StyledContainer = styled(Element)`
  height: 100%;
  background: #666666;
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
  border: 1px solid #ffcc00;
  border-radius: 50%;
  width: 80px;
  transition: transform ${transition}, top ${transition};

  &:hover {
    cursor: pointer;
    transform: scale(1.25) rotate(3deg);
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
        <Grid item md={4} sm={4} xs={12} style={{ display: "flex" }}>
          <Box>
            <StyledBox>
              <img src="static/profile.jpg" overflow="hidden" height="100%" />
            </StyledBox>
          </Box>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Countdown
            date={Date.UTC("2021", "04", "30", "00", "00", "00")}
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
                  color: "#ffcc00",
                  float: "right",
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" style={{ color: "#ffcc00" }}>
                Paris, France
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row">
            <Grid item xs={4}>
              <Mail
                style={{
                  fontSize: 30,
                  color: "#ffcc00",
                  float: "right",
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <Link
                to="mailto:melchiorbengtsson@gmail.com"
                style={{ color: "#ffcc00" }}
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
                  color: "#ffcc00",
                  float: "right",
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <Link href="tel:+33662014864" style={{ color: "#ffcc00" }}>
                +33 6 62 01 48 64
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Grid container spacing={3} direction="column">
            <Grid
              item
              md={12}
              xs={12}
              style={{ margin: "8vh auto", display: "block", width: "80px" }}
            >
              <StyledLinkBox>
                <Link onClick={handleOpen}>
                  <Visibility style={{ fontSize: 40, color: "#ffcc00" }} />
                </Link>
              </StyledLinkBox>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              style={{ margin: "3vh auto", display: "block", width: "80px" }}
            >
              <StyledLinkBox>
                <Link
                  target="_blank"
                  href="https://github.com/Sakala85/Melchior_Resume/raw/master/public/files/Melchior's%20Resume.pdf"
                >
                  <GetApp style={{ fontSize: 40, color: "#ffcc00" }} />
                </Link>
              </StyledLinkBox>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <StyledModalBox style={{ width: "500px", margin: "0 auto" }}>
          <img src="static/melchior-resume.png" />
        </StyledModalBox>
      </Modal>
    </StyledContainer>
  );
};

export default About;
