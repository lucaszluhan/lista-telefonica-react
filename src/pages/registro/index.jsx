import { Box, TextField, Typography, Button, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ReplyIcon from '@mui/icons-material/Reply';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToContacts } from '../../store/modules/contacts/actions';
import { useNavigate } from 'react-router-dom';

export const Registro = () => {
  const theme = useTheme();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeInput = (event, input) => {
    switch (input) {
      case 'name':
        setName(event.target.value);
        break;
      case 'phone':
        setPhone(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    dispatch(addToContacts({ name, phone }));
    navigate('/');
  };

  return (
    <React.Fragment>
      <Box
        component="form"
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
            onChange={(e) => handleChangeInput(e, 'name')}
            sx={() => ({ width: '80%', m: 3 })}
          />
          <TextField
            id="contactNumber"
            required
            label="Telefone:"
            onChange={(e) => handleChangeInput(e, 'phone')}
            sx={() => ({ width: '80%', m: 3 })}
          />
        </Box>
        <Box width={1} m={5} display={'flex'} justifyContent={'space-evenly'}>
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
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => handleSubmit()}
          >
            Send
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};
