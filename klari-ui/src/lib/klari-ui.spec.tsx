import { render } from '@testing-library/react';

import KlariUi from './klari-ui';

describe('KlariUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KlariUi />);
    expect(baseElement).toBeTruthy();
  });
});
