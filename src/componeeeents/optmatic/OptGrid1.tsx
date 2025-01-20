import InsightsImg from '@/images/insights-img.jpeg'
import GradientHeading from './GradientHeading';

interface GridItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

const gridItems: GridItem[] = [
  {
    title: 'E-commerce',
    subtitle: 'Lightning-fast builds',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: InsightsImg.src,
    position: 'topLeft'
  },
  {
    title: 'Static Websites',
    subtitle: 'Push to deploy',
    description: 'Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae odio.',
    image: InsightsImg.src,
  },
  {
    title: 'Dynamic Websites',
    subtitle: 'Connect your favorite tools',
    description: 'Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae odio.',
    image: InsightsImg.src,
  },
  {
    title: 'Web Applications',
    subtitle: 'Push to deploy',
    description: 'Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae odio.',
    image: InsightsImg.src,
  },
  {
    title: 'WordPress Development',
    subtitle: 'Push to deploy',
    description: 'Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae odio.',
    image: InsightsImg.src,
  },
  {
    title: 'Wesbite Management',
    subtitle: 'Push to deploy',
    description: 'Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae odio.',
    image: InsightsImg.src,
  },        

];

export default function ProjectGrid() {
  const getCornerClasses = (position?: string) => {
    const base = "rounded-lg";
    const corners = {
      topLeft: "lg:rounded-tl-[2rem]",
      topRight: "lg:rounded-tr-[2rem]",
      bottomLeft: "lg:rounded-bl-[2rem]",
      bottomRight: "lg:rounded-br-[2rem]"
    };
    return position ? `${base} ${corners[position as keyof typeof corners]}` : base;
  };

  return (
    <div className="project-grid bg-[#f0f9ff] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-0">
        <h2 className="text-3xl md:text-5xl font-bold text-deepBlue">End-to-end solutions for the modern web.</h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {gridItems.map((item, index) => (
            <div key={index} className="relative">
              <div className={`absolute inset-px bg-deepBlue ${getCornerClasses(item.position)}`} />
              <div className={`relative flex h-full flex-col overflow-hidden ${getCornerClasses(item.position)}`}>
                <img
                  alt=""
                  src={item.image}
                  className="h-80 object-cover object-left"
                />
                <div className={`px-6 py-10 border ${getCornerClasses(item.position)}`}>
                  <h4 className="text-sm/4 font-normal text-optBlue">{item.title}</h4>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-white">{item.subtitle}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white">{item.description}</p>
                </div>
              </div>
              <div className={`pointer-events-none absolute inset-px shadow ring-1 ring-black/5 ${getCornerClasses(item.position)}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  