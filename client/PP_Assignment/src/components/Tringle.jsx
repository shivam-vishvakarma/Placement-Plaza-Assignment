export default function Tringle({size = 3, color = "blue", angle = 0, ...props}) {
    size = size*50;
    const triangleStyle = {
      width: 0,
      height: 0,
      borderLeft: `${size}px solid transparent`,
      borderRight: `${size}px solid transparent`,
      borderBottom: `${size}px solid ${color}`,
      transform: `rotate(${angle}deg)`,
    };

    return <div style={triangleStyle} {...props} />;
}