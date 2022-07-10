import React from 'react';
import { ThemeProvider } from 'styled-components';
import i18next from 'i18next';
import { theme, translations } from '@config';
import { Alert } from '@components';
import { ReservationForm } from '@containers';

const { Provider: AlertProvider, transitions, positions, AlertTemplate } = Alert;

const alertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  transition: transitions.SCALE,
};

i18next.init({
  lng: 'en',
  resources: translations,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <ReservationForm />
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
