import { useState } from "react";
import {
  Box,
  Grid,
  Link,
  Typography,
  ButtonBase,
  LinearProgress,
} from "@material-ui/core";
import styled from "styled-components";
import { Element } from "react-scroll";
import Timeline from "components/Timeline";

const transition = "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";

const StyledContainer = styled(Element)`
  height: 100%;
  background: #222;
  text-align: center;
`;

const Experiences = () => {
  return (
    <StyledContainer name="experiences" className="element">
      <Typography variant="h3" style={{ marginTop: "1vh", color: "#fff" }}>
        Experiences
      </Typography>
      <Grid container>
        <Grid item xs={3}>
          <img src="illustrations/ezgif.com-gif-maker (2).gif" style={{}} />
        </Grid>
        <Grid item xs={9}>
          <Timeline />
        </Grid>
      </Grid>
      Under construction... <LinearProgress />
    </StyledContainer>
  );
};

export default Experiences;
