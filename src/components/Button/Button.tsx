import './Button.css';

interface ButtonProps {
  type: 'submit' | 'reset' | 'button';
  text: string;
  isClickable: boolean;
}

export default function Button({ type, text, isClickable }: ButtonProps) {
  const className = `button ${isClickable ? '' : 'disabled'}`;

  return (
    <button type={type} className={className} disabled={!isClickable}>
      {text}
    </button>
  );
}
