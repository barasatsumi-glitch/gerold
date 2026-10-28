import CircularText from "./CircularText";
import AnimatedCircle from "./AnimatedCircle";

const Circle = () => (
  <CircularText
    text="EXPERT VIDEO EDITOR • EXPERT VIDEO EDITOR • "
    spinDuration={20}
    radius={40}
    className="custom-class"
  >
    <AnimatedCircle />
  </CircularText>
);

export default Circle;
