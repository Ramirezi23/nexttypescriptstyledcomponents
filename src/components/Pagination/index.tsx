import Link from 'next/link';
import { PaginationData } from '../../domain/posts/pagination';
import { Container, NextLink, PreviousLink } from './styled';

export type PaginationProps = PaginationData;

export const Pagination = ({
  nextPage,
  previousPage,
  category,
  numberOfPosts,
  postsPerPage,
}: PaginationProps) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;
  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link as={previousLink} href="/post/page/[...param]">
            Previous
          </Link>
        </PreviousLink>
      )}

      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href="/post/page/[...param]">
            Next
          </Link>
        </NextLink>
      )}
    </Container>
  );
};
