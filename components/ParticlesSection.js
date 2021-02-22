import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Particles from "react-particles-js";
import styled from "styled-components";

const StyledParticles = styled(Particles)`
  && {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
`;

const ParticlesSection = () => {
  const theme = useTheme();
  // We must pass noSsr: true, otherwise the component performs a double render
  // which messes with styled particles.
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"), { noSsr: true });

  return (
    <StyledParticles
      params={{
        background: {
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
        particles: {
          number: {
            value: 40,
          },
          size: {
            value: 2,
            random: true,
            minimumValue: 1,
          },
          color: {
            value: "#fff",
          },
          opacity: {
            value: 0.5,
            random: {
              enable: true,
              minimumValue: 0,
            },
            animation: {
              enable: false,
            },
          },
          links: {
            enable: true,
            distance: 200,
            color: {
              value: "#ffffff",
            },
            opacity: 0.3,
          },
          move: {
            speed: 2,
            trail: {
              enable: false,
              fillColor: "ffffff",
            },
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onhover: {
              enable: !isMobile,
              mode: ["bubble", "connect", "slow"],
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 200,
              size: 5,
              duration: 2,
              opacity: 2,
            },
            connect: {
              distance: 200,
              radius: 166,
              links: {
                opacity: 0.33,
              },
            },
            slow: {
              factor: 1,
              radius: 200,
            },
            repulse: {
              distance: 200,
              duration: 2,
              speed: 1,
            },
          },
        },
      }}
    />
  );
};

export default ParticlesSection;
