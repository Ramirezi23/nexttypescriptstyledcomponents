import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './styled';
import Image from 'next/image';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export const PostCard = ({ slug, title, cover }: PostCardProps) => {
  return (
    <Container>
      <PostCardCover>
        <Link as={`/post/${slug}`} href="/post/[slug]">
          <Image src={cover} alt={title || 'Imagem'} />
        </Link>
      </PostCardCover>

      <PostCardHeading>
        <Link as={`/post/${slug}`} href="/post/[slug]">
          {title}
        </Link>
      </PostCardHeading>
    </Container>
  );
};
