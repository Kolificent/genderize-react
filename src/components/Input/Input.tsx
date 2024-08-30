import { ChangeEvent } from 'react';
import './Input.css';

interface InputProps {
  type: 'text';
  value: string;
  name: string;
  placeholder: string;
  isRequired?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  value,
  name,
  placeholder,
  isRequired,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      id={name}
      value={value}
      name={name}
      placeholder={placeholder}
      required={isRequired}
      onChange={onChange}
      autoFocus={true}
    />
  );
}
