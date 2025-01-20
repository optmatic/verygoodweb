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
  
  const sizeClasses = {
    h1: 'text-4xl md:text-5xl',
    h2: 'text-3xl md:text-4xl',
    h3: 'text-2xl md:text-3xl',
    h4: 'text-xl md:text-2xl',
    h5: 'text-lg md:text-xl',
    h6: 'text-base md:text-lg',
  }[level];
  
  return (
    <Tag className={`${sizeClasses} text-gray-950 font-bold bg-clip-text tracking-tight text-transparent bg-gradient-to-r from-optBlue to-optGreen`}>
      {text}
    </Tag>
  );
}