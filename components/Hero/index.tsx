import { FunctionComponent } from 'react';
import Link from 'next/link';

import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const Hero: FunctionComponent = () => {

  const playTheme = () => {
    let game_of_thrones_theme: any = new Audio("/GOT-Theme.mp3");
    game_of_thrones_theme.play();
  }

  return (
    <div className='flex flex-col justify-center items-center sm:py-30 py-24 gap-6 px-4'>
        <div className='relative flex justify-center items-center'>
            <img 
                src="/evil-ismail.jpg"
                alt="Ismail Boularbah" style={{
                maxWidth: '170px',
                width: '100%',
                margin: 'auto',
                borderRadius: '50%'
            }}/>
            <button 
                onClick={() => {playTheme()}}
                title="Play Game Of Thrones Theme <3"
                className='p-0.5 bg-white rounded-full absolute -right-2 bottom-8 text-3xl text-black dark:text-white dark:bg-stone-900 active:scale-95 cursor-none sm:cursor-pointer'>
                <BsFillPlayCircleFill className='m-0' />
            </button>
            <div>
                <img 
                    src="/Fez-Hat.png" 
                    height="30px" 
                    width="30px"
                    className='absolute top-8 -left-2' 
                />
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='text-center font-bold text-2xl'>
                Ismail Boularbah
            </h2>
            <p className='max-w-md w-100 m-auto text-center text-sm sm:text-md leading-6'>
                Frontend Developer Intern <b>@Yutapp</b>, Cuber, Chess, And Formula 1🏎️ Lover {"<3"}
            </p>
        </div>
        <div className='flex justify-center items-center'>
            <ul className='flex justify-center items-center gap-6'>
                <li className='sm:text-2xl text-xl' title='Twitter'>
                    <Link href="https://twitter.com/boularbahsmail" legacyBehavior>
                        <a target="_blank">
                            <FiTwitter />
                        </a>
                    </Link>
                </li>
                <li className='sm:text-2xl text-xl' title='LinkedIn'>
                    <Link href="https://www.linkedin.com/in/ismail-boularbah-a0926919b/" legacyBehavior>
                        <a target="_blank">
                            <FiLinkedin />
                        </a>
                    </Link>
                </li>
                <li className='sm:text-2xl text-xl' title='GitHub'>
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