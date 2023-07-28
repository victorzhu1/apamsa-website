import { Button, ButtonToolbarProps } from 'react-bootstrap';

type ButtonProps = {
  text: string;
  link: string;
  size: 'small' | 'medium' | 'large';
};

const ButtonComponent: React.FC<ButtonProps> = ({ text, link, size }) => {
  const buttonStyle = {
    border: '1px solid white',
    backgroundColor: 'transparent',
    color: 'white',
    padding: size === 'small' ? '5px 10px' : size === 'medium' ? '10px 20px' : '15px 30px',
    fontSize: size === 'small' ? '14px' : size === 'medium' ? '16px' : '16px',
    borderRadius: 0,
  };



  return (
    <Button
      href={link}
      className="d-inline-flex align-items-center justify-content-center text-center transition duration-200 ease-in-out hover:bg-white"
      style={buttonStyle}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;