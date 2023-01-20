import type { NextPage, GetStaticProps } from "next";
import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import { postDataType } from "../../types"

export async function getStaticPaths() {
    const files = fs.readdirSync('./content/blog/posts/');
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

interface IParams {
    slug: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params;
    const fileName = fs.readFileSync(`./content/blog/posts/${slug}.md`, 'utf-8');
    const { data: postHeaderData, content } = matter(fileName);

    return {
        props: {
            post: {
                ...postHeaderData,
                content
            }
        }
    };
}

interface Props {
    post: postDataType
}

const PostPage: NextPage<Props> = ({ post }) => {
    return (
        <div className='prose mx-auto'>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: md().render(post?.content) }} />
        </div>
    );
}

export default PostPage;