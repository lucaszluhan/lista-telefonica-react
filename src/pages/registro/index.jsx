import { Box, TextField, Typography, Button, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';

export const Registro = () => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box
        element="form"
        height="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h2"
          display="flex"
          justifyContent="center"
          m={5}
          fontSize={'2em'}
          fontWeight={'400'}
          color={theme.palette.primary.contrastText}
        >
          Registro de Contato
        </Typography>
        <Box
          p={2}
          width={'75%'}
          borderRadius={2}
          sx={() => ({ backgroundColor: theme.palette.primary.contrastText })}
        >
          <TextField
            id="contactName"
            required
            label="Nome:"
            sx={() => ({ width: 1, mb: 1 })}
          />
          <TextField
            id="contactNumber"
            required
            label="Telefone:"
            sx={() => ({ width: 1 })}
          />
        </Box>
        <Box m={5}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};
