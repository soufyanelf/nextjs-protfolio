import type { NextPage } from "next";
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { postDataType } from "../../types"

export async function getStaticProps() {
    const files = fs.readdirSync('./content/blog/posts');
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`./content/blog/posts/${fileName}`, 'utf-8');
        const { data: postHeader } = matter(readFile);

        return {
            slug,
            ...postHeader,
        };
    });

    return {
        props: {
            posts,
        }
    }
}

interface Props {
    posts: Array<postDataType>
}

const BlogPage: NextPage<Props> = ({ posts }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0 mt-20'>
            {posts.map(post => (
                <div
                    key={post.slug}
                    className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
                >
                    <Link href={`/blog/${post.slug}`}>
                        <Image
                            width={650}
                            height={340}
                            alt={post.title}
                            src={`/${post.socialImage}`}
                        />
                        <h1 className='p-4'>{post.title}</h1>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogPage;