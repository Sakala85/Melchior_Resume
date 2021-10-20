import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Instagram,
  GitHub,
  LinkedIn,
  Twitter,
  Work,
  ArrowDropDown,
} from "@material-ui/icons";

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#0071b5", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #0071b5" }}
        date="November 2020 - June 2021"
        iconStyle={{ background: "#0071b5", color: "#fff" }}
        icon={<Work />}
      >
        <h3 className="vertical-timeline-element-title">UNSDSN</h3>
        <h4 className="vertical-timeline-element-subtitle">Developer</h4>
        <p>
          Front-End Developer, Developping Data visualisation tools on SDGs -{" "}
          <a href="https://sdgindex.org/">https://sdgindex.org/</a>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#2f808b", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #2f808b" }}
        date="2010 - 2011"
        iconStyle={{ background: "#2f808B", color: "#fff" }}
        icon={<Work />}
      >
        <h3 className="vertical-timeline-element-title">ProInclu</h3>
        <h4 className="vertical-timeline-element-subtitle">
          CTO / Developer, ProInclu
        </h4>
        <p>
          Development of a platform that automates administrative procedures for
          disable people (React - Node.JS)
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Instagram />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Instagram />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Instagram />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Instagram />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
