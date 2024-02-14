import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { PostData } from '../../domain/posts/post';
import { Container } from './styles';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts &&
            posts.map((post) => (
              <PostCard
                key={post.slug}
                cover={post.cover && post.cover.formats.small.url} // Add a check for post.cover
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
