import { Image, Pill, Text, Title } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL } from '../../constants';
import useFetchDetails from '../../hooks/useFetchDetails';
import classes from './MovieDetails.module.scss';
import Layout from '../../components/Layout/Layout';

const MovieDetails = () => {
  const { movieId } = useParams();
  const details = useFetchDetails(movieId);

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.image}>
          <Image
            radius="md"
            alt={details?.title}
            src={`${IMAGE_BASE_URL}/w780/${details?.poster_path}`}
            fallbackSrc="https://placehold.co/300x450?text=No Image"
          />
        </div>

        <div className={classes.description}>
          <Title mb="xs" className={classes.title}>
            {details?.title}
          </Title>
          {details?.genres.map((genre) => (
            <Pill mr="xs" key={genre.id} className={classes.genre}>
              {genre.name}
            </Pill>
          ))}
          <Text mb="xs" mt="xs" size="md" c="dimmed">
            Release Date: {details?.release_date}
          </Text>
          <Text mb="xs" size="md" c="dimmed">
            Rating: {details?.vote_average}
          </Text>
          <Text size="lg">Overview</Text>
          <Text size="md">{details?.overview}</Text>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetails;
