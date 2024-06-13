import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { Movie } from '../types';
import { IMAGE_BASE_URL } from '../constants';

const Cards = ({ movies }: { movies: Movie[] }) => {
  return (
    <>
      {movies.map((movie) => {
        return (
          <Card key={movie.id} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={`${IMAGE_BASE_URL}/w300/${movie.poster_path}`}
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{movie.title}</Text>
              <Badge color="pink">On Sale</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              {movie.release_date}
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        );
      })}
    </>
  );
};

export default Cards;
