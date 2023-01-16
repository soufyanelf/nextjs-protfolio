import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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


export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`./content/blog/posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}

export default function PostPage({ frontmatter, content }) {
    return (
        <div className="relative py-4 sm:min-h-screen">
            <Head>
                <title></title>
                <link rel="icon" href="/Fez-Hat.png" />
            </Head>
            <main className="p-4 max-w-6xl w-100 m-auto">
                <Navbar />
                <div className='prose mx-auto'>
                    <h1>{frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
                </div>
                <Footer />
            </main>
        </div>
    );
}