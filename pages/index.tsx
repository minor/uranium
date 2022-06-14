import { url } from 'inspector';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../components/Header';
import Landing from '../components/Landing';

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
        <div className="py-16 bg-gradient-to-t from-indigo-900 to-indigo-600 md:mt-40 md:py-24">
          <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
            <div className="space-y-16 md:space-y-24">
              <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                <div className="space-y-5 md:text-center">
                  <div className="+ inline-block rounded-lg bg-indigo-800 bg-opacity-60 px-3 py-1 text-sm font-semibold text-indigo-100 hover:cursor-pointer hover:bg-opacity-40">
                    The Product
                  </div>
                  <h1 className="text-3xl font-semibold text-gray-100 md:text-5xl">
                    Decked with countless features.
                  </h1>
                  <p className="text-xl text-gray-200 md:text-2xl">
                    Each feature is specifcially made for devs and
                    aimed at making{' '}
                    <span className="font-semibold">your</span> life
                    easier.
                  </p>
                </div>
              </div>
              <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                <div className="grid grid-cols-1 grid-rows-2 gap-8 text-lg md:grid-cols-2 lg:grid-cols-3">
                  <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                    <div className="h-full space-y-5 text-gray-100 bg-white border border-white shadow-md rounded-2xl border-opacity-10 bg-opacity-20 p-7 md:p-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-8 h-8 text-gray-100 drop-shadow-lg filter"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <h3 className="text-xl font-semibold text-white">
                        Feature 1
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eum, nihil?
                      </p>
                    </div>
                  </div>
                  <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                    <div className="h-full space-y-5 text-gray-100 bg-white border border-white shadow-md rounded-2xl border-opacity-10 bg-opacity-20 p-7 md:p-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-8 h-8 text-gray-100 drop-shadow-lg filter"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <h3 className="text-xl font-semibold text-white">
                        Feature 2
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Officiis, nemo.
                      </p>
                    </div>
                  </div>
                  <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                    <div className="h-full space-y-5 text-gray-100 bg-white border border-white shadow-md rounded-2xl border-opacity-10 bg-opacity-20 p-7 md:p-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-8 h-8 text-gray-100 drop-shadow-lg filter"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <h3 className="text-xl font-semibold text-white">
                        Feature 3
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Est, ullam.
                      </p>
                    </div>
                  </div>
                  <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                    <div className="h-full space-y-5 text-gray-100 bg-white border border-white shadow-md rounded-2xl border-opacity-10 bg-opacity-20 p-7 md:p-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-8 h-8 text-gray-100 drop-shadow-lg filter"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <h3 className="text-xl font-semibold text-white">
                        Feature 4
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Magnam, officia!
                      </p>
                    </div>
                  </div>
                  <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                    <div className="h-full space-y-5 text-gray-100 bg-white border border-white shadow-md rounded-2xl border-opacity-10 bg-opacity-20 p-7 md:p-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-8 h-8 text-gray-100 drop-shadow-lg filter"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <h3 className="text-xl font-semibold text-white">
                        Feature 5
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Rerum, corporis?
                      </p>
                    </div>
                  </div>
                  <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                    <div className="h-full space-y-5 text-gray-100 bg-white border border-white shadow-md rounded-2xl border-opacity-10 bg-opacity-20 p-7 md:p-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-8 h-8 text-gray-100 drop-shadow-lg filter"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <h3 className="text-xl font-semibold text-white">
                        Feature 6
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nobis, eius.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
