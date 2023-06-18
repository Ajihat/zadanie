import { useParams } from 'react-router-dom';

import { Subheader, Details } from 'src/components/index';

export const PostDetails = () => {
  const { postId } = useParams();
  if (!postId) {
    throw new Error(
      'PostDetails page should be rendered inside route with `postId` param',
    );
  }
  return (
    <>
      <Subheader text={`post${postId} details:`} />
      <Details postId={postId} />
    </>
  );
};
