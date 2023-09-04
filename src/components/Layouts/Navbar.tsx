import Image from "next/image";
import Link from "next/link";
import { BiSolidUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="shadow bg-[#262582] text-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
                <ul className="p-2">
                  <li>
                    <a>College history</a>
                  </li>
                  <li>
                    <a>Principle</a>
                  </li>
                  <li>
                    <a>Vice principle</a>
                  </li>
                  <li>
                    <a>Administration</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Departments</a>
              </li>
              <li>
                <a>Gallery</a>
              </li>
              <li>
                <a>News & Events</a>
                <ul className="p-2">
                  <li>
                    <a>Notice</a>
                  </li>
                  <li>
                    <a>News</a>
                  </li>
                  <li>
                    <a>Events</a>
                  </li>
                  <li>
                    <a>Class Routine</a>
                  </li>
                  <li>
                    <Link
                      target="blank"
                      className="hover:text-green-600 hover:bg-white"
                      href="http://www.educationboardresults.gov.bd/"
                    >
                      Board result check
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <Link href="/" className="overflow-hidden">
            <Image
              src="/rangamati_public_collage.jpg"
              alt="Rangamati public collage logo"
              className="object-cover bg-transparent"
              height={60}
              width={60}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:bg-none">
              <a className="active:text-green-600 hover:text-green-500 ">
                Home
              </a>
            </li>
            <li tabIndex={0} className="hover:bg-none">
              <details>
                <summary className="active:text-green-600 hover:text-green-500">
                  About us
                </summary>
                <ul className="p-2 z-20 w-48 text-black">
                  <li className="hover:bg-none">
                    <a className="hover:text-green-600 hover:bg-white">
                      College history
                    </a>
                  </li>
                  <li className="hover:bg-none">
                    <a className="hover:text-green-600 hover:bg-white">
                      Principle
                    </a>
                  </li>
                  <li className="hover:bg-none">
                    <a className="hover:text-green-600 hover:bg-white">
                      Vice principle
                    </a>
                  </li>
                  <li className="hover:bg-none">
                    <a className="hover:text-green-600 hover:bg-white">
                      Administration
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:bg-none">
              <a className="active:text-green-600 hover:text-green-500 ">
                Departments
              </a>
            </li>
            <li className="hover:bg-none">
              <a className="active:text-green-600 hover:text-green-500 ">
                Gallery
              </a>
            </li>
            <li className="hover:bg-none" tabIndex={0}>
              <details>
                <summary className="active:text-green-600 hover:text-green-500 ">
                  News & Events
                </summary>
                <ul className="p-2 text-black w-48 z-20">
                  <li>
                    <a className="hover:text-green-600 hover:bg-white">
                      Notice
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-green-600 hover:bg-white">News</a>
                  </li>
                  <li>
                    <a className="hover:text-green-600 hover:bg-white">
                      Events
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-green-600 hover:bg-white">
                      Class Routine
                    </a>
                  </li>
                  <li>
                    <Link
                      className="hover:text-green-600 hover:bg-white"
                      target="blank"
                      href="http://www.educationboardresults.gov.bd/"
                    >
                      Board result check
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="focus:bg-none selection:bg-none">
              <a className="active:text-green-600 hover:text-green-500 ">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle flex justify-center items-center avatar rounded-full bg-white hover:bg-[#262582] hover:border hover:border-white"
            >
              <div className="">
                <BiSolidUser className="text-3xl text-[#262582] hover:text-white" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-20 bg-white p-2 shadow menu menu-sm dropdown-content rounded-box w-52"
            >
              <li>
                <a className="hover:text-green-600 hover:bg-white text-black">
                  Profile
                </a>
              </li>
              <li>
                <a className="hover:text-green-600 hover:bg-white text-black">
                  Settings
                </a>
              </li>
              <li>
                <a className="hover:text-green-600 hover:bg-white  text-black">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
