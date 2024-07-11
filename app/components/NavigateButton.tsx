import { useNavigate } from "@remix-run/react";

const NavigateButton = ({ to, label }: { to: string, label: string }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default NavigateButton;
