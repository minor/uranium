import { url } from 'inspector'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Uranium – a ready-to-use website template</title>
      <meta content="Example" name="description" />
      <meta property="og:url" content="example.com" />
      <meta property="og:description" content="Example" />
      <meta property="og:title" content="Example" />
      <meta property="og:image" content="" />
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <div className="h-full leading-normal text-gray-600">
      <div className="absolute top-0 left-0 right-0 bg-no-repeat bg-cover shadow-lg -bottom-full brightness-90 filter md:bottom-0 md:bg-center md:brightness-100" style={{backgroundImage: "url('images/splash.png')", zIndex: -1 }}></div>
      <Header />
      <div className="max-w-3xl mx-8 md:mx-auto">
      <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-5 md:space-y-8">
            <h1 className="text-3xl font-semibold text-white sm:text-5xl md:text-6xl md:text-gray-800">Welcome to Uranium.</h1>
            <h2 className="text-gray-100 sm:text-lg md:text-2xl md:mx-10 md:text-gray-600">Uranium is a powerful chemical element of atomic number 92 used in nuclear fission. That's precisely what we do: we make you go nuclear.</h2>
          </div>
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="space-y-2">
            <button className="px-5 py-2 font-semibold text-gray-100 transition ease-in-out transform rounded-full shadow md:text-xl md:px-8 md:py-3 bg-gradient-to-t from-gray-800 to-gray-600 hover:shadow-lg hover:-translate-y-1 focus:outline-none">
              Make this my landing page<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mb-0.5 h-7 w-7 hidden sm:inline"><path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <div className="text-sm text-gray-100 md:text-gray-600">Modular, easy-to-edit Next.js + Tailwind template</div>
          </div>
        </div>
      </div>
      <div className="text-gray-100 bg-black bg-opacity-0 border-black rounded shadow-xl md:p-6 md:rounded-2xl backdrop-filter backdrop-blur-2xl backdrop-brightness-110 md:bg-opacity-20 md:border border-opacity-20">
          <img className="rounded shadow-lg md:rounded-xl" src="/images/product.png" alt="A screenshot of our product." />
          </div>
    </div>
  </div>
  </>
  )
}

export default Home
