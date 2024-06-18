import { PropsWithChildren } from 'react';
import { Mock } from 'vitest';
import { search } from '../../services/movieService';
import { fireEvent, render, screen } from '../../test-utils';
import { mockSearchResponse } from '../../services/movieService.mocks';
import HomePage from './Home.page';

vi.mock('../../services/movieService');

vi.mock('react-router-dom', () => ({
  Link: ({ to, children }: PropsWithChildren & { to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

vi.mock('../../components/Layout/Layout', () => ({
  default: ({ children }: PropsWithChildren) => <div>{children}</div>,
}));

describe('HomePage', () => {
  beforeEach(() => {
    (search as Mock).mockResolvedValue(mockSearchResponse);
  });

  it('renders list of movies and pagination when user types into search input', async () => {
    render(<HomePage />);

    expect(screen.queryAllByText('Rating:', { exact: false })).toHaveLength(0);
    expect(screen.queryAllByRole('button')).toHaveLength(0);

    fireEvent.change(await screen.findByPlaceholderText('Search movies...'), {
      target: { value: 'home alone' },
    });

    const ratingText = await screen.findAllByText('Rating:', { exact: false });
    expect(ratingText).toHaveLength(10);

    const paginationButtons = await screen.findAllByRole('button');
    expect(paginationButtons).toHaveLength(7);

    expect(search).toHaveBeenCalledTimes(1);
    expect(search).toHaveBeenLastCalledWith('home alone');
  });

  it('calls search movies service when user clicks on a page button', async () => {
    render(<HomePage />);

    fireEvent.change(await screen.findByPlaceholderText('Search movies...'), {
      target: { value: 'home alone' },
    });

    fireEvent.click(await screen.findByRole('button', { name: '2' }));

    expect(search).toHaveBeenCalledTimes(2);
    expect(search).toHaveBeenLastCalledWith('home alone', 1);
  });
});
