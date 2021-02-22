import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  Box,
  ButtonBase,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { Element, animateScroll as scroll } from "react-scroll";

const StyledBox = styled(Container)`
  text-align: center;
  h1 {
    color: #ffcc00;
    font-weight: 70;
    font-size: 20px;
    margin: 10px 0px 10px;
  }

  #clockdiv {
    font-family: sans-serif;
    color: #666666;
    display: inline-block;
    font-weight: 80;
    text-align: center;
    font-size: 17px;
  }

  #clockdiv > div {
    padding: 10px;
    border-radius: 3px;
    margin: 1px;
    background: #ffcc00;
    display: inline-block;
  }

  #clockdiv div > span {
    padding: 10px;
    background: #fad647;
    display: inline-block;
  }

  .smalltext {
    padding-top: 5px;
    font-size: 16px;
  }
`;

const StyledCountdown = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <StyledBox spacing={3}>
      <h1>Available in</h1>
      <div id="clockdiv">
        <div>
          <span class="days">{days}</span>
          <div class="smalltext">Days</div>
        </div>
        <div>
          <span class="hours">{hours}</span>
          <div class="smalltext">Hours</div>
        </div>
        <div>
          <span class="minutes">{minutes}</span>
          <div class="smalltext">Minutes</div>
        </div>
        <div>
          <span class="seconds">{seconds}</span>
          <div class="smalltext">Seconds</div>
        </div>
      </div>
    </StyledBox>
  );
};

export default StyledCountdown;
