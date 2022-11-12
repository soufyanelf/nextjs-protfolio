import Link from 'next/link';
import { FunctionComponent } from 'react';

import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero: FunctionComponent = () => {
  return (
    <div className='flex flex-col justify-center items-center sm:py-32 py-28 gap-6 px-4'>
        <div className='lex justify-center items-center'>
            <img 
                src="/evil-ismail.jpg"
                alt="Ismail Boularbah" style={{
                maxWidth: '170px',
                width: '100%',
                margin: 'auto',
                borderRadius: '50%'
            }}/>
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='text-center font-bold text-2xl'>
                Ismail Boularbah
            </h2>
            <p className='text-center text-sm sm:text-md'>
                Frontend Developer, Cuber, Chess, And F1 Lover {"<3"}
            </p>
        </div>
        <div className='flex justify-center items-center'>
            <ul className='flex justify-center items-center gap-6'>
                <li className='text-2xl' title='Twitter'>
                    <Link href="https://twitter.com/boularbahsmail" legacyBehavior>
                        <a target="_blank">
                            <FiTwitter />
                        </a>
                    </Link>
                </li>
                <li className='text-2xl' title='LinkedIn'>
                    <Link href="https://www.linkedin.com/in/ismail-boularbah-a0926919b/" legacyBehavior>
                        <a target="_blank">
                            <FiLinkedin />
                        </a>
                    </Link>
                </li>
                <li className='text-2xl' title='GitHub'>
                    <Link href="https://github.com/boularbahsmail/" legacyBehavior>
                        <a target="_blank">
                            <FiGithub />
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Hero;