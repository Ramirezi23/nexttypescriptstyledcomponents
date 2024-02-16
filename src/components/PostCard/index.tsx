import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './styled';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export const PostCard = ({ slug, title, cover }: PostCardProps) => {
  return (
    <Container>
      <PostCardCover>
        <Link
          href="/posts/[slug]"
          passHref
          legacyBehavior
          as={`/posts/${slug}`}
        >
          <a>
            <img src={cover} alt={title} />
          </a>
        </Link>
      </PostCardCover>

      <PostCardHeading>
        <Link
          href="/posts/[slug]"
          passHref
          legacyBehavior
          as={`/posts/${slug}`}
        >
          <a>{title}</a>
        </Link>
      </PostCardHeading>
    </Container>
  );
};
