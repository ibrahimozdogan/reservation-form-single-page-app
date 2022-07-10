import React, { useState } from 'react';
import {
  Alert,
  Button,
  TextInput,
  Grid,
  Cell,
  Picker,
  DateRangePicker,
  Title,
  Divider, Loading,
} from '@components';
import { translate } from '@utils';
import { countries } from '@config';
import { ReservationApi } from '@api';
import styled from 'styled-components';
import { ReservationPayload } from '@types';

const { useAlert } = Alert;

const StyledForm = styled.form`
  max-width: 1000px;
  padding: 10px;
  margin: 10px auto;
`;

const payload: ReservationPayload = {
  billingAddress: '',
  billingCountry: '',
  checkInDate: '',
  checkOutDate: '',
  city: '',
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  postalCode: '',
  numberOfGuests: 0,
};

const setToPayload = (key: keyof ReservationPayload, value: string|number) => {
  // @ts-ignore
  payload[key] = value;
};

function ReservationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const alert = useAlert();

  return (
    <StyledForm
      onSubmit={async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const response = await ReservationApi.saveReservation(payload);
        alert.show(translate(response.data.message));

        setIsLoading(false);
      }}
    >
      <Title text={translate('RESERVATION_FORM_TITLE')} size="h1" />
      <Divider />
      <Grid
        columns={2}
        justifyContent="center"
        alignContent="center"
        columnGap="10px"
      >
        <Cell>
          <DateRangePicker
            onChange={(selectedDates) => {
              const dates = selectedDates
                ?.map((date) => date.format('YYYY-MM-DD')) || [];

              setToPayload('checkInDate', dates[0]);
              setToPayload('checkOutDate', dates[1]);
            }}
            label={translate('CHECK_IN_OUT_DATES')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(numberOfGuests) => {
              setToPayload('numberOfGuests', Number(numberOfGuests));
            }}
            label={translate('NUMBER_OF_GUESTS')}
            type="number"
            min={1}
            max={20}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(firstName) => {
              setToPayload('firstName', firstName);
            }}
            label={translate('FIRST_NAME')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(lastName) => {
              setToPayload('lastName', lastName);
            }}
            label={translate('LAST_NAME')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(billingAddress) => {
              setToPayload('billingAddress', billingAddress);
            }}
            label={translate('BILLING_ADDRESS')}
            required
          />
        </Cell>
        <Cell>
          <Picker
            onChange={(billingCountry) => {
              setToPayload('billingCountry', billingCountry);
            }}
            options={countries}
            label={translate('BILLING_COUNTRY')}
            placeholder={translate('SELECT_COUNTRY')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(postalCode) => {
              setToPayload('postalCode', postalCode);
            }}
            label={translate('POSTAL_CODE')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(city) => {
              setToPayload('city', city);
            }}
            label={translate('CITY')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(email) => {
              setToPayload('email', email);
            }}
            label={translate('EMAIL')}
            type="email"
            validationMessage={translate('EMAIL_VALIDATION_MESSAGE')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(phoneNumber) => {
              setToPayload('phoneNumber', phoneNumber);
            }}
            label={translate('PHONE_NUMBER')}
            type="tel"
            validationMessage={translate('PHONE_NUMBER_VALIDATION_MESSAGE')}
            required
          />
        </Cell>
        <Cell>
          {
            isLoading
              ? <Loading type="spinningBubbles" />
              : <Button onClick={() => {}}>{translate('BOOK_NOW')}</Button>
          }
        </Cell>
      </Grid>
    </StyledForm>
  );
}

export default ReservationForm;
