import './Button.css';

interface ButtonProps {
  text: string;
  height: number;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button className="btn" style={{ height: props.height }} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
