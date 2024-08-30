import './ErrorDisplay.css';

interface ErrorDisplayProps {
  text: string;
}

export default function ErrorDisplay({ text }: ErrorDisplayProps) {
  if (!text) {
    return null;
  }
  return <div className="error-display">{text}</div>;
}
