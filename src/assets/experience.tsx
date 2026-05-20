// components/Icon.tsx

interface IconProps {
  width?: number;
  height?: number;
  primaryColor?: string;
  secondaryColor?: string;
}

const ExperienceIcon: React.FC<IconProps> = ({
  width = 48,
  height = 48,
  primaryColor = "black",
  secondaryColor = "rgba(0,0,0,0.3)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 34H18V32H10V38H38V32H30V34ZM8 28H18V22H30V28H40V18H8V28Z"
        fill={secondaryColor}
      />
      <path
        d="M40 14H32V10L28 6H20L16 10V14H8C5.8 14 4 15.8 4 18V28C4 29.5 4.8 30.76 6 31.46V38C6 40.22 7.78 42 10 42H38C40.22 42 42 40.22 42 38V31.44C43.18 30.74 44 29.46 44 28V18C44 15.8 42.2 14 40 14ZM20 10H28V14H20V10ZM38 38H10V32H18V34H30V32H38V38ZM22 30V26H26V30H22ZM40 28H30V22H18V28H8V18H40V28Z"
        fill={primaryColor}
      />
    </svg>
  );
};

export default ExperienceIcon;
