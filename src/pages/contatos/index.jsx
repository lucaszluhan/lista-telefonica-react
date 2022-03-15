import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { ListaContatos } from '../../components/listaContatos';

export const Contatos = () => {
  const contatosState = useSelector((store) => store.contacts);

  return (
    <React.Fragment>
      <Box
        height="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <ListaContatos data={contatosState} />
      </Box>
    </React.Fragment>
  );
};
