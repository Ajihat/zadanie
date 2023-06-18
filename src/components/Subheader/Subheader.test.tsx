import { render } from '@testing-library/react';
import { Subheader } from '..';

describe('Subheader', () => {
  test('should render subheader with correct text', () => {
    const text = 'This is a subheader';
    const { getByText } = render(<Subheader text={text} />);

    const subheaderText = getByText(text);

    expect(subheaderText).toBeInTheDocument();
  });
});
