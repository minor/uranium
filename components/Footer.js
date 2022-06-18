export default function Footer() {
  return (
    <footer className="pt-16 pb-12 bg-gray-900 md:pt-20">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="flex justify-center text-gray-400">
          <div className="grid grid-cols-2 gap-8 mb-20 md:gap-28 md:grid-cols-4">
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">
                Uranium
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">
                Product
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
              <li>
                <a href="#">Purpose</a>
              </li>
              <li>
                <a href="#">System Status</a>
              </li>
            </ul>
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">
                Support
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Slack</a>
              </li>
              <li>
                <a href="#">System Status</a>
              </li>
            </ul>
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">
                Resources
              </li>
              <li>
                <a href="#">Developer API</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="-mt-8 text-center text-gray-300">
          Made with ♡ by{' '}
          <a
            href="https://saurish.com/?utm_source=uranium"
            className="underline"
          >
            Saurish
          </a>
          . &copy; Uranium 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
