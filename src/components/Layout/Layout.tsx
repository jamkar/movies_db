import { AppShell, Image } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Layout.module.scss';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header className={classes.header}>
        <Link to="/" className={classes.home}>
          <Image fit="contain" h={40} w={40} alt="Home" src="/tmdb-logo.svg" />
        </Link>
      </AppShell.Header>
      <AppShell.Main className={classes.main}>{children}</AppShell.Main>
    </AppShell>
  );
};

export default Layout;
