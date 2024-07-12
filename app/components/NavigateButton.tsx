const NavigateButton = ({ to, label }: { to: string, label: string }) => {

  const handleClick = () => {
    alert("test!")
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default NavigateButton;
