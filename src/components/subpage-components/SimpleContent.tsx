import ReactMarkdown from 'react-markdown';

// import BlackButton from '../optmatic/DarkButton';
import LightButton from '../optmatic/LightButton';

interface SimpleContentProps {
  badge: string;
  title: string;
  leftColumnContent: string;
  rightColumnContent: string;
  ctaText: string;
  ctaLink: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function SimpleContent({
  badge,
  title,
  leftColumnContent,
  rightColumnContent,
  ctaText,
  ctaLink,
  // imageSrc,
  // imageAlt = "",
}: SimpleContentProps) {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-0">
        <div className="mx-auto intro max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="intro max-w-lg border-deepBlue/7 0">
          <p className="subheading text-base/7 font-semibold">{badge}</p>
          <hr className="mt-2 mb-6" />
          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-deepBlue sm:text-5xl">
            {title}
          </h1>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <ReactMarkdown className="prose">{leftColumnContent}</ReactMarkdown>
            </div>
            <div>
              <ReactMarkdown className="prose">{rightColumnContent}</ReactMarkdown>
            </div>
          </div>
          {ctaText && ctaLink && (
            <div>
              <LightButton text={ctaText} link={ctaLink} targetVal="_self"/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}