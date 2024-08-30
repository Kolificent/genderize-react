import BlinkingCursor from './BlinkingCursor/BlinkingCursor';
import './NameDisplay.css';

interface NameDisplayProps {
  name: string;
  gender: string;
}

export default function NameDisplay({ name, gender }: NameDisplayProps) {
  if (!name) return <BlinkingCursor />;
  if (gender)
    return (
      <span>
        {name} is {gender}
      </span>
    );
  return (
    <span>
      {name}
      <BlinkingCursor /> is...
    </span>
  );
}
