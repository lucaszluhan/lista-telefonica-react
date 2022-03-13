import { Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <React.Fragment>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Link
          style={{ width: '100%', textDecoration: 'none' }}
          to={'/registro'}
        >
          <Button
            sx={(theme) => ({
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              fontSize: '1.2em',
              borderRadius: 50,
              p: 2,
              width: '100%',
            })}
          >
            Novo Registro
          </Button>
        </Link>
        <Link
          style={{ width: '100%', textDecoration: 'none' }}
          to={'/contatos'}
        >
          <Button
            sx={(theme) => ({
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              fontSize: '1.2em',
              borderRadius: 50,
              p: 2,
              width: '100%',
            })}
          >
            Contatos
          </Button>
        </Link>
      </Container>
    </React.Fragment>
  );
};