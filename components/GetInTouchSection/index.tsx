import { FunctionComponent } from 'react';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';

import { TwitterTweetEmbed} from 'react-twitter-embed';

const GetInTouchSection: FunctionComponent = () => {
  return (
    <div className="sm:py-16 py-10 sm:text-left text-center">
        <h2 className='sm:text-3xl text-2xl font-bold'>Connect with me 📬</h2>
        <div  className='py-4'>
            <button>
                <a 
                    className='bg-black text-white dark:text-black dark:bg-white font-semibold py-2 px-4 mt-4 rounded text-sm flex justify-center items-center gap-2 active:scale-95'
                    href="mailto:boularbahismail01@gmail.com?subject=Saying Hi">
                    <span>Email Me</span>
                    <MdOutlineMarkEmailUnread />
                </a> 
            </button>
        </div>
        <h3 className='py-4 text-xl font-bold'>
            ⎯ Find me on Twitter 👇
        </h3>
        <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 sm:gap-4'>
            <TwitterTweetEmbed tweetId={'1567528935658766337'} />
            <TwitterTweetEmbed tweetId={'1544057989530894337'} />
            <TwitterTweetEmbed tweetId={'1563264971365945344'} />
        </div>
    </div>
  )
}

export default GetInTouchSection;