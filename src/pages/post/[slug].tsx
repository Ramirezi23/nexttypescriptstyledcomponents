import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { countAllPosts } from '../../data/posts/count-all-posts';
import { getPost } from '../../data/posts/get-post';
import { PostData } from '../../domain/posts/post';
import { Post } from '../../containers/Post';
import Error from 'next/error';
import { useRouter } from 'next/router';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading, wait a moment...</div>;
  }

  if (!post) {
    return <Error statusCode={404} />;
  }

  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params.slug);

  return {
    props: { post: posts[0] },
    revalidate: 600,
  };
};
