import WaveImage from "@/images/wave-bg.jpeg";
// import GradientButton3d from "../optmatic/GradientButton";
import DarkButton from "../optmatic/DarkButton";
import React from "react";

export default function GetStarted() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    // Add your Web3Forms access key
    formData.append("access_key", "21455ef4-d6aa-4abd-858a-8376cb4f30d2");
    formData.append("subject", "New Get Started Request");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you for your enquiry. We'll be in touch soon!");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="my-16 relative border border-deepBlue/30 shadow-lg bg-light">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          alt=""
          src={WaveImage.src}
          className="h-64 w-full object-cover bg-deepBlue/50 opacity-90 saturate-100 sm:h-80 lg:absolute lg:h-full"
        />
      </div>
      <div className="py-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2">
        <div className="px-6 lg:px-8">
          <div className="mx-auto intro max-w-xl lg:mx-0 lg:max-w-lg">
          <div className="intro max-w-lg border-deepBlue/7 0">
          <p className="subheading text-base/7 text-deepBlue font-semibold">CONTACT US TODAY</p>
          <hr className="mt-2 mb-6 !border-deepBlue/20" />
          <h3 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-deepBlue sm:text-5xl">
            Let&apos;s build something remarkable
          </h3>
          </div>
            <p className="mt-2 text-lg/8 leading-6 text-deepBlue">
              Tell us about your vision, and we&apos;ll help turn it into an innovative and high-performing solution. Our team
              works closely with you to ensure precision and excellence in every step of the process.
            </p>
            <form onSubmit={onSubmit} className="mt-12">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                    First name
                  </label>
                  <div>
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      required
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-optBlue"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                    Last name
                  </label>
                  <div>
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      required
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-optBlue"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                    Email
                  </label>
                  <div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-optBlue"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                    Company name
                  </label>
                  <div>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organisation"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-optBlue"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="website" className="block text-sm/6 font-semibold text-gray-900">
                    Website (optional)
                  </label>
                  <div>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-optBlue"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm/6 font-semibold text-gray-900">
                    Expected budget
                  </label>
                  <div className="mt-2 space-y-4">
                    {[
                      {
                        id: 'budget-1k',
                        value: 'less-1k',
                        label: 'Less than $1,000',
                        description: 'Ideal for micro-projects or basic solutions'
                      },
                      {
                        id: 'budget-1k-2.5k',
                        value: '1k-2.5k',
                        label: '$1,000 - $2,500',
                        description: 'Great for simple, static websites or basic e-commerce setups'
                      },
                      {
                        id: 'budget-2.5k-7k',
                        value: '2.5k-7k',
                        label: '$2,500 - $7,000',
                        description: 'Perfect for growing businesses needing dynamic features'
                      },
                      {
                        id: 'budget-7k-15k',
                        value: '7k-15k',
                        label: '$7,000 - $15,000',
                        description: 'Designed for businesses requiring advanced functionality'
                      },
                      {
                        id: 'budget-15k-25k',
                        value: '15k-25k',
                        label: '$15,000 - $25,000',
                        description: 'Great for high-performing solutions with scalability'
                      },
                      {
                        id: 'budget-25k-plus',
                        value: '25k-plus',
                        label: '$25,000+',
                        description: 'Tailored enterprise solutions with extensive customisation'
                      },
                    ].map((option) => (
                      <div key={option.id} className="flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id={option.id}
                            name="budget"
                            type="radio"
                            value={option.value}
                            className="h-4 w-4 text-optBlue focus:ring-optBlue"
                          />
                        </div>
                        <div className="ml-3">
                          <label htmlFor={option.id} className="text-sm font-medium text-gray-900">
                            {option.label}
                          </label>
                          <p className="text-sm text-gray-500">{option.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                    Project details
                  </label>
                  <p className="text-black text-sm/6 mb-2">Tell us about your goals, ideas, or challenges (max 500 characters).</p>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-optBlue"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-col gap-4 border-t !border-deepBlue/20 pt-8">
                <DarkButton text="Submit your enquiry" type="submit" />
                {result && (
                  <p className={`text-left pt-4 font-semibold ${result.includes("thank you") ? "text-optGreen" : "text-red-600"}`}>
                    {result}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
