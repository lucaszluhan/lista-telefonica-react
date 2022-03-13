import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <React.Fragment>
      <Box
        justifyContent="space-evenly"
        alignItems="center"
        height="1"
        display="flex"
        flexDirection="column"
      >
        <Link
          style={{ width: '100%', textDecoration: 'none' }}
          to={'/registro'}
        >
          <Button
            sx={() => ({
              fontSize: '1.2em',
              borderRadius: 50,
              p: 2,
              width: 1,
            })}
            variant="contained"
          >
            Novo Registro
          </Button>
        </Link>
        <Link
          style={{ width: '100%', textDecoration: 'none' }}
          to={'/contatos'}
        >
          <Button
            sx={() => ({
              fontSize: '1.2em',
              borderRadius: 50,
              p: 2,
              width: 1,
            })}
            variant="contained"
          >
            Contatos
          </Button>
        </Link>
      </Box>
    </React.Fragment>
  );
};
