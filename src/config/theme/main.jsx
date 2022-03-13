import { createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: purple.A700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 1,
          padding: 0,
        },
        body: {
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          overflowY: 'hidden',
          backgroundColor: purple.A700,
        },
        '#root': {
          overflow: 'hidden',
          height: '100%',
        },
      },
    },
  },
});
