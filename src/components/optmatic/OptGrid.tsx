export default function OptGrid() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
        <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Everything you need to deploy your app
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="group relative h-full min-h-[400px] overflow-hidden rounded-lg max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
              <img
                alt="Website Development"
                src="https://tailwindui.com/plus/img/component-images/bento-01-performance.png"
                className="absolute h-full w-full object-cover object-left"
              />
              <div className="absolute inset-0 bg-gray-900/50" />
              
              <div className="relative p-10 flex h-full flex-col justify-end">
                <h3 className="text-sm/4 font-semibold text-indigo-200">Core Service</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">Website Development</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-200">
                  Custom-built websites that deliver exceptional user experiences, optimized for performance and conversion.
                </p>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-3">
            <div className="group relative h-full min-h-[400px] overflow-hidden rounded-lg lg:rounded-tr-[2rem]">
              <img
                alt="E-commerce Solutions"
                src="https://tailwindui.com/plus/img/component-images/bento-01-releases.png"
                className="absolute h-full w-full object-cover object-left lg:object-right"
              />
              <div className="absolute inset-0 bg-gray-900/50" />
              
              <div className="relative p-10 flex h-full flex-col justify-end">
                <h3 className="text-sm/4 font-semibold text-indigo-200">Core Service</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">E-commerce Solutions</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-200">
                  Powerful online stores built with WooCommerce and Shopify, designed to maximize sales and customer engagement.
                </p>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-2">
            <div className="group relative h-full min-h-[350px] overflow-hidden rounded-lg lg:rounded-bl-[2rem]">
              <img
                alt="Web Applications"
                src="https://tailwindui.com/plus/img/component-images/bento-01-speed.png"
                className="absolute h-full w-full object-cover object-left"
              />
              <div className="absolute inset-0 bg-gray-900/50" />
              
              <div className="relative p-10 flex h-full flex-col justify-end">
                <h3 className="text-sm/4 font-semibold text-indigo-200">Advanced Solutions</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">Web Applications</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-200">
                  Custom web applications that streamline your business processes and enhance productivity.
                </p>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-2">
            <div className="group relative h-full min-h-[350px] overflow-hidden rounded-lg">
              <img
                alt="Site Management"
                src="https://tailwindui.com/plus/img/component-images/bento-01-integrations.png"
                className="absolute h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900/50" />
              
              <div className="relative p-10 flex h-full flex-col justify-end">
                <h3 className="text-sm/4 font-semibold text-indigo-200">Support</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">Site Management</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-200">
                  Comprehensive website maintenance and updates to keep your site secure and performing optimally.
                </p>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-2">
            <div className="group relative h-full min-h-[350px] overflow-hidden rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
              <img
                alt="WordPress Solutions"
                src="https://tailwindui.com/plus/img/component-images/bento-01-network.png"
                className="absolute h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900/50" />
              
              <div className="relative p-10 flex h-full flex-col justify-end">
                <h3 className="text-sm/4 font-semibold text-indigo-200">Platform</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">WordPress Solutions</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-200">
                  Expert WordPress development and customization for scalable, content-driven websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
