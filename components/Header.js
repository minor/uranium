import { useState } from 'react';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header>
      <div className="flex flex-col px-4 pt-4 mx-auto text-black roboto-regular max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between p-4">
          <a
            href="/"
            className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-amber-300 md:text-gray-900"
          >
            Uranium
          </a>
          <button
            className="px-3 py-1 bg-white rounded-full cursor-pointer bg-opacity-30 focus:outline-none md:hidden"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            'mt-3 flex-grow items-start md:flex lg:mt-0' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <div className="flex-col pl-4 text-xl md:flex-grow md:pl-0">
            <ul className="flex flex-wrap items-center justify-end flex-grow gap-2 pr-4 space-x-2 md:gap-6 md:space-x-6">
              <li>
                <a
                  href="#features"
                  className="text-lg text-white md:text-black hover:text-gray-300 md:hover:text-gray-700"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="text-lg text-white md:text-black hover:text-gray-300 md:hover:text-gray-700"
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg text-white md:text-black hover:text-gray-300 md:hover:text-gray-700"
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="bg-white rounded-full bg-opacity-40 px-4 text-lg text-white md:text-black shadow-sm transition-colors duration-75 group gap-[0.25em] inline-flex items-center py-1.5 hover:cursor-pointer hover:bg-opacity-90"
                >
                  Sign up
                  <svg
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative transition-transform duration-200 motion-safe:-translate-x-1 group-hover:translate-x-0"
                  >
                    <path
                      fill="currentColor"
                      d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      d="M1.75 8H11"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      class="origin-left transition-all duration-200 opacity-0 motion-safe:-translate-x-1 group-hover:translate-x-0 group-hover:opacity-100"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
