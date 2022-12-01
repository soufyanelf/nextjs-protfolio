import React from "react";

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="md:absolute md:left-0 md:right-0 md:bottom-8 flex justify-center items-center w-full m-0">
      <h5 className="text-black dark:text-gray-300 text-center sm:text-sm text-xs leading-6">
        &copy; {year} - Made with ❤️ by <b>Ismail Boularbah</b>
      </h5>
    </footer>
  );
};

export default Footer;
