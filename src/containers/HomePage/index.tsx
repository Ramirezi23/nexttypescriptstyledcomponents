import Head from 'next/head';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { PostData } from '../../domain/posts/post';
import { AllPostsLinks, Category, Container } from './styles';
import { SITE_NAME } from '../../config/app-config';
import { PaginationData } from '../../domain/posts/pagination';
import { Pagination } from '../../components/Pagination';
import Link from 'next/link';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
  //alteracao em baixo
  // const pageTitle = category ? `${category} - ${SITE_NAME}` : SITE_NAME;

  return (
    <>
      <Head>
        <title>
          {category ? `${category} - ${SITE_NAME}` : SITE_NAME}{' '}
          {pagination?.nextPage && ` - Página ${pagination.nextPage - 1}`}
        </title>
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
        <Pagination {...pagination} />
        {!pagination?.nextPage && (
          <Link href="/post/page/1/[...param]" as="/post/page/1" passHref>
            <AllPostsLinks>Ver todos os Posts</AllPostsLinks>
          </Link>
        )}
      </MainContainer>
      <Footer />
    </>
  );
}
