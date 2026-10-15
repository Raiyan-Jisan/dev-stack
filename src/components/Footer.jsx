import logoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-10 md:py-12">

        <div className="grid gap-10 md:grid-cols-4">

          <div className="md:col-span-1">
            <img
              src={logoText}
              alt="Dev Stack"
              className="h-7 w-auto"
            />

            <p className="mt-3 max-w-xs text-sm leading-5 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-4 text-xs text-gray-600">
              <a href="#" className="hover:text-gray-900">
                GitHub
              </a>
              <a href="#" className="hover:text-gray-900">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">
              <a href="#" className="block hover:text-gray-900">
                Home
              </a>
              <a href="#" className="block hover:text-gray-900">
                Technologies
              </a>
              <a href="#" className="block hover:text-gray-900">
                Projects
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">
              <a href="#" className="block hover:text-gray-900">
                About
              </a>
              <a href="#" className="block hover:text-gray-900">
                Contact
              </a>
              <a href="#" className="block hover:text-gray-900">
                Careers
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">
              <a href="#" className="block hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-gray-900">
                Terms of Service
              </a>
            </div>
          </div>

        </div>


        <div className="mt-10 flex flex-col gap-3 border-t border-gray-100 pt-5 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;