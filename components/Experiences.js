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

const transition = "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";

const StyledContainer = styled(Element)`
  height: 100%;
  background: #fff;
  text-align: center;
`;

const StyledBox = styled(Box)`
  img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 90%;
    border: 1px solid #ffcc00;
  }
  img:hover {
    border: 5px solid #ffcc00;
  }
`;

const StyledLinkBox = styled(Box).attrs({
  component: ButtonBase,
})`
  transition: transform ${transition}, top ${transition};
  & {
    margin-top: 10px;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.25) rotate(3deg);
  }
`;

const Experiences = () => {
  return (
    <StyledContainer name="experiences" className="element">
      <Typography variant="h3" style={{ marginTop: "1vh" }}>
        Experiences
      </Typography>
      Under construction... <LinearProgress />
    </StyledContainer>
  );
};

export default Experiences;
