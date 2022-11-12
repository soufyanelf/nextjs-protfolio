import React from 'react';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className='absolute left-0 bottom-6 flex justify-center items-center w-full m-0'>
        <h5 className='text-black dark:text-gray-300 text-center sm:text-sm text-xs'>
            &copy; {year} - Made with ❤️ by <b>Ismail Boularbah</b>
        </h5>
    </footer>
  )
}

export default Footer;