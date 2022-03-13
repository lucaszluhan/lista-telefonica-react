import { Button, Container } from '@mui/material';
import React from 'react';

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
        <Button
          sx={(theme) => ({
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            fontSize: '1.2em',
            borderRadius: 16,
            p: 2,
            width: '100%',
          })}
        >
          Novo Registro
        </Button>
        <Button
          sx={(theme) => ({
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            fontSize: '1.2em',
            borderRadius: 16,
            p: 2,
            width: '100%',
          })}
        >
          Contatos
        </Button>
      </Container>
    </React.Fragment>
  );
};
