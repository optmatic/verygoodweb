import WhyOptmaticImg from "@/images/wave-bg.jpeg"
import GradientButton from "./GradientButton"

export default function WhyOptmatic() {
    return (
    <div className="why-optmatic w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row shadow-sm shadow-optBlue/30">
        {/* Left Content Section */}
        {/* Removed padding from here */}
        <div className="flex-1 bg-deepBlue p-8 flex flex-col justify-center">
          <div className="max-w-xl">
            <p className="text-sm font-mono tracking-wider uppercase mb-4">WHY OPTMATIC?</p>
            <h1 className="text-4xl font-bold lg:text-5xl mb-8 font-mono">
                <hr className="w-full bg-deepBlue mb-8" />
                Ultra-Customised, Yet Affordable Digital Solutions.
            </h1>
            <p className="text-xl mb-4 leading-relaxed">
            At Optmatic, we specialise in crafting bespoke digital strategies tailored to your unique goals. Every solution is designed to enhance your online presence and deliver measurable results.
            </p>
            <p className="text-lg mb-12">
            Innovation doesn't have to come at a high cost. We offer affordable, high-quality services, ensuring your business thrives in the digital landscape without exceeding your budget.
            </p>
            <GradientButton link="/contact" targetVal="_self" text="Book a demo"/>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative">
          <img
            src={WhyOptmaticImg.src}
            alt="Professional working with laptop in a scenic setting"
            className="object-cover w-full h-full opacity-50"
          />
        </div>
      </div>
    </div>
    )
    }
  
  