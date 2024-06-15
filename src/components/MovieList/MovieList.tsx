import { Card, Image, Text } from '@mantine/core';
import { IMAGE_BASE_URL } from '../../constants';
import { Movie } from '../../types';
import classes from './MovieList.module.scss';
import { Link } from 'react-router-dom';

const MovieList = ({ items }: { items: Movie[] }) => {
  return (
    <div className={classes.container}>
      {items.length === 0 ? (
        <div>No Results</div>
      ) : (
        items.map((item) => {
          return (
            <Link to={`/movies/${item.id}`} key={item.id}>
              <Card
                className={classes.card}
                shadow="sm"
                padding="0"
                radius="md"
                withBorder
              >
                <Image
                  className={classes.image}
                  alt={item.title}
                  src={`${IMAGE_BASE_URL}/w300/${item.poster_path}`}
                  fallbackSrc="https://placehold.co/100x150?text=No Image"
                />
                <div className={classes.textBlock}>
                  <Text mb="xs" size="lg" fw={500}>
                    {item.title}
                  </Text>
                  <Text mb="xs" size="sm" c="dimmed">
                    Release Date: {item.release_date}
                  </Text>
                  <Text mb="xs" size="sm" c="dimmed">
                    Rating: {item.vote_average}
                  </Text>
                </div>
              </Card>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default MovieList;
