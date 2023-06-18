import { useParams } from 'react-router-dom';

import { PostsTable, Subheader } from 'src/components/index';

export const Posts = () => {
  const { userId } = useParams();
  if (!userId) {
    throw new Error(
      'Posts page should be rendered inside route with `userId` param',
    );
  }

  return (
    <>
      <Subheader text={`user${userId} posts:`} />
      <PostsTable userId={userId} />
    </>
  );
};
