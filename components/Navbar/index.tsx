import Link from "next/link";
import { FunctionComponent } from "react";
import ThemeToggler from "../../src/ThemeToggler";

const Navbar: FunctionComponent = () => {
  return (
    <nav className="flex justify-between items-center sm:flex-row flex-col gap-4">
      <div className="flex justify-center items-center gap-2">
        <h2 className="text-xl font-bold" title="Ismailium - Layhdi Chabab :)">
          <Link href="/">Soufyan.me</Link>
        </h2>
        {/* <div>
          <ThemeToggler />
        </div> */}
      </div>
      <div>
        <ul className="flex justify-center items-center gap-6">
          <li
            className="font-semibold text-black text-sm dark:text-gray-300"
            title="About"
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className="font-semibold text-black text-sm dark:text-gray-300"
            title="Projects"
          >
            <Link href="/blog">Blog</Link>
          </li>
          {/* <li
            className="font-semibold text-black text-sm dark:text-gray-300"
            title="Projects"
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className="font-semibold text-black text-sm dark:text-gray-300"
            title="Get in touch"
          >
            <Link href="/get-in-touch">Get in touch</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
