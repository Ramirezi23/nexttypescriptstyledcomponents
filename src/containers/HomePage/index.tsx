import Head from 'next/head';

import { Footer } from '../../components/Footer';

import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { PostData } from '../../domain/posts/post';
import { Category, Container } from './styles';
import { SITE_NAME } from '../../config/app-config';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
};

export default function HomePage({ posts, category }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{category ? `${category} - ${SITE_NAME}` : SITE_NAME}</title>
        <meta
          name="description"
          content="Este é o meu blog de testes a typesript next strapi netlify entre outras artimanhas que não domino"
        />
      </Head>
      <Header />
      {category && <Category>Categoria {category}</Category>}
      <MainContainer>
        <Container>
          {posts &&
            posts.map((post) => (
              <PostCard
                key={post.slug}
                cover={post.cover && post.cover.formats.small.url}
                slug={post.slug}
                title={post.title}
              />
            ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
