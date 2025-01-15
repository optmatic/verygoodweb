import { JSX } from "react";

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export default function GradientHeading({ 
  text, 
  level = 'h1' 
}: { 
  text: string;
  level?: HeadingLevel;
}) {
  const Tag = level as keyof JSX.IntrinsicElements;
  
  return (
    <Tag className="text-gray-950 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
      {text}
    </Tag>
  );
}