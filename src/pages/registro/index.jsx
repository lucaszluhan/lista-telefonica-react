import { Box, TextField, Typography, Button, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ReplyIcon from '@mui/icons-material/Reply';
import React from 'react';
import { Link } from 'react-router-dom';

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
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          sx={() => ({ backgroundColor: theme.palette.primary.contrastText })}
        >
          <TextField
            id="contactName"
            required
            label="Nome:"
            sx={() => ({ width: '80%', m: 3 })}
          />
          <TextField
            id="contactNumber"
            required
            label="Telefone:"
            sx={() => ({ width: '80%', m: 3 })}
          />
        </Box>
        <Box width={1} m={5} display={'flex'} justifyContent={'space-evenly'}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
          <Link
            to={'/'}
            style={{
              color: theme.palette.primary.contrastText,
              textDecoration: 'none',
            }}
          >
            <Button variant="contained" endIcon={<ReplyIcon />}>
              Back
            </Button>
          </Link>
        </Box>
      </Box>
    </React.Fragment>
  );
};
