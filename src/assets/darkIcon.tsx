interface IconProps {
  width?: number;
  height?: number;
  primaryColor?: string;
}

const DarkIcon: React.FC<IconProps> = ({
  width = 48,
  height = 48,
  primaryColor = "black",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.77671 12.7229C7.61096 7.33208 12.8453 2.8837 18.672 0.91432C20.1423 0.417631 21.6514 0.00621451 22.0252 0.00055654C24.0694 -0.0309665 24.5696 1.27966 23.2317 3.16094C17.3496 11.4309 18.286 22.9598 25.4215 30.1216C29.9332 34.6504 34.627 36.5426 41.2025 36.4832C47.0597 36.4302 47.4168 37.4135 43.0209 41.4905C37.9215 46.2197 32.0981 48.3128 25.0139 47.9624C18.6651 47.648 13.5424 45.4199 9.14487 41.0597C1.60495 33.5843 -0.162532 22.118 4.77671 12.7229Z"
        fill={primaryColor}
      />
    </svg>
  );
};

export default DarkIcon;
