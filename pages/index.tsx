import { url } from 'inspector';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../components/Header';
import Landing from '../components/Landing';
import Features from '../components/Features';
import Testimonies from '../components/Testimonies';
import Action from '../components/Action';
import Footer from '../components/Footer';

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
        {/* <div className="py-16 bg-gradient-to-t from-indigo-300 to-indigo-50 md:pb-48 md:pt-32">
          <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
            <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
              <div className="max-w-3xl mx-auto md:text-center">
                <h2 className="mb-5 text-3xl font-semibold text-gray-800 md:text-5xl">
                  Affordable, flexible pricing plans.
                </h2>
                <p className="text-xl md:text-2xl">
                  Our product is for you, whether you're a hobbyist, a
                  team, or a large company.
                </p>
              </div>
            </div>
            <div className="flex-col items-center space-y-6 my-14 md:mt-20 md:mb-28 md:flex">
              <button
                className="relative grid grid-cols-2 text-gray-800 transition-colors bg-indigo-200 border-4 border-indigo-200 rounded-full ring-1 ring-indigo-300 focus:outline-none"
                id="headlessui-switch-2"
                role="switch"
                aria-checked="false"
              >
                <div className="z-10 px-6 py-2">Annual</div>
                <div className="z-10 px-6 py-2">Monthly</div>
                <div className="absolute z-0 w-1/2 h-full transition ease-in-out transform translate-x-full rounded-full shadow bg-gradient-to-t from-indigo-100 to-white"></div>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-10 xl:grid-cols-3">
              <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                <div className="flex flex-col h-full p-6 space-y-4 bg-white border border-white border-opacity-50 shadow-xl undefined rounded-xl bg-opacity-40 md:space-y-6 md:p-8">
                  <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                    Starter
                  </h4>
                  <h5 className="text-xl font-semibold text-gray-800">
                    <div>$19.99 / month</div>
                    <div className="p-5 mt-5 text-base text-indigo-700 bg-indigo-200 rounded-2xl">
                      Get two months free when you switch to our
                      annual plan!
                    </div>
                  </h5>
                  <hr className="border-t border-gray-300" />
                  <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-gray-700 md:h-5 md:w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>Lorem ipsum dolor sit amet.</div>
                    </li>
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-gray-700 md:h-5 md:w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>Lorem ipsum dolor sit.</div>
                    </li>
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-gray-700 md:h-5 md:w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>
                        Lorem ipsum dolor, sit amet consectetur.
                      </div>
                    </li>
                  </ul>
                  <button className="px-5 py-2 font-semibold text-gray-800 transition ease-in-out transform bg-white rounded-full shadow-md bg-opacity-40 hover:-translate-y-1 hover:bg-opacity-100 focus:outline-none">
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mb-0.5 inline h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                <div className="flex flex-col h-full p-6 space-y-4 transform bg-white border border-white border-opacity-50 shadow-xl rounded-xl bg-opacity-80 md:space-y-6 md:p-8 xl:scale-110">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                      Scale
                    </h4>
                    <div className="+ inline-block rounded-xl bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-500">
                      Best value!
                    </div>
                  </div>
                  <h5 className="text-xl font-semibold text-gray-800">
                    <div>$49.99 / month</div>
                    <div className="p-5 mt-5 text-base text-indigo-700 bg-indigo-100 rounded-2xl">
                      Get two months free when you switch to our
                      annual plan!
                    </div>
                  </h5>
                  <hr className="border-t border-gray-300" />
                  <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-indigo-500 md:h-5 md:w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>Lorem ipsum dolor sit amet.</div>
                    </li>
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-indigo-500 md:h-5 md:w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>Lorem ipsum dolor sit.</div>
                    </li>
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-indigo-500 md:h-5 md:w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>
                        Lorem ipsum dolor, sit amet consectetur.
                      </div>
                    </li>
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-indigo-500 md:h-5 md:w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>Lorem, ipsum dolor.</div>
                    </li>
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-indigo-500 md:h-5 md:w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>Sit amet</div>
                    </li>
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-indigo-500 md:h-5 md:w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Similique, vitae.
                      </div>
                    </li>
                  </ul>
                  <button className="px-5 py-2 font-semibold text-gray-100 transition ease-in-out transform rounded-full shadow bg-gradient-to-t from-gray-800 to-gray-600 hover:-translate-y-1 hover:shadow-lg focus:outline-none">
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mb-0.5 inline h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                <div className="flex flex-col h-full p-6 space-y-4 bg-white border border-white border-opacity-50 shadow-xl undefined rounded-xl bg-opacity-40 md:space-y-6 md:p-8">
                  <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                    Enterprise
                  </h4>
                  <h5 className="text-xl font-semibold text-gray-800">
                    Custom price
                  </h5>
                  <hr className="border-t border-gray-300" />
                  <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-gray-700 md:h-5 md:w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>Lorem ipsum dolor sit amet.</div>
                    </li>
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-gray-700 md:h-5 md:w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>Lorem ipsum dolor sit.</div>
                    </li>
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-gray-700 md:h-5 md:w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>
                        Lorem ipsum dolor, sit amet consectetur.
                      </div>
                    </li>
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-gray-700 md:h-5 md:w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>Lorem, ipsum dolor.</div>
                    </li>
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-gray-700 md:h-5 md:w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>Sit amet</div>
                    </li>
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-gray-700 md:h-5 md:w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Similique, vitae.
                      </div>
                    </li>
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-gray-700 md:h-5 md:w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing.
                      </div>
                    </li>
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-gray-700 md:h-5 md:w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>Consequatur, eius.</div>
                    </li>
                  </ul>
                  <button className="px-5 py-2 font-semibold text-gray-800 transition ease-in-out transform bg-white rounded-full shadow-md bg-opacity-40 hover:-translate-y-1 hover:bg-opacity-100 focus:outline-none">
                    Contact Sales
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mb-0.5 inline h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <Testimonies /> */}
        <Action />
        <Footer />
      </div>
    </>
  );
};

export default Home;
