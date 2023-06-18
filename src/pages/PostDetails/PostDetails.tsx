import { useParams } from 'react-router-dom';

import { Subheader, Details } from 'src/components/index';

export const PostDetails = () => {
  const { postSlug } = useParams();
  if (!postSlug) {
    throw new Error(
      'PostDetails page should be rendered inside route with `postSlug` param',
    );
  }
  const id = postSlug.split('post')[1];
  return (
    <>
      <Subheader text={`post${id} details:`} />
      <Details postId={id} />
    </>
  );
};
