import "./CircularText.css";

const CircularText = ({
  text,
  spinDuration = 20,
  radius = 52,
  className = "",
  children,
}) => {
  const letters = Array.from(text);

  return (
    <div className={`circular-text ${className}`}>
      <div
        className="circular-text-ring"
        style={{ "--spin-duration": `${spinDuration}s` }}
      >
        {letters.map((letter, index) => {
          const angle = (360 / letters.length) * index;
          const transform = `rotate(${angle}deg) translateY(-${radius}px)`;

          return (
            <span key={`${letter}-${index}`} style={{ transform }}>
              {letter}
            </span>
          );
        })}
      </div>
      <div className="circular-text-center">{children}</div>
    </div>
  );
};

export default CircularText;
