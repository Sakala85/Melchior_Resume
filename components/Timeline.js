import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import dynamic from "next/dynamic";
import {
  Instagram,
  School,
  PanTool,
  Work,
  ArrowDropDown,
} from "@material-ui/icons";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  ButtonBase,
  Modal,
  Chip,
  Slide,
} from "@material-ui/core";
import styled from "styled-components";
const ParticlesSection = dynamic(() => import("components/ParticlesSection"), {
  ssr: false,
});

const StyledChip = styled(Chip)`
  && {
    background-color: #666;
    color: #ecb7bf;
    float: left;
  }
`;

const Timeline = () => {
  return (
    <>
      <VerticalTimeline lineColor="black" style={{ width: "100%" }}>
        <ParticlesSection />
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ecb7bf", color: "#666666" }}
          contentArrowStyle={{ borderRight: "7px solid  #ecb7bf" }}
          date="June 2021 - present"
          iconStyle={{ background: "#ecb7bf", color: "#666666" }}
          icon={<Work />}
        >
          <Grid container>
            <Grid item xs={12}>
              <StyledChip label={"React"} />
              <StyledChip label={"Python"} />
              <StyledChip label={"SQL"} />
              <StyledChip label={"API"} />
              <StyledChip label={"API Doc"} />
            </Grid>
            <Grid item xs={12}>
              <h3 className="vertical-timeline-element-title">Ezus</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Full Stack Developer
              </h4>
              <ul>
                <li>
                  Development of features, Front/Back Fix and recovery scripts
                  for SAS Software
                </li>
              </ul>
            </Grid>
          </Grid>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ecb7bf", color: "#666666" }}
          contentArrowStyle={{ borderRight: "7px solid  #ecb7bf" }}
          date="June 2021 - present"
          iconStyle={{ background: "#ecb7bf", color: "#666666" }}
          icon={<Work />}
        >
          <Grid container>
            <Grid item xs={12}>
              <StyledChip label={"Team Management"} />
              <StyledChip label={"Order Management"} />
              <StyledChip label={"Pay"} />
              <StyledChip label={"Menu Creation"} />
            </Grid>
            <Grid item xs={12}>
              <h3 className="vertical-timeline-element-title">
                Maison Lautrec
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Manager</h4>
              <ul>
                <li>
                  Management of the team, schedules, payroll, orders,
                  reservations and restaurant services
                </li>
              </ul>
            </Grid>
          </Grid>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ecb7bf", color: "#666666" }}
          contentArrowStyle={{ borderRight: "7px solid  #ecb7bf" }}
          date="June 2021 - present"
          iconStyle={{ background: "#ecb7bf", color: "#666666" }}
          icon={<Work />}
        >
          <Grid container>
            <Grid item xs={12}>
              <StyledChip label={"Dart"} />
              <StyledChip label={"Flutter"} />
              <StyledChip label={"Node.js"} />
              <StyledChip label={"Illustrator"} />
              <StyledChip label={"InDesign"} />
              <StyledChip label={"Photoshop"} />
            </Grid>
            <Grid item xs={12}>
              <h3 className="vertical-timeline-element-title">Noctus</h3>
              <h4 className="vertical-timeline-element-subtitle">Developer</h4>
              <ul>
                <li>Develop a mobile App to record and analyse dreams</li>
                <li>
                  Design the mobile app (Illustrator, InDesign, Photoshop)
                </li>
                <li>Deploy the mobile App</li>
              </ul>
            </Grid>
          </Grid>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ecb7bf", color: "#666666" }}
          contentArrowStyle={{ borderRight: "7px solid  #ecb7bf" }}
          date="November 2020 - June 2021"
          iconStyle={{ background: "#ecb7bf", color: "#666666" }}
          icon={<Work />}
        >
          <Grid container>
            <Grid item xs={12}>
              <StyledChip label={"React.js"} />
              <StyledChip label={"next"} />
              <StyledChip label={"Node.js"} />
              <StyledChip label={"Python"} />
              <StyledChip label={"Illustrator"} />
              <StyledChip label={"InDesign"} />
            </Grid>
            <Grid item xs={12}>
              <h3 className="vertical-timeline-element-title">
                United Nation Sustainable Development Solution Network (UNSDSN)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Developer Front-end React.js/next/Py/Node.js
              </h4>
              <ul>
                <li>
                  Develop the front-end for different countries on their SDG's
                </li>
                <li>Add new features on existing projects</li>
                <li>
                  Develop data visualization tools for SDG's -{" "}
                  <a href="https://sdgindex.org/">https://sdgindex.org/</a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ecb7bf", color: "#666666" }}
          contentArrowStyle={{ borderRight: "7px solid  #ecb7bf" }}
          date="February 2020 - May 2020"
          iconStyle={{ background: "#ecb7bf", color: "#666666" }}
          icon={<PanTool />}
        >
          <Grid container>
            <Grid item xs={12}>
              <StyledChip label={"React.js"} />
              <StyledChip label={"Node.js"} />
              <StyledChip label={"Sockets"} />
            </Grid>
            <Grid item xs={12}>
              <h3 className="vertical-timeline-element-title">
                APHP (Hopitaux de Paris)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Volunteer Developer React/Node.js
              </h4>
              <ul>
                <li>
                  Technical support on an application to maintain the patient
                  family bond.
                </li>
                <li>
                  Development of a call dispatching system (Node.js / React)
                </li>
              </ul>
            </Grid>
          </Grid>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ecb7bf", color: "#666666" }}
          contentArrowStyle={{ borderRight: "7px solid  #ecb7bf" }}
          date="2018 - 2020"
          iconStyle={{ background: "#ecb7bf", color: "#666666" }}
          icon={<Work />}
        >
          <Grid container>
            <Grid item xs={12}>
              <StyledChip label={"React.js"} />
              <StyledChip label={"Node.js"} />
              <StyledChip label={"Illustrator"} />
              <StyledChip label={"InDesign"} />
            </Grid>
            <Grid item xs={12}>
              <h3 className="vertical-timeline-element-title">ProInclu</h3>
              <h4 className="vertical-timeline-element-subtitle">
                CTO / Developer, ProInclu
              </h4>
              <ul>
                <li>
                  Development of a platform that automates administrative
                  procedures for disable people (React - Node.JS)
                </li>
                <li>Design the app and the Visual identity of the company</li>
              </ul>
            </Grid>
          </Grid>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2021"
          contentArrowStyle={{ borderRight: "7px solid  #ecb7bf" }}
          contentStyle={{ background: "#ecb7bf", color: "#666666" }}
          iconStyle={{ background: "#ecb7bf", color: "#666666" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">Ecole 42</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Computing Science Student
          </h4>
          <p>Learn how to code in C, React, Node.js, Html, CSS...</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2018"
          contentArrowStyle={{ borderRight: "7px solid  #ecb7bf" }}
          contentStyle={{ background: "#ecb7bf", color: "#666666" }}
          iconStyle={{ background: "#ecb7bf", color: "#666666" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">Paris 8</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mathematic and Computing Science Student
          </h4>
          <p>Learn Mathematic Basics, Algoritmic, SQL and C++</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
