export default function Demo() {
  return (
    <section id="demo" className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 text-left md:mb-20 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
              Product in Action
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 md:text-5xl">
              Here's a demo
            </h1>
            <p className="mx-auto text-xl md:w-2/3 md:text-2xl">
              Talk a little bit about the product here and how it can
              be revolutionary for the customer.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
          Technology
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          Built with Next.js & TailwindCSS
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
          Aliquam ultrices sagittis orci a scelerisque purus. Ligula
          ullamcorper malesuada proin libero nunc consequat.
        </p>
        <img
          src="images/product.png"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl md:col-span-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                The latest and greatest.
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Tortor dignissim convallis aenean et tortor at. At
                ultrices mi tempus imperdiet nulla malesuada. Id
                cursus metus aliquam eleifend mi. Quis ipsum
                suspendisse ultrices gravida dictum fusce ut.
                Adipiscing elit ut aliquam purus.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Mighty quick.
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Sed elementum tempus egestas sed sed risus pretium
                quam vulputate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 mt-12 text-sm rounded-lg md:md-0 bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
          Product in Action
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          Continuously exceeds expectations
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
          Aliquam ultrices sagittis orci a scelerisque purus. Ligula
          ullamcorper malesuada proin libero nunc consequat.
        </p>
        <img
          src="images/product.png"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Defies the odds.
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Tortor dignissim convallis aenean et tortor at. At
                ultrices mi tempus imperdiet nulla malesuada.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Creatively designed.
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Id cursus metus aliquam eleifend mi. Quis ipsum
                suspendisse ultrices gravida dictum fusce ut.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Powerful.
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Tortor dignissim convallis aenean et tortor at. Id
                cursus metus aliquam eleifend mi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
