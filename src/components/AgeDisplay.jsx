import { useSpring, animated } from "@react-spring/web";

const AgeDisplay = ({ label, value }) => {
  const isValueZero = value === 0;
  const formattedValue = value < 10 && value !== 0 ? `0${value}` : value;
  const displayValue = value === 0 ? "--" : formattedValue;

  // spring animation
  const props = useSpring({ number: value, from: { number: 0 } });

  return (
    <h2>
      {isValueZero ? (
        <span className="text-purple">{displayValue}</span>
      ) : (
        <animated.span className="text-purple">
          {props.number.to((n) => (n < 10 && n !== 0 ? `0${Math.floor(n)}` : Math.floor(n)))}
        </animated.span>
      )}
      {" "}
      {label}
    </h2>
  );
};

export default AgeDisplay
