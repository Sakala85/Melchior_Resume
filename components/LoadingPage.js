import { useState } from "react";
import {
  Box,
  Grid,
  Link,
  Typography,
  ButtonBase,
  LinearProgress,
} from "@material-ui/core";

import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import { Element } from "react-scroll";

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
  text-align: center;
  margin-top: 40vh;
`;
const LoadingPage = () => {
  return (
    <Bounce>
      <h1>Melchior Bengtsson</h1>
    </Bounce>
  );
};

export default LoadingPage;
