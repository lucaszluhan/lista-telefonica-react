import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { mainTheme } from './config/theme/main';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import { MainLayout } from './config/layout/main';
import { Router } from './routes/router';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <PersistGate persistor={persistor}>
            <CssBaseline />
            <MainLayout>
              <Router />
            </MainLayout>
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
