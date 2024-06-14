import { Card, Image, Text } from '@mantine/core';
import { IMAGE_BASE_URL } from '../../constants';
import { Movie } from '../../types';
import classes from './MovieList.module.scss';
import { Link } from 'react-router-dom';

const MovieList = ({ items }: { items: Movie[] }) => {
  return (
    <div className={classes.container}>
      {items.map((item) => {
        return (
          <Link to={`/movies/${item.id}`} key={item.id}>
            <Card
              h={150}
              className={classes.card}
              shadow="sm"
              padding={0}
              radius="md"
              withBorder
            >
              <div className={classes.image}>
                <Image
                  w={100}
                  alt={item.title}
                  src={`${IMAGE_BASE_URL}/w300/${item.poster_path}`}
                  fallbackSrc="https://placehold.co/100x150?text=No Image"
                />
              </div>
              <div>
                <Text fw={500}>{item.title}</Text>
                <Text size="sm" c="dimmed">
                  {item.release_date}
                </Text>
                <Text size="sm" c="dimmed">
                  {item.vote_average}
                </Text>
                <Text size="sm">{item.overview}</Text>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default MovieList;
