import React from 'react';
import { ThemeProvider } from 'styled-components';
import i18next from 'i18next';
import { theme, translations } from '@config';
import { ReservationForm } from '@containers';

i18next.init({
  lng: 'en',
  resources: translations,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReservationForm />
    </ThemeProvider>
  );
}

export default App;
