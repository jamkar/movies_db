import { useEffect, useState } from 'react';
import { Movie } from '../../types';
import { getDetails } from '../../services/movieService';
import { useParams } from 'react-router-dom';
import classes from './MovieDetails.module.scss';
import { Image, Title, Text, Pill } from '@mantine/core';
import { IMAGE_BASE_URL } from '../../constants';
import Layout from '../../components/Layout/Layout';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState<Movie>();

  useEffect(() => {
    (async (id) => {
      if (id) {
        const movieDetails = await getDetails(id);
        setDetails(movieDetails);
      }
    })(movieId);
  }, [movieId]);

  return (
    <Layout>
      <div className={classes.details}>
        <div className={classes.image}>
          <Image
            radius="md"
            w={300}
            h={450}
            alt={details?.title}
            src={`${IMAGE_BASE_URL}/w300/${details?.poster_path}`}
            fallbackSrc="https://placehold.co/300x450?text=No Image"
          />
        </div>
        <div className={classes.description}>
          <Title className={classes.title}>{details?.title}</Title>
          {details?.genres.map((genre) => (
            <Pill className={classes.genre}>{genre.name}</Pill>
          ))}
          <Text size="md" c="dimmed">
            Release Date: {details?.release_date}
          </Text>
          <Text size="lg">Overview</Text>
          <Text size="md">{details?.overview}</Text>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetails;
