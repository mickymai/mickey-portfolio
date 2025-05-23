import Link from 'next/link'

const Header = () => {
  return (
      <header className="sticky top-0 bg-white z-50">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img src="/images/Micky-black.png" className="mr-3 h-6 sm:h-9" alt="Micky Logo"/>
              <span className="self-center text-xl font-semibold whitespace-nowrap ">Micky Mai</span>
            </a>
            <div className="md:hidden flex items-center lg:order-2">
              <button data-collapse-toggle="mobile-menu-2" type="button"
                      className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 hover:cursor-pointer"
                      aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"></path>
                </svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a href="/#di-hoc"
                     className="block py-2 px-4 text-gray-700 hover:bg-black hover:text-white rounded-4xl">ĐI HỌC</a>
                </li>
                <li>
                  <a href="/#di-lam"
                     className="block py-2 px-4 text-gray-700 hover:bg-black hover:text-white rounded-4xl">ĐI LÀM</a>
                </li>
                <li>
                  <a href="/#di-du-lich"
                     className="block py-2 px-4 text-gray-700 hover:bg-black hover:text-white rounded-4xl">ĐI DU LỊCH</a>
                </li>
                <li>
                  <a href="/#phong-cach-song"
                     className="block py-2 px-4 text-gray-700 hover:bg-black hover:text-white rounded-4xl">PHONG CÁCH SỐNG</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Header
