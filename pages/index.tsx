import { url } from 'inspector';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../components/Header';
import Landing from '../components/Landing';
import Features from '../components/Features';
import Typing from '../components/Typing';

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
        <div
          className="absolute top-0 left-0 right-0 bg-no-repeat bg-cover shadow-lg -bottom-full brightness-90 filter md:bottom-0 md:bg-center md:brightness-100"
          style={{
            backgroundImage: "url('images/splash.png')",
            zIndex: -1,
          }}
        />
        <Header />
        <Landing />
        <Features />
        <div className="py-16 bg-gradient-to-t from-gray-900 to-gray-800 md:py-32"></div>

        <div className="max-w-full md:mx-10 lg:mx-20 xl:mx-auto">
          <div
            className="px-10 shadow-2xl py-14 md:py-32 md:text-center"
            style={{
              background:
                'radial-gradient(circle, rgb(244, 0, 118) 21%, rgb(179, 109, 250) 67%',
            }}
          >
            <h1 className="mb-6 text-3xl font-semibold text-center text-white md:text-6xl">
              Transform your <br className="sm:hidden" />
              <Typing />
            </h1>
            <h2 className="mb-10 text-xl text-center text-gray-200 md:text-2xl">
              Oh, did we mention there's an editable typewriter effect
              with Typed.js?
            </h2>
            <div className="flex flex-wrap justify-center mb-10 -mt-4 space-y-4 pace-x-4">
              <a
                className="md:mt-2 text-center text-gray-100 text-md md:text-xl font-semibold px-5 py-3 ease-in-out transform text-sm transition border-2 duration-400 hover:-translate-y-0.5 hover:text-gray-300 hover:border-gray-300 rounded-xl"
                href="#"
              >
                Get started for free
              </a>
            </div>
            <div className="flex -ml-4 space-x-4 text-center text-gray-100 md:justify-center md:space-x-8">
              <div className="ml-4">
                No credit card required • Cancel anytime • Free for 30
                days
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
