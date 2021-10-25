import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import dynamic from "next/dynamic";
import {
  Instagram,
  School,
  LinkedIn,
  Twitter,
  Work,
  ArrowDropDown,
} from "@material-ui/icons";
const ParticlesSection = dynamic(() => import("components/ParticlesSection"), {
  ssr: false,
});
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
          <h3 className="vertical-timeline-element-title">Noctus</h3>
          <h4 className="vertical-timeline-element-subtitle">Developer</h4>
          <p>Develop a mobile App to analyse dreams</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ecb7bf", color: "#666666" }}
          contentArrowStyle={{ borderRight: "7px solid  #ecb7bf" }}
          date="November 2020 - June 2021"
          iconStyle={{ background: "#ecb7bf", color: "#666666" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">UNSDSN</h3>
          <h4 className="vertical-timeline-element-subtitle">Developer</h4>
          <p>
            Front-End Developer, Developping Data visualisation tools on SDGs -{" "}
            <a href="https://sdgindex.org/" style={{ color: "#666666" }}>
              https://sdgindex.org/
            </a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ecb7bf", color: "#666666" }}
          contentArrowStyle={{ borderRight: "7px solid  #2f808b" }}
          date="2010 - 2011"
          iconStyle={{ background: "#ecb7bf", color: "#666666" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">ProInclu</h3>
          <h4 className="vertical-timeline-element-subtitle">
            CTO / Developer, ProInclu
          </h4>
          <p>
            Development of a platform that automates administrative procedures
            for disable people (React - Node.JS)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2021"
          contentArrowStyle={{ borderRight: "7px solid  #2f808b" }}
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
          contentArrowStyle={{ borderRight: "7px solid  #2f808b" }}
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
