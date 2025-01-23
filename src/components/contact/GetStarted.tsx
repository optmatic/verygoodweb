import WaveImage from "@/images/wave-bg.jpeg";
import GradientButton3d from "../optmatic/GradientButton";
import DarkButton from "../optmatic/DarkButton";

export default function GetStarted() {
  return (
    <div className="relative border border-deepBlue/30 shadow-lg bg-light">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          alt=""
          src={WaveImage.src}
          className="h-64 w-full object-cover bg-deepBlue/50 opacity-90 saturate-100 sm:h-80 lg:absolute lg:h-full"
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto intro max-w-xl lg:mx-0 lg:max-w-lg">
          <div className="intro max-w-lg border-deepBlue/7 0">
          <p className="subheading text-base/7 font-semibold">CONTACT US TODAY</p>
          <hr className="mt-2 mb-6 !border-deepBlue/20" />
          <h3 className="mt-2 mb-8 text-pretty text-4xl font-semibold tracking-tight text-deepBlue sm:text-5xl">
            Let's build something remarkable
          </h3>
          </div>
            <p className="mt-2 text-lg/8 text-gray-600">
              Tell us about your vision, and we'll help turn it into an innovative and high-performing solution. Our team
              works closely with you to ensure precision and excellence in every step of the process.
            </p>
            <form action="#" method="POST" className="mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-optBlue"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-optBlue"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-optBlue"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                    Company name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-optBlue"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="website" className="block text-sm/6 font-semibold text-gray-900">
                    Website (optional)
                  </label>
                  <div className="mt-2.5">
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
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                    Project details
                  </label>
                  <p className="text-gray-400">Tell us about your goals, ideas, or challenges (max 500 characters).</p>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-optBlue"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                <DarkButton text="Submit your enquiry" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
