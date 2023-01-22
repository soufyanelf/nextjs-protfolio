import React, { useState } from "react";
import type { NextPage } from "next";
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { postDataType } from "../../types"


import { FiLoader } from "react-icons/fi";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";


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

    const [postsLength, setPostsLength] = useState(3);
    const [loading, setLoading] = useState(false);

    return (
        <div className="sm:py-16 py-10 sm:text-left text-center">
            <h2 className="sm:text-3xl text-2xl font-bold">Enjoy Reading 🚀</h2>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">
                {posts.map(
                    (post: any, index: number) =>
                        index <= postsLength && (
                            <div
                                key={index}
                                className="h-max text-left dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800 border border-gray-150 bg-gray-100 hover:bg-gray-50 p-4 rounded-md flex flex-col gap-4"
                                title={post.title}
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <Image
                                        width={650}
                                        height={340}
                                        alt={post.title}
                                        src={`/${post.socialImage}`}
                                    />
                                    <h3 className="text-xl font-bold mt-5">{post.title}</h3>
                                    <p className="text-xs dark:text-gray-300 text-black leading-6 font-semibold mt-5">
                                        {post.metaDesc}
                                    </p>
                                </Link>
                                <div className="flex justify-start items-center gap-2 flex-wrap">
                                    {post.tags.map((tag: any, index: number) => (
                                        <span className="text-sm font-bold pb-1" key={index}>
                                            • {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                )}
            </div>
            {postsLength <= 7 && (
                <div className="mt-10 flex justify-center items-center w-100">
                    <button
                        className="flex justify-center items-center gap-2 py-2 px-4 rounded font-semibold text-sm dark:bg-white dark:text-black text-white bg-black active:scale-95"
                        onClick={() => {
                            setLoading(true);
                            setTimeout(() => {
                                setPostsLength(postsLength * 2);
                                setLoading(false);
                            }, 1000);
                        }}
                        title="Load more projects"
                    >
                        <FiLoader
                            className={`text-md ${loading == true ? "spin" : null}`}
                        />
                        <span>Load more projects</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default BlogPage;


 