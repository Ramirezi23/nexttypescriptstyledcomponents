import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { countAllPosts } from '../../data/posts/count-all-posts';
import { getPost } from '../../data/posts/get-post';
import { PostData } from '../../domain/posts/post';
import { Post } from '../../containers/Post';
// import Markdown from 'react-markdown';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
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

  if (!posts || posts.length === 0) {
    return {
      notFound: true, // Return a 404 page if the post is not found
    };
  }

  return {
    props: { post: posts[0] },
    // revalidate: 5,
  };
};
