import React from 'react';
import { Container, Typography } from '@mui/material';

export const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Container
        maxWidth="md"
        sx={(theme) => ({
          padding: '1em',
          backgroundColor: theme.palette.primary.main,
          height: '10%',
          borderRadius: 50,
          boxShadow: 5,
        })}
      >
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography
            sx={(theme) => ({
              color: theme.palette.primary.contrastText,
              fontSize: '2em',
              borderRadius: 30,
            })}
          >
            Lista Telefônica
          </Typography>
        </Container>
      </Container>
      <Container
        maxWidth="md"
        sx={(theme) => ({
          height: '89%',
          backgroundColor: theme.palette.primary.dark,
          borderRadius: 50,
          boxShadow: 5,
        })}
      >
        {children}
      </Container>
    </React.Fragment>
  );
};
