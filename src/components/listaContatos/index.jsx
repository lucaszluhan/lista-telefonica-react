import { List, ListItem, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';

export const ListaContatos = ({ data }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (data) {
      setContacts(data);
    }
  }, [data]);

  return (
    <List
      sx={{ overflow: 'auto', height: '80%', width: '50%' }}
      contacts={contacts}
    >
      {contacts.map((contact) => (
        <ListItem
          key={contact}
          sx={(theme) => ({
            backgroundColor: theme.palette.primary.main,
            borderRadius: 5,
            my: 1,
            color: theme.palette.primary.contrastText,
          })}
        >
          <ListItemText
            primary={`Nome: ${contact.name}`}
            sx={{ alignItems: 'center' }}
          />
          <ListItemText primary={`Telefone: ${contact.phone}`} />
        </ListItem>
      ))}
    </List>
  );
};
