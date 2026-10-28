import ScrollVelocity from "./ScrollVelocity";
import Exact from "../assets/Exact.png";
import Suma from "../assets/Suma.png";
import Ideo from "../assets/Ideo.png";
import Nespresso from "../assets/Nespresso.png";
import Onlyone from "../assets/Onlyone.png";
import Zillow from "../assets/Zillow.png";
import Vml from "../assets/Vml.png";
import Echo from "../assets/Echo.png";

const logos = [
  ["Exact", Exact],
  ["Suma", Suma],
  ["Ideo", Ideo],
  ["Nespresso", Nespresso],
  ["Onlyone", Onlyone],
  ["Zillow", Zillow],
  ["VML", Vml],
  ["Echo", Echo],
];

const ScrollText = () => (
  <ScrollVelocity
    texts={[
      <span className="client-logo-track">
        {logos.map(([name, image]) => (
          <img className="client-logo" src={image} alt={name} key={name} />
        ))}
      </span>,
    ]}
    velocity={100}
    className="custom-scroll-text"
    numCopies={6}
    damping={50}
    stiffness={400}
  />
);

export default ScrollText;
