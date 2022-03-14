import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export const Contatos = () => {
  const contactsState = useSelector();

  return (
    <React.Fragment>
      <Box
        height="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      ></Box>
    </React.Fragment>
  );
};
