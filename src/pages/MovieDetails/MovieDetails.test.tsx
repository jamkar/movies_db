import { PropsWithChildren } from 'react';
import { Mock } from 'vitest';
import { getDetails } from '../../services/movieService';
import { mockDetailsResponse } from '../../services/movieService.mocks';
import { render, screen } from '../../test-utils';
import MovieDetails from './MovieDetails.page';

vi.mock('../../services/movieService');

vi.mock('react-router-dom', () => ({
  useParams: () => ({ movieId: '12536' }),
}));

vi.mock('../../components/Layout/Layout', () => ({
  default: ({ children }: PropsWithChildren) => <div>{children}</div>,
}));

describe('MovieDetails page', () => {
  beforeEach(() => {
    (getDetails as Mock).mockResolvedValue(mockDetailsResponse);
  });

  it('renders movie details', async () => {
    render(<MovieDetails />);

    expect(await screen.findByText('Home Alone 4')).toBeInTheDocument();
    expect(
      await screen.findByText('Release Date: 2002-11-03'),
    ).toBeInTheDocument();
    expect(await screen.findByText('Rating: 4.504')).toBeInTheDocument();
    expect(
      await screen.findByText("Kevin McCallister's parents have split up", {
        exact: false,
      }),
    ).toBeInTheDocument();
    expect(await screen.findByText('Comedy')).toBeInTheDocument();
    expect(await screen.findByText('Family')).toBeInTheDocument();
    expect(await screen.findByText('TV Movie')).toBeInTheDocument();
  });
});
