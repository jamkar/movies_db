import { render as testingLibraryRender } from '@testing-library/react';
import Wrapper from './Wrapper';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: Wrapper,
  });
}
